import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const siteUrl = (process.env.SITE_URL ?? 'https://charli.info').replace(/\/$/, '');
const userAgent = 'ChatGPT-User';
const retries = 12;
const delayMs = 10_000;

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

const pages = walk('dist')
  .filter((path) => path.endsWith('.html') && !path.endsWith('404.html'))
  .sort()
  .map((path) => {
    const html = readFileSync(path, 'utf8');
    const h1 = html.match(/<h1\b[^>]*>(.*?)<\/h1>/)?.[1].replace(/<[^>]+>/g, '') ?? '';
    return { url: urlFor(path), h1 };
  });

const requiredSurfaces = ['/robots.txt', '/llms.txt', '/llms-full.txt', '/sitemap.xml', '/rss.xml'];
const requiredUrls = [...new Set([...pages.map((page) => page.url), ...pages.map((page) => `${page.url}index.md`), ...requiredSurfaces])];

async function fetchText(path) {
  const response = await fetch(`${siteUrl}${path}`, {
    headers: { 'User-Agent': userAgent },
  });
  if (!response.ok) throw new Error(`${path} returned ${response.status}`);
  return response.text();
}

for (let attempt = 1; attempt <= retries; attempt += 1) {
  try {
    const results = new Map(await Promise.all(requiredUrls.map(async (path) => [path, await fetchText(path)])));
    const llms = results.get('/llms.txt');
    const llmsFull = results.get('/llms-full.txt');
    const sitemap = results.get('/sitemap.xml');
    const robots = results.get('/robots.txt');

    for (const page of pages) {
      const canonical = `${siteUrl}${page.url}`;
      if (!llms.includes(canonical) || !llms.includes(`${canonical}index.md`)) throw new Error(`llms.txt is missing ${page.url}`);
      if (!llmsFull.includes(page.h1)) throw new Error(`llms-full.txt is missing ${page.url}`);
      if (!sitemap.includes(canonical)) throw new Error(`sitemap.xml is missing ${page.url}`);
    }
    for (const agent of ['ChatGPT-User', 'GPTBot']) if (!robots.includes(`User-agent: ${agent}`)) throw new Error(`robots.txt is missing ${agent}`);

    console.log(`Live ZIC verification passed for ${pages.length} pages, their Markdown mirrors, and all required agent surfaces.`);
    process.exit(0);
  } catch (error) {
    if (attempt === retries) throw error;
    console.log(`Live ZIC verification attempt ${attempt}/${retries} failed: ${error.message}. Retrying in ${delayMs / 1000} seconds.`);
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
}
