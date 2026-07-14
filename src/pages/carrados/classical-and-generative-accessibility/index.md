---
layout: ../../../layouts/Document.astro
type: Article
pubDate: 2026-01-03
next: https://charli.info/carrados/the-api-is-the-ui-now/
title: "Why Accessibility Keeps Getting Worse — and Why, for the First Time, It Might Not"
description: "The Tyrer Framework in plain language: why accessibility erodes, the ladder from visual dominance to perceptual sovereignty, and the fork AI puts in front of us. By Charli-Jo Tyrer."
---

# Why Accessibility Keeps Getting Worse — and Why, for the First Time, It Might Not

*The Tyrer Framework in plain language*

*July 2026*

**What this is:** *a plain-language rendering of the Tyrer Framework (Charli-Jo Tyrer, 2026), whose canonical publication is [the Tyrer Framework](https://charli.info/carrados/tyrer-framework/). The Framework is the authoritative statement; this essay is one rendering of it, written for readers who will never open a paper with an Abstract. Where the two differ, the Framework wins.*

## A note on premises

This essay starts from a simple assumption: generative AI and interface generation are not going away. The interface is no longer a fixed artefact authored in advance; it is something produced at the moment of interaction.

If your position is that AI should be rejected outright, nothing here will align with you. This piece is written for people who have already noticed the shift from fixed interfaces to generated ones, and are asking what that shift means for human rights and user agency.

## Classical accessibility doesn't feel wrong. It feels tired.

At the start of 2026, classical accessibility doesn't feel incorrect, outdated, or misguided. It feels tired.

Tired in the way something feels when it has been carrying real weight for a long time — doing necessary work in a world that no longer matches the assumptions it was built on.

For over three decades, accessibility has focused on making fixed interfaces usable by people with disabilities. That work remains non-negotiable. Screen readers, keyboard navigation, semantic HTML, WCAG — these are the deterministic floor, and the floor is permanent.

But something underneath the tiredness deserves a name. Because the exhaustion practitioners feel is not a failure of effort. It is the felt experience of pushing against a system that is structurally arranged to undo the work.

## The Law: it's not carelessness, it's cognition

Every blind computer user knows the pattern. A tool starts out accessible. Versions pass. Features arrive. And somewhere along the way, quietly, without anyone deciding it, the tool stops working with a screen reader.

We usually discuss this pattern in moral terms. Developers forget. Teams deprioritise. Organisations fail to maintain standards. All of that happens — but it doesn't explain why the same pattern recurs across different teams, different companies, different decades, and different technologies. When the same accident happens on every road, you stop blaming the drivers and start examining the road.

The Tyrer Framework begins by examining the road. Its first component is a diagnostic law: *in open technological systems, inaccessibility tends to increase over time as interfaces drift toward the dominant sensory modality of their designers.*

The mechanism is almost embarrassingly simple. Most technology designers are sighted, and for sighted people, visualisation is not a presentation choice — it is a thinking tool. When a system grows complex, the instinctive response is visual: dashboards instead of logs, flowcharts instead of explanations, icons instead of labels. This is not carelessness. It is cognition. Designers externalise their thinking in the modality that feels most natural to them, and for the overwhelming majority, that modality is vision.

Then the ratchet turns. Every development cycle adds visual complexity. Every visual addition is a potential accessibility regression. The accessible adaptations are always reactive, always trailing, always competing for resources against the next visible feature. A screenshot of a new dashboard persuades a stakeholder in two seconds; accessibility is invisible when present and noticed only when absent. The gap widens. The system drifts.

And the drift produces something worse than inconvenience. The Framework calls it an information casualty: an event in which relevant information fails to reach an observer in time to inform perception, action, or participation. When a blind pedestrian collides with an obstacle because nothing communicated its presence, that is not a usability issue. When an interface renders its critical controls as unlabelled visual elements, the user who cannot perceive them has not been inconvenienced. They have been severed from the information they needed to act.

Information casualties are not edge cases. They are the predictable output of systems operating under the Law. That reframing matters, because it moves the conversation from goodwill to structure. You cannot fix a structural problem by asking everyone to be nicer.

## The Ladder: Kardashev, but for information

Physicists have a famous scale for civilisations. The Kardashev Scale classifies them by how much energy they can harness: a planet's worth, a star's worth, a galaxy's worth. It is a wonderful piece of intellectual machinery, because it lets you locate the present on a very long trajectory.

The Tyrer Framework performs the same trick for information. The Tyrer Accessibility Scale classifies civilisations by how much of their environmental information reaches every observer, regardless of which senses that observer happens to have. The two scales are orthogonal: a civilisation could harness the full output of its star and still be unable to guarantee that a blind citizen can safely cross a street. Mastery of one dimension; failure at the other.

**Type 0 — Visual Dominance.** Information is encoded visually first, and accessibility is a retrofit: the accessible version is always derived from the visual version. It is a translation, and like all translations, it loses information at every step. We live here. Full WCAG compliance is the best available outcome inside this paradigm — the floor holds — but the paradigm itself is unchanged, and the ceiling is fixed.

**Type I — Structured Information.** The paradigm breaks. Interfaces stop being fixed artefacts and start being generated from shared semantic data. The visual dashboard, the screen reader's navigable summary, the agent's structured feed: none of these is the original, none is the translation. Each is a native sibling of the others. This is not science fiction — the transition from Type 0 to Type I is achievable with current technology. The question is not capability but priority.

**Type II — Environmental Metadata.** The physical world joins in. A door does not need to be found by touch or memory; it announces its position, its state, and its purpose. A shop declares its contents. A street communicates its geometry and its hazards in whatever modality you can receive. Mute objects cease to exist.

**Type III — Perceptual Sovereignty.** The endpoint. No observer's access to reality is mediated by the accident of which sensory channels they possess. The probability that relevant information fails to reach consciousness approaches zero — the Zero Information Casualty condition.

An honesty note, because the Framework is careful about this and its plain-language rendering should be too. Types 0 and I are engineering claims about the present: diagnoses and buildable proposals. Types II and III are philosophy — the direction the ladder points, not a product roadmap. That is a feature, not a confession. Kardashev's upper types are wildly speculative too, and nobody holds it against the scale. You need the far rungs to know which way is up.

## The Quantum Web: from artefacts to collapses

Here is what the Type 0 to Type I transition feels like from inside, and why it is already underway.

The web that classical accessibility was designed for was Newtonian. It was a web of fixed objects (pages), located at static coordinates (URLs), which looked the same to everyone. Accessibility was the act of retrofitting those fixed objects so they could be perceived by different tools.

The web that is emerging is quantum. The interface does not exist until a user observes it. It sits in a state of superposition — a cloud of raw data, potential actions, and latent intent — and it is only when a user arrives, with their specific context, constraints, and device, that the system collapses it into a specific rendering.

- **For a sighted user**, it collapses into a visual dashboard.
- **For an AI agent**, it collapses into structured data or function calls.
- **For a blind user**, it collapses into a navigable summary or a structured feed.

This changes the definition of accessibility entirely. In a generated world, the accessible interface is not a translation of the visual version. It is one equal, valid collapse of the same underlying reality — a native sibling, generated from the same source.

## The convergence nobody planned

And here is why the transition feels inevitable rather than optional: **AI agents and assistive technologies now require the same thing.**

For decades, the accessibility community begged developers to expose semantic structure for screen readers, and the request was heard as a niche accommodation. Now the entire technology industry is restructuring its interfaces to expose semantic structure for AI agents. Agents need exactly what blind users have always needed: explicit intent, deterministic state, clear hierarchy, and the absence of visual noise.

Accessibility is no longer a sidecar. It is the human-facing expression of the agent interface. For the first time in the history of digital accessibility, the economic incentives of the mainstream industry are aligned with the structural requirements of accessible design. The only question is whether the accessibility community recognises the alignment before the window closes.

## Why this feels dangerous

If the quantum web sounds exciting, it should also sound dangerous. Generative accessibility is risky not because it is careless, but because it is probabilistic and fragmented. Three failure modes deserve particular attention.

### 1. Fragmentation: the many-worlds problem

In a world of on-demand generation, we lose shared reality. The Amazon I buy trousers from might not be the same Amazon you buy socks from. If the interface collapses differently for every user based on inferred intent, how do we collaborate? How do we troubleshoot? If I say "click the blue button" and your reality collapsed into a world with no buttons, we are not just using different tools; we are inhabiting different universes. For disabled users the risk is sharper still: a "simplified" version of the interface that removes complexity under the guise of helpfulness, trapping the user in a reduced reality they cannot see past.

### 2. Silent failure

Classical accessibility fails loudly. An unlabelled button is detectable; a missing heading is auditable. Generative accessibility can fail silently. If the system infers that a user is confused and quietly collapses their interface into a simplified mode, the user may never know what they have lost. This is not a bug. It is invisible, systemic discrimination, operating at the level of inference rather than design — and because the user cannot see the other possibilities, they cannot even name what was taken.

### 3. The verification burden

If the interface is generated rather than fixed, how do you know it is true? A sighted user may trust a generated chart because it looks right. A blind user receiving a generated summary is forced to wonder: is this what the data says, or what the system thinks I want to hear? That is a cognitive tax of constant verification, and it falls disproportionately on the people who were already working harder to access the information.

## Governance: the new accessibility

You cannot audit a wave function. You cannot run a checker on an interface that does not exist until it is generated and disappears when the user leaves. When accessibility moves from fixed artefacts to generated systems, the discipline shifts from compliance to governance: what can be governed is the system that generates.

**The anchor is the Right to Inspect.** No user should be required to accept a generated interpretation they cannot interrogate. If the system produces a summary, the user must be able to request the underlying data. If it renders a simplified view, the user must be able to demand the full complexity. If it collapses the interface into one modality, the user must be able to force a different collapse: "show me the table, not the chart."

This is not just for disabled users. In an AI-mediated world, the tools required for accessibility — inspect the source, verify the state, control the rendering — become the View Source for everyone. Accessibility governance becomes information governance. The sidecar becomes the chassis.

## The Doctrine: one sentence to build by

The Framework's prescription fits in a sentence: *systems should be engineered so that no critical environmental information is accessible through only a single sensory channel.*

Engineers already understand this principle perfectly — they just apply it to servers instead of senses. Nobody calls redundancy across servers an accommodation for unlucky data. A single point of failure is a defect, and information locked behind a single sense is a single point of failure in the information layer. Redundancy across perceptual channels is an engineering requirement for exactly the same reason.

The Doctrine relocates the failure, too. A blind person who walks into an obstacle has not failed to see it; the environment has failed to communicate it. A screen reader user who cannot operate a control has not failed to perceive the interface; the interface has failed to expose its state. This is not wordplay. It determines where the resources go and where the accountability falls.

And the Doctrine keeps what works. The deterministic floor — WCAG, semantic HTML, keyboard operability — is permanent, not transitional. The floor holds the line. The generative ceiling raises it.

## The fork

The Law has held for the entire history of digital technology. Assistive technologies have mitigated it; standards have slowed it; nothing has broken it. Artificial intelligence is the first widely deployed technology that could — because for the first time, information can reach a person without being externalised visually first. You state what you want; the system reasons about how to do it; the result arrives in whatever modality you can receive. The visual interface becomes one possible rendering among many, rather than the canonical source everything else is derived from.

But the break is an opportunity, not a guarantee, and AI can take two paths.

**Path one:** AI becomes the most powerful engine of visual drift ever produced. Interfaces grow more visually sophisticated, more dynamically generated, more personalised in their presentation — and the gap between visual richness and accessible structure widens faster than ever. The Law accelerates.

**Path two:** AI becomes a cognitive intermediary, sitting between information and perception, rendering meaning into whatever channel the observer requires. The compulsory visual detour stops being compulsory. The Law weakens — the first genuine weakening in the history of the pattern.

Only the second path leads to Type I. The first entrenches Type 0. And the choice between them is not technical. It is political, economic, and ethical, and it is being made right now — in standards bodies, in engineering teams, in procurement decisions, and in what the accessibility community demands while the window is open.

## The real choice in front of us

Classical accessibility feels tired because it has been holding the line alone. Generative accessibility feels dangerous because it asks us to redesign the line itself. The mistake would be pretending either feeling is wrong.

The Framework's endpoint is not utopian. It is an engineering target: zero information casualties. Every system that fails to deliver information to an observer is a system with a fault, and every civilisation that normalises those faults has chosen to leave the problem unsolved.

The many worlds are coming. The tools to navigate between them are arriving. The question — the only question — is whether we build them deliberately, or drift.

---

**In this sequence:** Next: [The API Is the UI Now](https://charli.info/carrados/the-api-is-the-ui-now/)

*Rendered from [the Tyrer Framework](https://charli.info/carrados/tyrer-framework/) (2026) · Charli-Jo Tyrer · CC BY-SA 4.0*
