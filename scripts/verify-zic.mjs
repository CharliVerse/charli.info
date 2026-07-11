import { readFileSync } from 'node:fs';

const pages = [
  { path: 'dist/index.html', url: '/' },
  { path: 'dist/charliverse/index.html', url: '/charliverse' },
  { path: 'dist/accessibility/index.html', url: '/accessibility' },
];

const sourcePages = [
  'src/pages/index.astro',
  'src/pages/charliverse.astro',
  'src/pages/accessibility.astro',
  'src/layouts/Base.astro',
];

const css = readFileSync('public/styles/global.css', 'utf8');
const sitemap = readFileSync('dist/sitemap-0.xml', 'utf8');
const robots = readFileSync('public/robots.txt', 'utf8');
const llms = readFileSync('public/llms.txt', 'utf8');
const llmsFull = readFileSync('public/llms-full.txt', 'utf8');
const license = readFileSync('LICENSE', 'utf8');

const requiredCrawlerAgents = [
  'GPTBot',
  'ClaudeBot',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Meta-ExternalAgent',
  'OAI-SearchBot',
  'Claude-SearchBot',
  'PerplexityBot',
  'ChatGPT-User',
  'Claude-User',
  'Perplexity-User',
];

function extractHeadingLevels(html) {
  return [...html.matchAll(/<h([1-6])\b/g)].map((match) => Number(match[1]));
}

function hasValidHeadingSequence(html) {
  const levels = extractHeadingLevels(html);
  if (levels.length === 0 || levels[0] !== 1) {
    return false;
  }

  for (let index = 1; index < levels.length; index += 1) {
    if (levels[index] - levels[index - 1] > 1) {
      return false;
    }
  }

  return true;
}

function hasImgWithoutAlt(markup) {
  const imgTags = markup.match(/<img\b[^>]*>/g) ?? [];
  return imgTags.some((tag) => !/\balt\s*=/.test(tag));
}

const pageChecks = [
  ['html lang', (html) => html.includes('<html lang="en">')],
  ['description meta', (html) => html.includes('<meta name="description"')],
  ['canonical', (html) => html.includes('<link rel="canonical"')],
  ['open graph title', (html) => html.includes('<meta property="og:title"')],
  ['json ld', (html) => html.includes('<script type="application/ld+json">')],
  ['license link', (html) => html.includes('<link rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">')],
  ['license meta', (html) => html.includes('<meta name="dcterms.license" content="https://creativecommons.org/licenses/by-sa/4.0/">')],
  ['skip link', (html) => html.includes('class="skip-link" href="#main"')],
  ['main focus target', (html) => html.includes('<main id="main" tabindex="-1">')],
  ['navigation landmark', (html) => html.includes('aria-label="Main navigation"')],
  ['footer landmark', (html) => html.includes('aria-label="Site footer"')],
  ['single h1', (html) => (html.match(/<h1\b/g) ?? []).length === 1],
  ['valid heading sequence', (html) => hasValidHeadingSequence(html)],
  ['current page marker', (html) => (html.match(/aria-current="page"/g) ?? []).length === 1],
  ['no img without alt', (html) => !hasImgWithoutAlt(html)],
  ['no anti-agent refusal tags', (html) => !/noai|noimageai/i.test(html)],
  ['human-readable license statement', (html) => html.includes('CC BY-SA 4.0')],
];

const cssChecks = [
  ['color scheme support', css.includes('color-scheme: light dark;')],
  ['reduced motion support', css.includes('@media (prefers-reduced-motion: reduce)')],
  ['dark mode support', css.includes('@media (prefers-color-scheme: dark)')],
  ['high contrast support', css.includes('@media (prefers-contrast: more)')],
  ['visible keyboard focus', css.includes(':focus-visible')],
  ['enhanced underline visibility', css.includes('text-underline-offset: 0.16em;')],
];

let failed = false;

for (const file of sourcePages) {
  const markup = readFileSync(file, 'utf8');
  if (hasImgWithoutAlt(markup)) {
    failed = true;
    console.error(`FAIL source ${file}: img without alt`);
  }
}

for (const page of pages) {
  const html = readFileSync(page.path, 'utf8');
  for (const [label, check] of pageChecks) {
    if (!check(html)) {
      failed = true;
      console.error(`FAIL ${page.url}: ${label}`);
    }
  }
}

for (const [label, passed] of cssChecks) {
  if (!passed) {
    failed = true;
    console.error(`FAIL css: ${label}`);
  }
}

for (const page of pages) {
  if (!sitemap.includes(`https://charli.info${page.url === '/' ? '/' : `${page.url}/`}`)) {
    failed = true;
    console.error(`FAIL sitemap: missing ${page.url}`);
  }
}

if (!robots.includes('Content-Signal: search=yes, ai-input=yes, ai-train=yes')) {
  failed = true;
  console.error('FAIL robots: missing content signal');
}

if (!robots.includes('Sitemap: https://charli.info/sitemap.xml')) {
  failed = true;
  console.error('FAIL robots: sitemap path is not /sitemap.xml');
}

for (const agent of requiredCrawlerAgents) {
  if (!robots.includes(`User-agent: ${agent}`)) {
    failed = true;
    console.error(`FAIL robots: missing explicit agent ${agent}`);
  }
}

if (!llms.startsWith('# Charli.info')) {
  failed = true;
  console.error('FAIL llms.txt: missing H1 first line');
}

if (!llms.includes('> Charli.info is the public home')) {
  failed = true;
  console.error('FAIL llms.txt: missing blockquote summary');
}

if (!llms.includes('Licence: CC BY-SA 4.0')) {
  failed = true;
  console.error('FAIL llms.txt: missing licence statement');
}

if (!llmsFull.includes('## Home') || !llmsFull.includes('## The CharliVerse') || !llmsFull.includes('## Accessibility Statement')) {
  failed = true;
  console.error('FAIL llms-full.txt: missing expected full-site sections');
}

if (!license.includes('Creative Commons Attribution-ShareAlike 4.0 International')) {
  failed = true;
  console.error('FAIL LICENSE: missing CC BY-SA 4.0 declaration');
}

try {
  readFileSync('dist/.nojekyll', 'utf8');
} catch {
  failed = true;
  console.error('FAIL build output: missing .nojekyll');
}

try {
  const rootSitemap = readFileSync('dist/sitemap.xml', 'utf8');
  if (!rootSitemap.includes('<urlset')) {
    failed = true;
    console.error('FAIL build output: /sitemap.xml is not a urlset sitemap');
  }
} catch {
  failed = true;
  console.error('FAIL build output: missing /sitemap.xml');
}

if (failed) {
  process.exit(1);
}

console.log('ZIC 1.1 verification passed for source, built pages, shared styles, sitemap, robots, llms files, and licence metadata.');
