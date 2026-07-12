# Charli.info

Astro site for Charli-Jo Tyrer, published as a static site.

Live site: [charli.info](https://charli.info)

Agent map: [charli.info/llms.txt](https://charli.info/llms.txt)

## Local setup

1. Install dependencies:

```sh
npm install
```

2. Run the site:

```sh
npm run dev
```

## Commands

- `npm run dev` starts the local Astro dev server.
- `npm run check` runs Astro's project checks and diagnostics.
- `npm run build` builds the static site.
- `npm run verify:zic` verifies the built site and generated agent surface against the repo-local [ZIC 1.5 baseline](./ZIC-1.5.md).
- `npm run preview` previews the production build locally.

## Accessibility baseline

This site implements the Zero Information Casualty 1.5 standard and keeps a repo-local verification baseline in [ZIC-1.5.md](./ZIC-1.5.md).

The build generates `llms.txt`, `llms-full.txt`, and Markdown mirrors from the rendered pages so the human and agent surfaces share one source of truth.

To verify the current site against that baseline:

```sh
npm run check
npm run build
npm run verify:zic
```
