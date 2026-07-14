import { readFileSync } from 'node:fs';

const pages = [
  { path: 'dist/index.html', mirror: 'dist/index.md', url: '/', currentPageMarker: true },
  { path: 'dist/blind-ant/index.html', mirror: 'dist/blind-ant/index.md', url: '/blind-ant/', currentPageMarker: true },
  { path: 'dist/carrados/index.html', mirror: 'dist/carrados/index.md', url: '/carrados/', currentPageMarker: true },
  { path: 'dist/carrados/tyrer-framework/index.html', mirror: 'dist/carrados/tyrer-framework/index.md', url: '/carrados/tyrer-framework/', currentPageMarker: false },
  { path: 'dist/carrados/zic-design-standard/index.html', mirror: 'dist/carrados/zic-design-standard/index.md', url: '/carrados/zic-design-standard/', currentPageMarker: false },
  { path: 'dist/carrados/classical-and-generative-accessibility/index.html', mirror: 'dist/carrados/classical-and-generative-accessibility/index.md', url: '/carrados/classical-and-generative-accessibility/', currentPageMarker: false, article: true, next: 'https://charli.info/carrados/the-api-is-the-ui-now/' },
  { path: 'dist/carrados/the-api-is-the-ui-now/index.html', mirror: 'dist/carrados/the-api-is-the-ui-now/index.md', url: '/carrados/the-api-is-the-ui-now/', currentPageMarker: false, article: true, prev: 'https://charli.info/carrados/classical-and-generative-accessibility/', next: 'https://charli.info/carrados/the-insurance-that-never-pays-out/' },
  { path: 'dist/carrados/the-insurance-that-never-pays-out/index.html', mirror: 'dist/carrados/the-insurance-that-never-pays-out/index.md', url: '/carrados/the-insurance-that-never-pays-out/', currentPageMarker: false, article: true, prev: 'https://charli.info/carrados/the-api-is-the-ui-now/' },
  { path: 'dist/charliverse/index.html', mirror: 'dist/charliverse/index.md', url: '/charliverse/', currentPageMarker: false },
];

const sourcePages = [
  'src/pages/index.astro',
  'src/pages/blind-ant/index.astro',
  'src/pages/carrados/index.astro',
  'src/pages/carrados/tyrer-framework/index.md',
  'src/pages/carrados/zic-design-standard/index.md',
  'src/pages/carrados/classical-and-generative-accessibility/index.md',
  'src/pages/carrados/the-api-is-the-ui-now/index.md',
  'src/pages/carrados/the-insurance-that-never-pays-out/index.md',
  'src/pages/charliverse.astro',
  'src/layouts/Base.astro',
];

const css = readFileSync('public/styles/global.css', 'utf8');
const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
const robots = readFileSync('dist/robots.txt', 'utf8');
const llms = readFileSync('dist/llms.txt', 'utf8');
const llmsFull = readFileSync('dist/llms-full.txt', 'utf8');
const rss = readFileSync('dist/rss.xml', 'utf8');
const license = readFileSync('LICENSE', 'utf8');

const requiredCrawlerAgents = [
  'GPTBot', 'ClaudeBot', 'Google-Extended', 'Applebot-Extended', 'CCBot',
  'Meta-ExternalAgent', 'OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot',
  'ChatGPT-User', 'Claude-User', 'Perplexity-User',
];

function headingLevels(markup) {
  return [...markup.matchAll(/<h([1-6])\b/g)].map((match) => Number(match[1]));
}

function hasValidHeadingSequence(markup) {
  const levels = headingLevels(markup);
  if (levels.length === 0 || levels[0] !== 1) return false;
  return levels.slice(1).every((level, index) => level - levels[index] <= 1);
}

function hasImgWithoutAlt(markup) {
  return (markup.match(/<img\b[^>]*>/g) ?? []).some((tag) => !/\balt\s*=/.test(tag));
}

function metaDescription(markup) {
  return markup.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
}

