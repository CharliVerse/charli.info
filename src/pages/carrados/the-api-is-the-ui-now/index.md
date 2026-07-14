---
layout: ../../../layouts/Document.astro
type: Article
pubDate: 2026-06-14
prev: https://charli.info/carrados/classical-and-generative-accessibility/
next: https://charli.info/carrados/the-insurance-that-never-pays-out/
title: "The API Is the UI Now"
description: "A quiet note on a framework, an architecture Salesforce built for its own reasons, and a first-class screen reader rendering a blind Salesforce user could have now. By Charli-Jo Tyrer."
---

# The API Is the UI Now

*A quiet note on a framework, an architecture I didn't build, and a tool a blind Salesforce user could have by the first of July.*

*June 2026*

For a few years I've been describing a way of thinking about interfaces I call generative — and, in its stranger moments, quantum. The vocabulary is mine, the theoretical statement lives in [the Tyrer Framework](https://charli.info/carrados/tyrer-framework/), and the claim under it is simple. An interface needn't exist first as a visual object that is then translated, lossily, for everyone who can't see it. It can be generated at the moment of use, per observer, from one shared underlying state — so that the sighted rendering and the non-visual rendering are siblings drawn from the same source. Neither is the original. Neither is the copy.

For most of the time I've been saying this, it described something that did not exist. The web I was saying it against worked the other way around: a visual thing was built, and a screen reader was handed the job of reconstructing it afterwards. The accessible version was always downstream. That isn't a complaint about anyone's effort. It's a structural fact about which artefact gets treated as the source — and it is the whole reason accessibility has felt like permanent catch-up.

**In the last eight weeks, none of it built for accessibility's sake, the architecture I'd been describing shipped.**

In April, Salesforce announced Headless 360 and made the browser optional: every capability on the platform exposed as an API, an MCP tool, or a CLI command. With the Summer '26 release now reaching production, the hosted MCP servers are generally available — standard OAuth, hosted by Salesforce, nothing to stand up. The documentation describes the surface as reachable by any authenticated caller, and it names the categories plainly: an app, a human, or an AI agent. The reference servers are being open-sourced. Any Developer Edition org includes the hosted servers at no cost. And because MCP is an open protocol, a client that already speaks it — Claude Code among them — can connect to a Salesforce org today and read its records.

Salesforce's own framing is that the browser is now optional and the platform is something you call rather than something you navigate. The shorthand writes itself: the API is the UI now. I want to take them at their word, because their word turns out to be the most useful thing they've handed me.

If the API is the UI, then a non-visual client that consumes the API is not an accessible version of Salesforce. It is Salesforce — rendered to a different observer, from the same source, a sibling of the visual one. That is the generative claim, no longer a description of a future but a thing you could build against a live, free, documented endpoint this week.

There was one expensive piece left, and this week it was given away too. Building a screen-reader-first surface — one that presents structured data as a navigable document and behaves correctly under NVDA, JAWS and Narrator — is hard, specialist work. The QUILL project extracted exactly that render layer and open-sourced it as wx-accessible-webview. A large part of the hardest remaining work is now a dependency, not a research project.

*So, I'll be precise about what is and isn't true, because the precise version is strong enough.*

I cannot honestly say I could build a 100% accessible Salesforce. I can say I could build 100% accessible coverage of everything Salesforce chose to put in the headless surface. Whether that surface is identical to what the Lightning interface can do is not something I get to assume — there may be a residue of configuration and visual-first features that live only in the GUI. But this is the part I didn't have to construct: Salesforce is the one making the strongest version of the claim. They are the ones saying the platform is now callable rather than merely navigable. If they are right, accessible coverage of the API is accessible coverage of the platform. If they are wrong, the same client that delivers the coverage also produces the exact list of what they left out — which makes the gap their completeness problem to answer for, not an accessibility failure for anyone else to apologise about.

None of this required a new model, a research breakthrough, or one thing more from Salesforce. The substrate is theirs and it is live. The protocol is open. The render layer is open. What remains is assembly, and a screen reader user in the loop to say what works — which happens to be the one task a coding agent cannot do for itself, and the one I am equipped to do.

Which is the only line here that matters. A blind person whose job runs on Salesforce has, for years, reached it through a screen reader's reconstruction of a screen built for someone else. The pieces to give them the source instead — the same data, the same actions, rendered for how they actually work — are, as of this month, on the table at once. Not in a research note. Not in some receding future. A better tool than they have ever had, buildable now, and plausibly in their hands by the first of July.

That is the victory lap, and I will keep it quiet. The framework did not need to win an argument. It needed the world to build the thing it described. The world just did — for its own reasons, under its own flag — and left the last, human-shaped piece sitting there for someone to pick up.

*Postscript, July 2026.* What arrived by the first of July was not the tool but the argument. On 22 June, the Agentic AI Foundation — a Linux Foundation project — published the convergence case this note describes, made most of it well, and flinched from its conclusion. The reply is the next piece in this sequence.

---

**In this sequence:** Previous: [Why Accessibility Keeps Getting Worse — and Why, for the First Time, It Might Not](https://charli.info/carrados/classical-and-generative-accessibility/) · Next: [The Insurance That Never Pays Out](https://charli.info/carrados/the-insurance-that-never-pays-out/)

*Grounded in [the Tyrer Framework](https://charli.info/carrados/tyrer-framework/) · Charli-Jo Tyrer · CC BY-SA 4.0*
