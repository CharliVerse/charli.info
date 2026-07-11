# ZIC 1.1 Baseline

ZIC means Zero Information Casualty.

For this site, ZIC 1.1 is the minimum accessibility baseline that must be true in source and in built output.

## Requirements

1. Every page must have a single `h1`, a descriptive title, a meta description, and a canonical URL.
2. Every page must expose content through semantic HTML rather than image-only or script-only presentation.
3. Every page must include a skip link and a focusable main landmark target.
4. Navigation and footer landmarks must be labeled.
5. The current page must be announced with `aria-current="page"`.
6. Keyboard focus must be visible.
7. Links must remain distinguishable without relying on color alone.
8. The site must respect reduced motion, light/dark color scheme, and higher-contrast preferences.
9. Structured metadata must exist in built output.
10. Images, if introduced, must carry WCAG-compliant alt text unless decorative.
11. Heading order must remain navigable and must not skip levels.
12. Public pages must remain present in the generated sitemap.

## Verification

- Run `npm run check`
- Run `npm run build`
- Run `npm run verify:zic`

The verifier checks source files, built HTML, shared styles, and sitemap output.

Compliance is only claimed when all three commands pass and the built output still reflects the requirements above.
