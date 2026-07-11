# ZIC 1.2 Baseline

ZIC means Zero Information Casualty. This repository implements the ZIC-Open profile.

For Charli.info, ZIC 1.2 is the minimum accessibility baseline that must be true in source, built output, and public delivery.

## Human and structural access

1. Every page must have one `h1`, a descriptive title, a 150-160 character meta description, and a canonical HTTPS URL.
2. Core content must be semantic static HTML rather than image-only, script-only, or interaction-gated presentation.
3. Every page must include a skip link and a focusable main landmark target.
4. Navigation and footer landmarks must be labelled, and the current page must use `aria-current="page"`.
5. User-operable links and controls must have visible keyboard focus. A programmatically focused main landmark may suppress its outline because it is a skip-link destination, not a control.
6. Links and states must remain distinguishable without relying on colour alone.
7. The site must respect reduced motion, light and dark colour schemes, text resizing, and increased-contrast preferences.
8. Images must carry WCAG-compliant alternative text unless decorative.
9. Heading order and DOM reading order must remain navigable and honest.

## Agent access

1. `robots.txt` must explicitly welcome training, search and retrieval, and user-directed crawler classes, including `Meta-ExternalAgent`.
2. `llms.txt`, `llms-full.txt`, and Markdown page mirrors must be generated from the same rendered pages as the HTML.
3. Licence metadata must appear in page metadata, structured data, the footer, and `llms.txt`.
4. No page, host, CDN, or metadata layer may issue an AI-refusal directive, crawler challenge, or contradictory block against public content.
5. The sitemap, crawler policy, agent map, Markdown mirrors, and canonical pages must agree.
6. A syndication feed is required only when serial content is published on this domain.

## Outside-in delivery

Repository checks are necessary but not sufficient. Before claiming public compliance:

1. Fetch every canonical HTTPS page without JavaScript, cookies, or a manually accepted certificate exception.
2. Confirm that the TLS certificate is valid for `charli.info`, not merely issued by a trusted authority.
3. Enable HTTP-to-HTTPS redirection only after the hostname-valid certificate is active.
4. Fetch representative pages and agent files using at least one named crawler user-agent.
5. Ask a live AI assistant to fetch and summarise a page by URL; the result must reflect the actual content.

## Repository verification

- Run `npm run check`.
- Run `npm run build`.
- Run `npm run verify:zic`.

The verifier checks source files, built HTML, shared styles, generated agent files, Markdown mirrors, sitemap output, crawler declarations, metadata lengths, and licence declarations.

Public compliance is claimed only when these checks pass and the outside-in delivery checks also succeed.
