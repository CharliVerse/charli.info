import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Carrados essays',
    description: 'Three essays by Charli-Jo Tyrer on generative accessibility, agent-first architecture, and the end of accessibility remediation as permanent catch-up.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./carrados/{classical-and-generative-accessibility,the-api-is-the-ui-now,the-insurance-that-never-pays-out}/index.md')),
    customData: '<language>en-GB</language>',
  });
}