const pageChecks = [
  ['html lang', (html) => html.includes('<html lang="en">')],
  ['description present', (html) => metaDescription(html).length > 0],
  ['canonical HTTPS URL', (html) => /<link rel="canonical" href="https:\/\/charli\.info\//.test(html)],
  ['open graph title', (html) => html.includes('<meta property="og:title"')],
  ['JSON-LD', (html) => html.includes('<script type="application/ld+json">')],
  ['RSS alternate link', (html) => html.includes('<link rel="alternate" type="application/rss+xml" title="Carrados essays RSS feed" href="/rss.xml">')],
  ['ZIC 1.5 declaration', (html) => html.includes('<meta name="zic-version" content="1.5">')],
  ['licence link', (html) => html.includes('<link rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">')],
  ['licence meta', (html) => html.includes('<meta name="dcterms.license" content="https://creativecommons.org/licenses/by-sa/4.0/">')],
  ['skip link', (html) => html.includes('class="skip-link" href="#main"')],
  ['main focus target', (html) => html.includes('<main id="main" tabindex="-1">')],
  ['navigation landmark', (html) => html.includes('aria-label="Main navigation"')],
  ['footer landmark', (html) => html.includes('aria-label="Site footer"')],
  ['single h1', (html) => (html.match(/<h1\b/g) ?? []).length === 1],
  ['valid heading sequence', (html) => hasValidHeadingSequence(html)],
  ['no image without alt', (html) => !hasImgWithoutAlt(html)],
  ['no anti-agent refusal tags', (html) => !/noai|noimageai/i.test(html)],
  ['human-readable licence', (html) => html.includes('CC BY-SA 4.0')],
];

const cssChecks = [
  ['colour scheme support', css.includes('color-scheme: light dark;')],
  ['reduced motion support', css.includes('@media (prefers-reduced-motion: reduce)')],
  ['dark mode support', css.includes('@media (prefers-color-scheme: dark)')],
  ['high contrast support', css.includes('@media (prefers-contrast: more)')],
  ['visible keyboard focus', css.includes(':focus-visible')],
  ['programmatic main focus exception', css.includes('main:focus') && css.includes('outline: none;')],
  ['enhanced underline visibility', css.includes('text-underline-offset: 0.16em;')],
];

let failed = false;
function fail(message) {
  failed = true;
  console.error(`FAIL ${message}`);
}

for (const file of sourcePages) {
  if (hasImgWithoutAlt(readFileSync(file, 'utf8'))) fail(`source ${file}: image without alt`);
}

for (const page of pages) {
  const html = readFileSync(page.path, 'utf8');
  for (const [label, check] of pageChecks) if (!check(html)) fail(`${page.url}: ${label}`);
  if (page.article && !html.includes('"@type":"Article"')) fail(`${page.url}: Article JSON-LD`);
  if (page.prev && !html.includes(`<link rel="prev" href="${page.prev}">`)) fail(`${page.url}: previous sequence link`);
  if (page.next && !html.includes(`<link rel="next" href="${page.next}">`)) fail(`${page.url}: next sequence link`);
  const currentPageMarkers = (html.match(/aria-current="page"/g) ?? []).length;
  if (currentPageMarkers !== (page.currentPageMarker ? 1 : 0)) fail(`${page.url}: current page marker`);

  const mirror = readFileSync(page.mirror, 'utf8');
  if (/^- .+\n#{1,6} /m.test(mirror)) fail(`${page.mirror}: heading is not separated from preceding list`);
  const htmlHeadings = [...html.matchAll(/<h[1-6]\b[^>]*>(.*?)<\/h[1-6]>/g)].map((match) => match[1]);
  for (const heading of htmlHeadings) {
    if (!mirror.includes(heading)) fail(`${page.mirror}: missing rendered heading "${heading}"`);
  }

  if (!sitemap.includes(`https://charli.info${page.url}`)) fail(`sitemap: missing ${page.url}`);
}

for (const page of pages.filter((page) => page.article)) {
  const url = `https://charli.info${page.url}`;
  if (!rss.includes(`<link>${url}</link>`)) fail(`rss.xml: missing ${url}`);
}

for (const [label, passed] of cssChecks) if (!passed) fail(`CSS: ${label}`);

for (const expected of [
  'Every named agent below is welcome',
  'AI training crawlers',
  'AI search and retrieval crawlers',
  'User-directed fetchers',
  'Content-Signal: search=yes, ai-input=yes, ai-train=yes',
  'Sitemap: https://charli.info/sitemap.xml',
]) {
  if (!robots.includes(expected)) fail(`robots.txt: missing "${expected}"`);
}

for (const agent of requiredCrawlerAgents) {
  if (!robots.includes(`User-agent: ${agent}`)) fail(`robots.txt: missing explicit agent ${agent}`);
}

if (!llms.startsWith('# Charli.info\n\n> ')) fail('llms.txt: missing H1 and blockquote summary');
if (!llms.includes('Licence: CC BY-SA 4.0')) fail('llms.txt: missing licence statement');
for (const page of pages) {
  const canonicalUrl = `https://charli.info${page.url}`;
  const mirrorUrl = `https://charli.info${page.url}${page.url === '/' ? '' : ''}index.md`;
  if (!llms.includes(canonicalUrl)) fail(`llms.txt: missing canonical page ${canonicalUrl}`);
  if (!llms.includes(mirrorUrl)) fail(`llms.txt: missing Markdown mirror ${mirrorUrl}`);
}

for (const heading of ['## The public home of Charli-Jo Tyrer', '## Blind Ant', '## Carrados', '## The CharliVerse']) {
  if (!llmsFull.includes(heading)) fail(`llms-full.txt: missing generated heading "${heading}"`);
}

if (!license.includes('Creative Commons Attribution-ShareAlike 4.0 International')) fail('LICENSE: missing CC BY-SA 4.0 declaration');

for (const output of ['dist/.nojekyll', 'dist/sitemap.xml']) {
  try { readFileSync(output, 'utf8'); } catch { fail(`build output: missing ${output}`); }
}

if (failed) process.exit(1);

console.log('ZIC 1.5 verification passed for source, built pages, generated agent surfaces, Markdown mirrors, crawler welcome, sitemap, and licence metadata.');
