---
layout: ../../../layouts/Document.astro
type: Article
pubDate: 2026-06-26
prev: https://charli.info/carrados/the-api-is-the-ui-now/
title: "The Insurance That Never Pays Out"
description: "The Agentic AI Foundation just published the best case for accessibility-as-architecture in years — and then prescribed keeping the exact layer its own witness says never catches up. A reply. By Charli-Jo Tyrer."
---

# The Insurance That Never Pays Out

*The Agentic AI Foundation just published the best case for accessibility-as-architecture in years — and then, in the same breath, prescribed keeping the exact layer its own witness says never catches up.*

*June 2026*

I have been having one argument, in one shape or another, for about a year. In my kitchen, with a blind friend, over Salesforce. In the comments under my own posts. And this week with two well-credentialed men on the blog of the Agentic AI Foundation, a Linux Foundation project, who have managed to publish the argument I keep having across the table — only with a standards process behind it.

The piece is *[Native Speakers: Why AI's Most Powerful Users Are Blind](https://aaif.io/blog/native-speakers-why-ais-most-powerful-users-are-blind/)*, by Phillip Lamb and Liad Yosef. I want to be completely fair about it before I take it apart, because the parts I agree with are most of it.

## What they get right, which is nearly everything

Their central claim is correct and important: large language models are language-native. They don't see an interface; they consume its meaning. So building software an agent can operate and building software a blind person can operate are, in large part, the same engineering problem approached from two directions. Every step that makes a site legible to an agent makes it legible to someone who can't see it. Agent-readiness and accessibility are converging, and for the first time in thirty years the budget is being poured in by people who don't even know they're doing accessibility work. That reframes the whole game, and they're right to be excited.

And — this matters, because I want to be the opposite of the thing I'm criticising — this is not two sighted men theorising over our heads. The piece is built on calls with blind technologists and end-users. It quotes them. It names the original sin of screen readers, that they came out convoluted because developers built them for developers and consulted everyone else late. It demands that blind end-users be in the room precisely because they're the group most likely to be missing. So I'm not going to reach for "about us, without us." It would be the wrong weapon, and an unfair one. This is allied work.

Which is exactly why the one move it makes is worth stopping on. You don't write a careful note about a friend who's wrong about a small thing. You write it about a friend who's right about a large thing and then makes a single mistake that undoes a good part of the gain.

## The one sentence I'm here to kill

Here is their prescription, stated as fairly as I can put it. Accessibility, they say, means *both* channels are complete. The semantic tool surface that an agent can query — and a rendered visual view that remains keyboard- and screen-reader conformant. They are explicit that a rich tool surface doesn't excuse leaving the rendered view inaccessible for someone using a screen reader the traditional way. Keep both. The conformance work on the visual surface, they say plainly, is real work that doesn't go away.

Keep both channels. Forever.

That's the sentence. Everything above it I'll sign. This one I'm going to take apart, because it quietly reinstalls the thing the rest of the essay was busy dismantling.

## They brought the murder weapon themselves

The cleanest way to see the problem is that the authors hand you the evidence against their own prescription, in their own text, a few paragraphs earlier.

They quote Dan Spoone, a former president of the American Council of the Blind, on the central failure of the whole field: the accessibility layer always gets bolted on after the fact, and we "never catch up." They go further and diagnose it themselves — thirty years of accessibility funded as a compliance line item, always trailing, never closing the gap.

And then, having named the disease precisely, they prescribe keeping the layer that is the disease.

The thing that never catches up is the after-the-fact remediation of a visual surface built for someone else. That is the "rendered view, kept conformant, forever" they want preserved as a standing requirement. The diagnosis and the prescription share a byline. I don't need to speculate about anyone's motives to say that. Their own witness already testified. The structure convicts itself.

## Why the remediated view is the catch-up machine

It's worth being precise about *why* the remediated view never catches up, because the reason is structural, not a matter of effort.

When the visual interface is the real artefact and the screen reader is handed the job of reconstructing it afterwards, the accessible experience is downstream by definition. The visual surface changes every release. The reconstruction breaks. Someone rebuilds it. The surface changes again. This is not a failure of diligence; it is the geometry of putting the accessible version permanently behind a moving target. The backlog never empties because it was never built to empty. It was built to be a backlog.

Now hold that against what the authors themselves argue everywhere else in the piece. If the application exposes a complete semantic source, then the non-visual experience needn't be a reconstruction of a view built for sighted users. It can be a first-class render *off the source* — a sibling of the visual render, drawn from the same state, neither one the original and neither the copy. That's their own architecture. It's a good one. It's mine too.

So the question answers itself. If you have the sibling render off the source, the remediated visual view is no longer a channel anyone's access *depends* on. It becomes what it always secretly was: the catch-up machine, kept running for its own sake.

## The strongest version of their position, and why it still loses

I won't pretend they have no reason. They do, and it's the best one available, so let me put it at full strength.

Nobody has a provably complete semantic surface yet. Completeness is the hard, unsolved part — I've said so myself, in print, and I'm not going to un-say it now to win a paragraph. So their "keep the visual view too" reads, at its most sympathetic, as *insurance*. If the surface turns out to be incomplete, the conformant visual render is the fallback that still works. That's not industry-protection. That's prudence. It's the same prudence my blind friend reaches for when he says he wants to keep the old interface "just in case."

Here's why the insurance still fails on its own terms.

The honest answer to "what if the surface is incomplete" was never a second channel, hand-maintained and patched forever. It's that a client which consumes the source can *emit the exact list of what the source leaves out*, as a byproduct of running against it. The render audits itself. Incompleteness stops being an open-ended remediation chore for someone else to apologise about and becomes a specific, enumerated list — the platform's completeness problem to answer for, surfaced automatically, every run.

Set that beside what remediation could ever give you. Conformance testing never told you the denominator. You spot-checked the visual surface forever and never knew the size of what you'd missed, because there was no source of truth to check against — the visual surface *was* the truth. That's not a stick. That's a man with a torch checking a field in the dark and calling it surveyed. The self-auditing render is the enforceable thing remediation only ever pretended to be. And by Spoone's own testimony, the remediation stick has never once paid out — thirty years, and we never caught up.

So the insurance the authors want to keep is a policy that has never paid a claim, sold against a risk that the new architecture already covers better, automatically, for free.

## The condition I will not skip, because forty years says I mustn't

There is one move here I refuse to make, and I want to name it loudly, because skipping it is precisely how "you have a format you can use" became a lie for four decades.

All of the above holds *only once the native render genuinely exists and is proven complete.* That conditional is the whole thing. "We gave you a format you can use" was said about the cut-down site, the text-only ghetto, the accessible PDF that arrived three weeks after the real one. Every one of those discharged a duty it had not actually met, and used the language of sufficiency to do it. So if I wield "you have your render, the obligation is met" *before* the render is real and verified, I am simply the forty-first person in a queue of forty telling a blind man that something worse is good enough.

Which is why the authors' open problem — surface completeness — isn't a footnote. It's the precondition for everything I'm arguing. You may retire the catch-up machine exactly when, and not one day before, the native render is complete and you can prove it. The self-auditing list above is how you prove it. That's the order of operations, and I'll be the first to hold anyone to it, including me.

## Don't kill the industry. Repoint it.

Here's the part that I think actually wins the room, and it's the part my own earlier writing got wrong by being too pleased with its own teardown.

The accessibility remediation industry has one genuine, hard-won expertise: knowing what a complete, usable, screen-reader-native experience actually requires. That knowledge is currently aimed at a surface built for someone else, where it can only ever lose. Point it instead at *guaranteeing the source is complete and parenting the first-class native render off it,* and the same people, with the same expertise, are finally running forward instead of backward.

The "just in case" deserves an answer, and this is a better answer than a second channel: let the people best equipped to find the gaps be the ones who certify the surface and build the render. That's not the abolition of their jobs. It's the end of the part of the job that was always going to fail, and the beginning of the part that works. The friend who says "keep the industry, just in case" can have his insurance — it just gets repointed from patching the canon to verifying the source. Same workforce. A target they can actually reach.

## The carve-out, so I don't die on this hill next to the wrong person

I want to be careful, because "the visual view doesn't need to stay conformant" is true in one case and false in another, and the authors' blanket version flattens the difference in a way that hurts a real person.

The pure screen-reader user, once he has a complete native render, does not need the visual view kept conformant *as well*. For him that's a redundant path to a place he's already standing — a ramp to a copy of the floor he's on. The obligation to him is discharged by the render he actually uses, and "discharged" doesn't mean "met in every modality he might prefer." It means met.

But the low-vision user is a different person with a different claim. Someone with residual sight who runs magnification for one task and the screen reader for another lives in *both* renders, all day. For her, the visual view isn't a copy of the audible one — it's a peer she genuinely occupies. Keeping it usable is live duty, not redundancy.

So the principle is not "screen reader good, visual bad." It is: *the obligation is to a usable render for each observer, not every render for every observer.* Renders with real occupants get maintained. Renders demanded only to match someone else's method don't. The authors' "keep it conformant, full stop" over-obligates in the redundant case and never draws this line. I'll draw it for them — and it keeps me from swinging at a magnification user I'd never want to hit.

## Staying on my own ground

One concession, freely given, because the authors already made it and I'd be foolish to pretend otherwise. They note that agent-readiness gets you most of the way to accessibility, not all of it — that pace, plain language, and cognitive load are human-specific and don't fall out of the semantic surface. That's right. So I'm not claiming the gap closes for everyone. My argument is about the *sensory* render, where the canon's shadow really does vanish once you render each observer from the source. Cognitive access is its own harder problem, and I'm not waving it away. I'm staying where my argument is strong and saying so.

## What they proved, and then prescribed away

I'll end where they did, because their own best anecdote is the whole case made for them, and then refused.

They tell the story of a blind developer who built a tool entirely through AI-assisted coding, and demoed it, and a sighted colleague pointed out the bottom half of the letters were cut off on screen — a visual flaw the AI never mentioned. They offer it as a cautionary tale about AI's omissions.

But look at what actually happened. The tool *worked* — through the channel its blind builder used to make it. The only fault was a property of the visual render: a surface he had no reason to inhabit. The application was sound. The defect was confined to one rendering, and it failed independently of the others, because they were never the same artefact. That is not a story about AI's blind spot. That is source-and-renders, demonstrated live: a correct application, a fault sealed inside the one render that had the problem, observers each seeing their own surface's flaws. The sighted colleague didn't rescue anyone. He QA'd the sighted render. We don't call it rescue when it runs the other way.

They had the proof of concept in their hands. The agentic web, born accessible, already shipping in a single demo. And in the same essay they prescribed keeping the scaffolding up anyway — the conformant visual view, kept forever, just in case.

The thing they want to insure against is the thing they just proved already works.

Keep the surface honest, not the industry obligated. Render each observer from the source. Prove completeness with a list the render writes itself. And when the native render is real — only then — let the catch-up machine finally stop.

It was never insurance. It was a habit. And the bill came due every release, paid by everyone, for a claim that never once got honoured.

---

**In this sequence:** Previous: [The API Is the UI Now](https://charli.info/carrados/the-api-is-the-ui-now/)

*Grounded in [the Tyrer Framework](https://charli.info/carrados/tyrer-framework/) · Charli-Jo Tyrer · CC BY-SA 4.0*
