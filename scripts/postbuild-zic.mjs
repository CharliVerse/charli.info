import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const siteUrl = 'https://charli.info';

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function decodeEntities(value) {
  const named = { amp: '&', apos: "'", gt: '>', lt: '<', nbsp: ' ', quot: '"', ndash: '-', mdash: '-', rsquo: "'", lsquo: "'", rdquo: '"', ldquo: '"' };
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => named[name.toLowerCase()] ?? match);
}

function cleanInline(value, pageUrl) {
  return decodeEntities(value)
    .replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => `[${text.replace(/<[^>]+>/g, '').trim()}](${new URL(decodeEntities(href), pageUrl).href})`)
    .replace(/<br\s*\/?>/gi, '  \n')
    .replace(/<[^>]+>/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\s+/g, ' ')
    .trim();
}

function htmlMainToMarkdown(html, pageUrl) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  if (!main) throw new Error(`No main landmark found in ${pageUrl}`);

  let output = main
    .replace(/<pre\b[^>]*>\s*<code\b[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/gi, (_, text) => `\n\`\`\`text\n${decodeEntities(text).replace(/<[^>]+>/g, '').trim()}\n\`\`\`\n`)
    .replace(/<img\b[^>]*\bsrc="([^"]+)"[^>]*\balt="([^"]*)"[^>]*>/gi, (_, src, alt) => `\n![${decodeEntities(alt)}](${new URL(decodeEntities(src), pageUrl).href})\n`)
    .replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, quote) => {
      const paragraphs = [...quote.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map((match) => `> ${cleanInline(match[1], pageUrl)}`);
      return `\n${paragraphs.join('\n\n')}\n`;
    })
    .replace(/<ol\b[^>]*>([\s\S]*?)<\/ol>/gi, (_, list) => {
      let index = 0;
      return list.replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_, item) => `\n${++index}. ${cleanInline(item, pageUrl)}`);
    })
    .replace(/<ul\b[^>]*>([\s\S]*?)<\/ul>/gi, (_, list) => list.replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_, item) => `\n- ${cleanInline(item, pageUrl)}`))
    .replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level, text) => `\n${'#'.repeat(Number(level))} ${cleanInline(text, pageUrl)}\n`)
    .replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, (_, text) => `\n${cleanInline(text, pageUrl)}\n`)
    .replace(/<address\b[^>]*>([\s\S]*?)<\/address>/gi, (_, text) => `\n${cleanInline(text, pageUrl)}\n`)
    .replace(/<[^>]+>/g, '');

  output = decodeEntities(output)
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return `${output}\n`;
}

function pageUrlFor(htmlPath) {
  const relativePath = relative('dist', htmlPath).replaceAll('\\', '/');
  if (relativePath === 'index.html') return `${siteUrl}/`;
  return `${siteUrl}/${relativePath.replace(/\/index\.html$/, '/').replace(/\.html$/, '')}`;
}

function xmlEscape(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

if (existsSync('dist/sitemap-0.xml')) copyFileSync('dist/sitemap-0.xml', 'dist/sitemap.xml');
writeFileSync('dist/.nojekyll', '');

const renderedPages = walk('dist')
  .filter((path) => path.endsWith('.html') && !path.endsWith('404.html'))
  .sort()
  .map((html) => {
    const source = readFileSync(html, 'utf8');
    const url = source.match(/<link rel="canonical" href="([^"]+)">/)?.[1] ?? pageUrlFor(html);
    const title = decodeEntities(source.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? 'Untitled page');
    const label = title.replace(/\s+—\s+Charli\.info$/, '').trim();
    const description = decodeEntities(source.match(/<meta name="description" content="([^"]*)">/)?.[1] ?? '');
    const markdownPath = html === 'dist/index.html' ? 'dist/index.md' : join(dirname(html), 'index.md');
    const markdown = htmlMainToMarkdown(source, url);
    mkdirSync(dirname(markdownPath), { recursive: true });
    writeFileSync(markdownPath, markdown);
    return { html, markdownPath, url, label, description, markdown };
  });

const llms = `# Charli.info

> Charli.info is the public home of Charli-Jo Tyrer's conceptual art, accessibility and agent-first design work. Public content is available to sent agents, search indexers, and training crawlers under CC BY-SA 4.0.

## Site map

${renderedPages.map((page) => `- [${page.label}](${page.url}) — [Markdown mirror](${page.url}index.md)${page.description ? ` — ${page.description}` : ''}`).join('\n')}

## Agent access and policy

- Sent agents: served (ai-input=yes).
- Search indexing: permitted (search=yes).
- Model training: permitted (ai-train=yes).

## Author and licence

- Author: Charli-Jo Tyrer, blind writer, conceptual artist and accessibility thinker.
- Licence: CC BY-SA 4.0
- [GitHub repository](https://github.com/CharliVerse/charli.info) — public source front door for this site.
`;

const llmsFull = `# Charli.info

> Complete text of Charli.info, generated from the same rendered pages as the public HTML. Content is licensed under CC BY-SA 4.0 unless stated otherwise.

${renderedPages.map((page) => page.markdown.replace(/^(#{1,6}) /gm, (_, hashes) => `${'#'.repeat(Math.min(6, hashes.length + 1))} `)).join('\n')}
## Agent access and policy

Sent agents: served (ai-input=yes).
Search indexing: permitted (search=yes).
Model training: permitted (ai-train=yes).

## Source and licence

Repository: https://github.com/CharliVerse/charli.info

Licence: CC BY-SA 4.0
`;

writeFileSync('dist/llms.txt', llms);
writeFileSync('dist/llms-full.txt', llmsFull);

const feedPages = renderedPages.filter((page) => /^https:\/\/charli\.info\/(carrados\/[^/]+\/|pieces\/)/.test(page.url));
const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Charli.info</title><description>Writing, design fiction, and accessibility work by Charli-Jo Tyrer.</description><link>${siteUrl}/</link><language>en-GB</language>${feedPages.map((page) => `<item><title>${xmlEscape(page.label)}</title><description>${xmlEscape(page.description)}</description><link>${xmlEscape(page.url)}</link><guid isPermaLink="true">${xmlEscape(page.url)}</guid></item>`).join('')}</channel></rss>\n`;
writeFileSync('dist/rss.xml', rss);
