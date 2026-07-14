import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const siteUrl = 'https://charli.info';
const pages = [
  {
    html: 'dist/index.html',
    markdown: 'dist/index.md',
    url: `${siteUrl}/`,
    label: 'Home',
    description: "Public home of Charli-Jo Tyrer's art, accessibility and agent-first design work.",
  },
  {
    html: 'dist/blind-ant/index.html',
    markdown: 'dist/blind-ant/index.md',
    url: `${siteUrl}/blind-ant/`,
    label: 'Blind Ant',
    description: 'Conceptual art practice using generative AI for design fiction and speculative artefacts.',
  },
  {
    html: 'dist/carrados/index.html',
    markdown: 'dist/carrados/index.md',
    url: `${siteUrl}/carrados/`,
    label: 'Carrados',
    description: 'Accessibility and agent-first design work, including Zero Information Casualty.',
  },
  {
    html: 'dist/carrados/tyrer-framework/index.html',
    markdown: 'dist/carrados/tyrer-framework/index.md',
    url: `${siteUrl}/carrados/tyrer-framework/`,
    label: 'The Tyrer Framework',
    description: 'A theory of accessibility as information integrity, visual dominance and perceptual sovereignty.',
  },
  {
    html: 'dist/carrados/zic-design-standard/index.html',
    markdown: 'dist/carrados/zic-design-standard/index.md',
    url: `${siteUrl}/carrados/zic-design-standard/`,
    label: 'Zero Information Casualty Design Standard',
    description: 'Agent-first web engineering requirements for preserving public meaning across interfaces and readers.',
  },
  {
    html: 'dist/carrados/classical-and-generative-accessibility/index.html',
    markdown: 'dist/carrados/classical-and-generative-accessibility/index.md',
    url: `${siteUrl}/carrados/classical-and-generative-accessibility/`,
    label: 'Why Accessibility Keeps Getting Worse — and Why, for the First Time, It Might Not',
    description: 'The Tyrer Framework in plain language: why accessibility erodes, the ladder from visual dominance to perceptual sovereignty, and the fork AI puts in front of us. By Charli-Jo Tyrer.',
  },
  {
    html: 'dist/carrados/the-api-is-the-ui-now/index.html',
    markdown: 'dist/carrados/the-api-is-the-ui-now/index.md',
    url: `${siteUrl}/carrados/the-api-is-the-ui-now/`,
    label: 'The API Is the UI Now',
    description: "A quiet note on a framework, an architecture Salesforce built for its own reasons, and a first-class screen reader rendering a blind Salesforce user could have now. By Charli-Jo Tyrer.",
  },
  {
    html: 'dist/carrados/the-insurance-that-never-pays-out/index.html',
    markdown: 'dist/carrados/the-insurance-that-never-pays-out/index.md',
    url: `${siteUrl}/carrados/the-insurance-that-never-pays-out/`,
    label: 'The Insurance That Never Pays Out',
    description: 'The Agentic AI Foundation just published the best case for accessibility-as-architecture in years — and then prescribed keeping the exact layer its own witness says never catches up. A reply. By Charli-Jo Tyrer.',
  },
  {
    html: 'dist/charliverse/index.html',
    markdown: 'dist/charliverse/index.md',
    url: `${siteUrl}/charliverse/`,
    label: 'The CharliVerse legacy page',
    description: 'Legacy address that points visitors to the Charli.info home page.',
  },
];

function decodeEntities(value) {
  const named = {
    amp: '&', apos: "'", gt: '>', lt: '<', nbsp: ' ', quot: '"',
    ndash: '-', mdash: '-', rsquo: "'", lsquo: "'", rdquo: '"', ldquo: '"',
  };

  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => named[name.toLowerCase()] ?? match);
}

function cleanInline(value, pageUrl) {
  return decodeEntities(value)
    .replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
      const destination = new URL(decodeEntities(href), pageUrl).href;
      return `[${text.replace(/<[^>]+>/g, '').trim()}](${destination})`;
    })
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function htmlMainToMarkdown(html, pageUrl) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  if (!main) throw new Error(`No main landmark found in ${pageUrl}`);

  let output = main
    .replace(/<pre\b[^>]*>\s*<code\b[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/gi, (_, text) => `\n\`\`\`text\n${decodeEntities(text).replace(/<[^>]+>/g, '').trim()}\n\`\`\`\n`)
    .replace(/<img\b[^>]*\bsrc="([^"]+)"[^>]*\balt="([^"]*)"[^>]*>/gi, (_, src, alt) => `\n![${decodeEntities(alt)}](${new URL(decodeEntities(src), pageUrl).href})\n`)
    .replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level, text) => `\n${'#'.repeat(Number(level))} ${cleanInline(text, pageUrl)}\n`)
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_, text) => `\n- ${cleanInline(text, pageUrl)}`)
    .replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, (_, text) => `\n${cleanInline(text, pageUrl)}\n`)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '');

  output = decodeEntities(output)
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^(- .+)\n(#{1,6} )/gm, '$1\n\n$2')
    .trim();

  return `${output}\n`;
}

function shiftHeadings(markdown, amount = 1) {
  return markdown.replace(/^(#{1,6}) /gm, (_, hashes) => `${'#'.repeat(Math.min(6, hashes.length + amount))} `);
}

if (existsSync('dist/sitemap-0.xml')) {
  copyFileSync('dist/sitemap-0.xml', 'dist/sitemap.xml');
}

writeFileSync('dist/.nojekyll', '');

const renderedPages = pages.map((page) => {
  const markdown = htmlMainToMarkdown(readFileSync(page.html, 'utf8'), page.url);
  mkdirSync(dirname(page.markdown), { recursive: true });
  writeFileSync(page.markdown, markdown);
  return { ...page, markdown };
});

const llms = `# Charli.info

> Charli.info is the public home of Charli-Jo Tyrer's conceptual art, accessibility and agent-first design work. Content is licensed under CC BY-SA 4.0 unless stated otherwise.

## Site

${renderedPages.map((page) => `- [${page.label}](${page.url}) — [Markdown mirror](${page.url}index.md) - ${page.description}`).join('\n')}

## Author

- [Charli-Jo Tyrer](${siteUrl}/) - Blind writer, conceptual artist and accessibility thinker.

## External projects

- [Blind Ant](${siteUrl}/blind-ant/) - Conceptual art practice using generative AI as an artistic medium.
- [Carrados](${siteUrl}/carrados/) - Accessibility and agent-first design work, including Zero Information Casualty.

## Source and licence

- [GitHub repository](https://github.com/CharliVerse/charli.info) - Public source front door for this site.
- Licence: CC BY-SA 4.0
`;

const llmsFull = `# Charli.info

> Complete text of Charli.info, generated from the same rendered pages as the public HTML. Content is licensed under CC BY-SA 4.0 unless stated otherwise.

${renderedPages.map((page) => shiftHeadings(page.markdown)).join('\n')}
## Source and licence

Repository: https://github.com/CharliVerse/charli.info

Licence: CC BY-SA 4.0
`;

writeFileSync('dist/llms.txt', llms);
writeFileSync('dist/llms-full.txt', llmsFull);
