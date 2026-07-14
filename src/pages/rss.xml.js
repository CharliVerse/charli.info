export function GET() {
  return new Response(
    '<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Charli.info</title><description>Generated during the site build.</description><link>https://charli.info/</link></channel></rss>',
    { headers: { 'Content-Type': 'application/rss+xml' } },
  );
}
