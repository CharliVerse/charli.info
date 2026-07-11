# Charli.info

Astro site for Charlotte Joanne Tyrer, published as a static site.

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
- `npm run verify:zic` verifies the built HTML and shared styles against the repo-local [ZIC 1.1 baseline](./ZIC-1.1.md).
- `npm run preview` previews the production build locally.

## Accessibility baseline

This site implements the Zero Information Casualty 1.1 standard and keeps a repo-local verification baseline in [ZIC-1.1.md](./ZIC-1.1.md).

To verify the current site against that baseline:

```sh
npm run check
npm run build
npm run verify:zic
```
