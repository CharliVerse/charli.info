import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const siteUrl = 'https://charli.info';
const css = readFileSync('public/styles/global.css', 'utf8');
const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
const robots = readFileSync('dist/robots.txt', 'utf8');
const llms = readFileSync('dist/llms.txt', 'utf8');
const llmsFull = readFileSync('dist/llms-full.txt', 'utf8');
const rss = readFileSync('dist/rss.xml', 'utf8');
const license = readFileSync('LICENSE', 'utf8');

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function urlFor(path) {
  const output = relative('dist', path).replaceAll('\\', '/');
  return output === 'index.html' ? '/' : `/${output.replace(/\/index\.html$/, '/').replace(/\.html$/, '')}`;
}

function headingLevels(markup) {
  return [...markup.matchAll(/<h([1-6])\b/g)].map((match) => Number(match[1]));
}

function hasValidHeadingSequence(markup) {
  const levels = headingLevels(markup);
  return levels.length > 0 && levels[0] === 1 && levels.slice(1).every((level, index) => level - levels[index] <= 1);
}

function hasImgWithoutAlt(markup) {
  return (markup.match(/<img\b[^>]*>/g) ?? []).some((tag) => !/\balt\s*=/.test(tag));
}

function metaDescription(markup) {
  return markup.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
}

const pages = walk('dist')
  .filter((path) => path.endsWith('.html') && !path.endsWith('404.html'))
  .sort()
  .map((path) => {
    const html = readFileSync(path, 'utf8');
    const url = urlFor(path);
    const mirror = path === 'dist/index.html' ? 'dist/index.md' : join(path, '..', 'index.md');
    return { path, html, url, mirror, canonical: `${siteUrl}${url}` };
  });

let failed = false;
function fail(message) {
  failed = true;
  console.error(`FAIL ${message}`);
}

const descriptions = new Set();
for (const page of pages) {
  const { html, url, mirror, canonical } = page;
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '';
  const description = metaDescription(html);
  const checks = [
    ['html lang', html.includes('<html lang="en">')],
    ['title format', /^.+ — Charli\.info$/.test(title)],
    ['description present', description.length > 0],
    ['canonical HTTPS URL', html.includes(`<link rel="canonical" href="${canonical}">`)],
    ['open graph metadata', ['og:title', 'og:description', 'og:url', 'og:type'].every((property) => html.includes(`<meta property="${property}"`))],
    ['JSON-LD', html.includes('<script type="application/ld+json">')],
    ['RSS alternate link', html.includes('type="application/rss+xml"')],
    ['ZIC 1.5 declaration', html.includes('<meta name="zic-version" content="1.5">')],
    ['licence metadata', html.includes('"license":"https://creativecommons.org/licenses/by-sa/4.0/"') && html.includes('CC BY-SA 4.0')],
    ['skip link', html.includes('class="skip-link" href="#main"')],
    ['main focus target', html.includes('<main id="main" tabindex="-1">')],
    ['landmarks', html.includes('aria-label="Main navigation"') && html.includes('aria-label="Site footer"')],
    ['current page indication', (html.match(/aria-current="page"/g) ?? []).length === 1],
    ['single h1', (html.match(/<h1\b/g) ?? []).length === 1],
    ['heading sequence', hasValidHeadingSequence(html)],
    ['image alt text', !hasImgWithoutAlt(html)],
    ['no anti-agent refusal tags', !/noai|noimageai/i.test(html)],
  ];
  for (const [label, passed] of checks) if (!passed) fail(`${url}: ${label}`);
  if (descriptions.has(description)) fail(`${url}: duplicate meta description`);
  descriptions.add(description);

  let markdown = '';
  try { markdown = readFileSync(mirror, 'utf8'); } catch { fail(`${url}: missing Markdown mirror`); }
  if (markdown) {
    const headings = [...html.matchAll(/<h[1-6]\b[^>]*>(.*?)<\/h[1-6]>/g)].map((match) => match[1].replace(/<[^>]+>/g, ''));
    for (const heading of headings) if (!markdown.includes(heading)) fail(`${url}: Markdown mirror missing heading "${heading}"`);
  }
  if (!sitemap.includes(canonical)) fail(`sitemap: missing ${url}`);
  if (!llms.includes(canonical) || !llms.includes(`${canonical}index.md`)) fail(`llms.txt: missing HTML or Markdown link for ${url}`);
  if (!llmsFull.includes(html.match(/<h1\b[^>]*>(.*?)<\/h1>/)?.[1] ?? '')) fail(`llms-full.txt: missing ${url}`);
}

const serialPages = pages.filter((page) => /^\/(carrados\/[^/]+\/|pieces\/)/.test(page.url));
for (const page of serialPages) if (!rss.includes(`<link>${page.canonical}</link>`)) fail(`rss.xml: missing serial page ${page.url}`);

for (const [label, passed] of [
  ['colour scheme support', css.includes('color-scheme: light dark;')],
  ['reduced motion support', css.includes('@media (prefers-reduced-motion: reduce)')],
  ['dark mode support', css.includes('@media (prefers-color-scheme: dark)')],
  ['high contrast support', css.includes('@media (prefers-contrast: more)')],
  ['visible keyboard focus', css.includes(':focus-visible')],
  ['programmatic main focus exception', css.includes('main:focus') && css.includes('outline: none;')],
  ['enhanced underline visibility', css.includes('text-underline-offset: 0.16em;')],
]) if (!passed) fail(`CSS: ${label}`);

for (const expected of [
  'Every named agent below is welcome', 'AI training crawlers', 'AI search and retrieval crawlers', 'User-directed fetchers',
  'Content-Signal: search=yes, ai-input=yes, ai-train=yes', 'Sitemap: https://charli.info/sitemap.xml',
]) if (!robots.includes(expected)) fail(`robots.txt: missing "${expected}"`);

for (const agent of ['GPTBot', 'ClaudeBot', 'Google-Extended', 'Applebot-Extended', 'CCBot', 'Meta-ExternalAgent', 'OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot', 'ChatGPT-User', 'Claude-User', 'Perplexity-User']) {
  if (!robots.includes(`User-agent: ${agent}`)) fail(`robots.txt: missing explicit agent ${agent}`);
}

for (const expected of ['# Charli.info\n\n> ', 'Sent agents: served (ai-input=yes).', 'Search indexing: permitted (search=yes).', 'Model training: permitted (ai-train=yes).', 'Licence: CC BY-SA 4.0']) {
  if (!llms.includes(expected)) fail(`llms.txt: missing "${expected}"`);
}

if (!license.includes('Creative Commons Attribution-ShareAlike 4.0 International')) fail('LICENSE: missing CC BY-SA 4.0 declaration');
try { readFileSync('dist/.nojekyll', 'utf8'); } catch { fail('build output: missing .nojekyll'); }

if (failed) process.exit(1);
console.log(`ZIC 1.5 verification passed for all ${pages.length} generated pages, mirrors, agent surfaces, RSS, crawler policy, sitemap, and licence metadata.`);
