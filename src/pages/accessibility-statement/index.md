---
layout: ../../layouts/Document.astro
title: "Accessibility and Conformance Statement"
description: "The ZIC conformance statement for charli.info: the version claimed, the declarations made, what was checked, what was not, and the known defects, stated honestly."
---

# Accessibility and Conformance Statement

**Site:** charli.info

**Publisher:** Charli-Jo Tyrer

**Statement date:** 22 July 2026

This page is the conformance statement required by Part Seven of the Zero Information Casualty specification. A conformance claim is a statement made to a reader who cannot see inside the build, and its only value is that the reader can check it. Everything below is checkable, and the section on what was not checked is as much a part of the claim as the sections on what was.

## The claim

This site conforms to [Zero Information Casualty v1.5](/carrados/zic-design-standard/).

Sent agents: served (ai-input=yes).

Search indexing: permitted (search=yes).

Model training: permitted (ai-train=yes).

The three declarations above are independent. Permission for one purpose is never inferred from another. The same declarations appear machine-readably in [/robots.txt](/robots.txt) and [/llms.txt](/llms.txt), and the serving stack — GitHub Pages, which serves files and nothing else — contains no layer capable of contradicting them.

## What was checked

**Repository verification.** Every build runs the repository verifier against all generated pages, Markdown mirrors, the agent surface (llms.txt, llms-full.txt), the RSS feed, crawler policy, the sitemap, and licence metadata. The current build passes for all 57 pages. The verifier command is public in the [repository](https://github.com/CharliVerse/charli.info), which is this site's second front door: what is in the repository is what every visitor receives.

**Delivery checks (§4.7, in part).** The canonical HTTPS origin was fetched by a live AI assistant — a hostname-validating client outside the publisher's control — and arrived; the www origin redirects to the canonical origin; the assistant's account of the fetched pages matched their content. This is the check that does not begin by assuming the answer.

**Reconstruction checks (§4.8: Claude, 22 July 2026).** A machine reader was asked to read the site, summarise pages, and state what it could not determine. Its summaries contained nothing the pages do not say. It reported one structural ambiguity, recorded under Known defects below — which is the check working, not failing.

**Structural scan.** All 57 pages were machine-checked for: declared document language, landmark regions with exactly one main element, exactly one h1 and no skipped heading levels, a skip link as the first focusable element, alt attributes on every image, unique descriptive titles, unique meta descriptions, Open Graph tags, Schema.org JSON-LD with licence metadata, canonical URLs, and sitemap coverage.

**Contrast, computed.** Every colour token was measured in all four rendering modes. Default light mode: 7.5:1 to 17.4:1. Default dark mode: 10.2:1 to 17.4:1. Under prefers-contrast: more: 15.3:1 to 21:1 in both schemes. All modes exceed WCAG AAA ratios.

**Visitor preference queries.** prefers-color-scheme, prefers-contrast, and prefers-reduced-motion are implemented in the stylesheet; text sizing uses relative units throughout.

## Not yet checked

NVDA end-to-end pass on the current build. JAWS. VoiceOver. WAVE, axe, Lighthouse, and W3C validator runs against the live origin. 200% text scaling verification. Certificate hostname validation from a plain HTTP client.

Under-claiming is permitted and is a virtue. These checks are listed so that the reader knows the boundary of the claim, and this statement will be updated as they are performed.

## Known defects

Stated here because a conformance statement that hides its defects is a false statement with good manners.

**Two links on the [Blind Ant](/blind-ant/) page point to People pages that do not yet exist** (Big Charli; Jessica Martinez). A link is a promise of a destination, and until the pages are published these links manufacture the failure this standard exists to prevent. They are being corrected — either by publishing the pages or by withdrawing the links until the pages are real.

**One heading on the home page encodes the wrong structure.** "Together With…" is marked as a subsection of Perspectives when it is a sibling section, so non-visual readers and agents receive a hierarchy the navigation contradicts. This is a Rendering Casualty of the document's own organisation (ZIC §1.15) and is being corrected.

When a defect above is fixed, it is removed from this section and the statement date is updated. The statement describes the site as it is, not as it is meant to be.

## Beyond the claim

This specification secures the semantic substrate and its delivery. It does not claim to serve every access need — cognitive load, plain-language alternatives, motor accessibility, and many other requirements are the province of standards written by those qualified to specify them, and this site does not claim to meet needs it has not checked. If something on this site fails to reach you, that is information the publisher needs and did not have: please [say so via the repository](https://github.com/CharliVerse/charli.info/issues) or the contact routes on this site.

---

*This statement conforms to Part Seven of the ZIC specification. Content licence: CC BY-SA 4.0.*
