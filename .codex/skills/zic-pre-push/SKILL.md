---
name: zic-pre-push
description: Verify Charli.info against Zero Information Casualty (ZIC) 1.5 before committing or pushing site changes. Use when publishing, deploying, auditing, or changing pages, agent surfaces, RSS, metadata, navigation, or accessibility behaviour in this repository.
---

# ZIC pre-push

Run this workflow before every push that can affect the published site.

1. Run `npm.cmd run check`, `npm.cmd run build`, and `npm.cmd run verify:zic`. Stop on any failure.
2. Confirm the verifier discovers every built HTML page. Every page must have ZIC metadata, a generated Markdown mirror, `llms.txt` and `llms-full.txt` entries, sitemap inclusion, and RSS inclusion where it is serial content.
3. After deployment, compare a browser response with `ChatGPT-User`; fetch the changed page, its Markdown mirror, `robots.txt`, `llms.txt`, `llms-full.txt`, sitemap, and RSS. Also test one named search crawler and training crawler against the declared policy.
4. Record human checks separately. NVDA in Chrome successfully read Exit Interview on 14 July 2026; do not generalise that result to untested pages or rendering contexts.
5. Push only after the generated checks pass. Never describe unperformed screen-reader, preference, or reconstruction checks as complete.
