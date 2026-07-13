---
layout: ../../../layouts/Document.astro
title: "Zero Information Casualty (ZIC) v1.5"
description: "The Zero Information Casualty (ZIC) design standard, version 1.5: an agent-first web specification under which no person — reading directly, using assistive technology, or acting through a sent agent — loses access to public meaning."
---

# Zero Information Casualty (ZIC)

**A Web Design Specification**

<figure>
  <img src="/images/zic-v1-5-cover.png" alt="Cover of the Zero Information Casualty specification, version 1.5. Magenta and white on black, framed by a circuit-board border. A large outlined zero contains the four casualty classes: Rendering, Admission, Delivery, Reconstruction. Below: ‘No single-sense failure. Information reaches every observer, in time to inform perception, action, and participation.’ Foundation document by Charli-Jo Tyrer, July 2026." />
  <figcaption>The front cover of ZIC v1.5. Every word on this cover also appears in the text of this document.</figcaption>
</figure>

**Version:** 1.5
**Authors:** C J Tyrer and Claude (Anthropic)
**Date:** July 2026 (v1.0: March 2026. v1.1: July 2026. v1.2: July 2026. v1.3: July 2026. v1.4: July 2026. v1.4.1: July 2026)
**Status:** Foundation Document
**Licence:** CC BY-SA 4.0
**Supersedes:** ZIC v1.4.1

## Contents

- [Changes in v1.5](#changes-in-v15)
- [Preamble](#preamble)
- [Part One: The Philosophy](#part-one-the-philosophy)
  - [1.1 The Central Claim](#11-the-central-claim)
  - [1.2 Who the Site Is Designed For](#12-who-the-site-is-designed-for)
  - [1.3 The Convergence Principle](#13-the-convergence-principle)
  - [1.4 The Tyrer Framework Connection](#14-the-tyrer-framework-connection)
  - [1.5 Why ZIC Sites Age Differently](#15-why-zic-sites-age-differently)
  - [1.6 The Open Door](#16-the-open-door)
  - [1.7 The Immediate Duty and the Two Later Permissions](#17-the-immediate-duty-and-the-two-later-permissions)
  - [1.8 The Casualties (amended in v1.5)](#18-the-casualties-amended-in-v15)
  - [1.9 The Sent-Agent Test](#19-the-sent-agent-test)
  - [1.10 Four Things Kept Apart](#110-four-things-kept-apart)
  - [1.11 The Single-Sense Rule (new in v1.4)](#111-the-single-sense-rule-new-in-v14)
  - [1.12 What ZIC Does Not Govern (new in v1.4)](#112-what-zic-does-not-govern-new-in-v14)
  - [1.13 The Composition of ZIC (amended in v1.5)](#113-the-composition-of-zic-amended-in-v15)
  - [1.14 What ZIC Secures, and What It Does Not (new in v1.4.1; retitled in v1.5)](#114-what-zic-secures-and-what-it-does-not-new-in-v141-retitled-in-v15)
  - [1.15 Structural Information (new in v1.5)](#115-structural-information-new-in-v15)
  - [1.16 The Position Principle (new in v1.5)](#116-the-position-principle-new-in-v15)
- [Part Two: Design Decisions](#part-two-design-decisions)
  - [2.1 What ZIC Requires](#21-what-zic-requires)
  - [2.2 What ZIC Rules Out](#22-what-zic-rules-out)
  - [2.3 What ZIC Leaves Alone (new in v1.4)](#23-what-zic-leaves-alone-new-in-v14)
  - [2.4 The Line Between Information and Decoration](#24-the-line-between-information-and-decoration)
- [Part Three: Technical Specification](#part-three-technical-specification)
  - [3.1 HTML Requirements](#31-html-requirements)
  - [3.2 CSS Requirements](#32-css-requirements)
  - [3.3 Metadata Requirements](#33-metadata-requirements)
  - [3.4 Content Requirements](#34-content-requirements)
  - [3.5 Delivery Requirements](#35-delivery-requirements)
  - [3.6 Agent Surface Requirements](#36-agent-surface-requirements)
- [Part Four: Validation](#part-four-validation)
  - [4.1 Automated Checks](#41-automated-checks)
  - [4.2 Screen Reader Checks](#42-screen-reader-checks)
  - [4.3 Agent Readability Checks](#43-agent-readability-checks)
  - [4.4 Agent Surface and Policy Checks](#44-agent-surface-and-policy-checks)
  - [4.5 Visitor Preference Checks](#45-visitor-preference-checks)
  - [4.6 Human Readability Check](#46-human-readability-check)
  - [4.7 Delivery Checks](#47-delivery-checks)
  - [4.8 Reconstruction Checks (new in v1.4)](#48-reconstruction-checks-new-in-v14)
- [Part Five: Implementation Notes for Astro](#part-five-implementation-notes-for-astro)
- [Part Six: Implementation Notes for GitHub Pages](#part-six-implementation-notes-for-github-pages)
- [Part Seven: Claiming Conformance](#part-seven-claiming-conformance)
- [Appendix: ZIC at a Glance](#appendix-zic-at-a-glance)

## Changes in v1.5

Version 1.5 is written from a stress test. A reader asked whether every requirement in this specification prevents an Information Casualty and pressed hardest on the skip link — a requirement no agent needs and no narrow reading of the casualty concept appears to cover. The question was a good one. The answer turned out to be already present in the founding definition, which later versions had quietly stopped quoting in full.

No requirement is added, removed, or altered by this release, and no site's conformance status changes. What changes is the derivation: v1.5 shows that provisions previously carried as unexplained human requirements follow from the framework, names honestly the one that does not, and states two principles that have been doing unnamed work since v1.0. The changelogs of earlier versions live in those versions.

Section numbering from earlier versions is preserved. Amended sections keep their numbers; new material is appended. A specification that renumbers itself between versions cannot be cited.

**The definition recovered (amended, §1.8).** An Information Casualty is an event in which relevant information fails to reach an observer in time to inform perception, action, or participation. The words *reach*, *in time*, *action*, and *participation* were in the definition from the beginning and are load bearing. A casualty was never only meaning that is absent. It includes meaning that arrives late, at prohibitive cost, or not at all, relative to the reader's need.

**Structural information named (new, §1.15).** The structure of a document is itself information carried by the document, and is subject to the Single-Sense Rule like any other fact. Skip links, landmark regions, heading hierarchy, and focus indicators all derive from this section. The skip link, previously the honest exception, is an exception no longer.

**The Position Principle (new, §1.16).** Equivalent access does not require identical interaction. It requires that every reader can reach the same informational and orientational position through a mechanism appropriate to their channel. §1.11 governs the encoding of information; §1.16 governs its arrival.

**Floor language corrected (amended, §1.14 and throughout).** In v1.4.1, the title of §1.14 still said floor while the argument of §1.14 said substrate. The title has caught up with the argument, and the remaining floor and minimum-guarantee metaphors are withdrawn with it. ZIC is not the floor beneath the building. It is the material the building is made from. The earlier language described a specification still discovering its own claim, and it is corrected without apology and without disturbing anything built on it.

**One exception named honestly, and its boundary guarded (amended, §1.13).** prefers-reduced-motion does not derive from the casualty framework, and this version stops implying that it might. It is a harm-prevention requirement, retained because a standard that delivers every fact while making its reader ill has missed the point. One named exception is a sign of honesty; a framework claiming zero exceptions invites the reader to go hunting, and the hunt only needs to succeed once. What the exception does not do is open a door. It is retained because it arrives as a declaration — a standard, machine-expressible statement of the reader's own rendering requirements — not because ZIC is becoming a general safety standard. §1.13 states the boundary.

**Markdown mirrors reframed (amended, §3.6).** Mirrors do not prevent a casualty; a competent agent reads well-formed HTML. They demonstrate the substrate: proof that one honest semantic source can emit more than one faithful rendering. The requirement is unchanged. The rationale is corrected.

## Preamble

This document specifies the Zero Information Casualty (ZIC) design standard for websites and web-based documents. It defines a philosophy, a set of design principles, and a technical specification. It is intended to function simultaneously as a publishable manifesto, a theme readme, and a briefing document for AI models working on ZIC-compliant projects.

ZIC was developed by C J Tyrer in the context of the CharliVerse intellectual ecosystem, grounded in the Tyrer Framework for accessibility and the Inference Space model of human-AI interaction. The name derives directly from the Information Casualty concept: an event in which relevant information fails to reach an observer in time to inform perception, action, or participation. ZIC sites are designed so that no such event can occur.

Version 1.0 ensured that no visitor who arrives loses any meaning. Version 1.1 extended the standard from guarantee to invitation. Version 1.2 addressed the case both earlier versions assumed away: whether the document arrived at all. Version 1.3 separated immediate human access from later machine use, and required service to the sent agent with honest, independent declarations about search indexing and model training.

Version 1.4 separates the standard from the appearance of the site that first implemented it. Every version to date has been written alongside charli.info, and charli.info is austere. Austerity was a choice its publisher made and was never a requirement this specification had any business imposing. A standard that tells a publisher to abandon her typeface has stopped describing access and started describing taste, and it will be refused by exactly the people it most needs to persuade.

Version 1.4.1 stated the specification's jurisdiction. Version 1.5 recovers the founding definition in full — information must reach an observer in time to inform perception, action, or participation — and finds inside it the derivations of the skip link and the focus ring, together with a second governing principle that had been doing unnamed work since v1.0.

The rule underneath was always simpler than the list of prohibitions that grew on top of it. It is stated in §1.11, and it fits in one sentence. As of this version it has a companion of equal rank, stated in §1.16, and that fits in one sentence too.

## Part One: The Philosophy

### 1.1 The Central Claim

A Zero Information Casualty site is one in which no person — whether reading directly, using assistive technology, or acting through an agent they sent — loses access to public meaning due to how the site is rendered, admitted, or delivered.

The sent-agent case is decisive. When a person asks a machine reader to obtain public information, the machine reader is their means of access. Refusing it is refusing them.

This is not an accessibility compliance target. It is a design constraint that shapes every decision about how meaning is encoded, admitted, and served.

### 1.2 Who the Site Is Designed For

ZIC sites are designed for the semantic layer first.

Agents, screen readers, search indexers, and voice interfaces all operate on the semantic layer of a document. They read structure, hierarchy, metadata, and text. They do not read drop shadows, colour palettes, or custom fonts — and, critically, they do not need to, because nothing that matters is kept there.

The visual layer is a rendering. For a sighted visitor, the browser produces a visual rendering of the semantic layer. That rendering may be as considered, branded, beautiful, or plain as its publisher wishes. What it may not be is the only place a piece of information exists.

An agent reading a ZIC site should receive the same quality and completeness of information as a sighted human reading the same page. If those two experiences diverge in information, the site is not ZIC-compliant. If they diverge in appearance, that is what appearance is for.

### 1.3 The Convergence Principle

Agents and screen readers are functionally equivalent at the structural level. Both:

- Navigate by semantic landmarks, headings, and links

- Require that link text describes its destination

- Require that heading hierarchy reflects content hierarchy

- Require that reading order in the DOM matches intended reading order

- Cannot interpret meaning carried only by visual properties such as colour or position

This convergence is not incidental. Information encoded in the visual layer alone is information that has been made inaccessible to a significant and growing portion of all information consumers. As AI agents become primary information consumers alongside humans, the case for visual-only encoding collapses entirely.

The equivalence is real, and it is local. It holds inside the document. It does not hold outside it, and §1.13 states where it stops.

### 1.4 The Tyrer Framework Connection

ZIC is the practical implementation of principles derived from the Tyrer Framework, specifically:

**Tyrer's Law:** In open technological systems, inaccessibility tends to increase over time as interfaces drift toward the dominant sensory modality of their designers.

ZIC is a structural defence against this drift. By requiring that meaning live in the semantic layer, rather than accumulating in the visual one, ZIC sites resist the natural tendency of a system to encode more and more of itself in the sense its designers happen to have.

**Classical versus Generative Accessibility:** Classical accessibility retrofits access onto fixed visual artefacts. ZIC is an expression of Generative Accessibility — information rendered natively from shared semantic source data into whatever form the visitor's context requires.

### 1.5 Why ZIC Sites Age Differently

Visual design trends date. Semantic structure does not.

A ZIC site built in 2026 will be as readable by whatever agents exist in 2036 as it is today, because its meaning was never held in visual conventions that drift. Its appearance may date. Its information will not.

### 1.6 The Open Door

Version 1.0 guaranteed that no meaning is lost by a visitor who arrives. Version 1.1 added invitation. Version 1.3 stated exactly who must be invited: every machine reader acting on behalf of a person seeking public information.

The web increasingly places bot-detection walls, JavaScript gauntlets, crawler blocks, rate limits, and policy layers between information and the people who ask agents to obtain it. To the person waiting for an answer, the technical category of the obstruction is irrelevant. Their chosen reader reached the door and was turned away.

A ZIC site therefore keeps an Open Door for sent agents. This does not require a publisher to permit search indexing or model training, and it does not bypass authentication, payment, privacy, or other conditions applied equally to human visitors. It requires that public content available to a person is also available, without agent-specific obstruction, to the machine reader that person sent.

The Open Door has three components, specified technically in Part Three:

**Service.** The site explicitly allows known user-directed retrieval agents and does not challenge, degrade, delay, or cloak their access to public content.

**Orientation.** The site publishes a curated map in the form agents natively read: Markdown at /llms.txt. Where practical, the content itself is also available as generated Markdown mirrors.

**Policy clarity.** The site states its content licence and independently declares whether search indexing and model training are permitted. Permission for one purpose is never inferred from another.

A note on honesty, in keeping with the rest of this document: as of mid-2026, most AI crawlers do not yet fetch /llms.txt, and its measurable effect on AI search visibility is approximately zero. The file's demonstrated use is in the agentic layer — coding agents, research agents, and user-directed fetchers that consume it as a routing map — and in tooling such as Lighthouse's Agentic Browsing audits. ZIC requires it anyway, for the same reason ZIC requires correct heading hierarchy on a page no screen reader has yet visited: the standard specifies what a well-formed site is, not what current crawlers happen to reward. The cost is one Markdown file. The claim it makes is the whole thesis of this specification.

That sentence is load-bearing, and in v1.3 it was contradicted three sections later. See §3.3.

### 1.7 The Immediate Duty and the Two Later Permissions

Machine readers arrive for three materially different purposes. ZIC treats them separately because time, agency, and consequence are different in each case.

**Sent agents: serve now.** A person has made a present request and is waiting for the result. The agent may be retrieving, reading, summarising, comparing, navigating, transforming, or acting on public information for that person. ZIC conformance requires that this class is admitted. Machine-readable declaration: ai-input=yes.

**Search indexers: discover later.** An index is being prepared so that an unknown future person may find the information. No present human request is being carried. The publisher may permit or decline indexing. Machine-readable declaration: search=yes or search=no.

**Training crawlers: model later.** Content is being gathered to shape a future model. No present human request is being carried. The publisher may permit or decline training. Machine-readable declaration: ai-train=yes or ai-train=no.

The structure is one duty followed by two independent permissions: serve the person's agent now; declare separately whether the material may be indexed later and whether it may be used for training later.

**No bundled permission.** Permission for a sent agent to retrieve public information implies permission for neither search indexing nor model training. Permission for search indexing does not imply permission for model training. Permission for model training does not imply permission for search indexing. Each purpose must be declared and interpreted independently.

**No profiles or levels.** ZIC defines one binary conformance bar. Search and training declarations describe publisher policy; they are not grades, profiles, postures, medals, or stars. A site is conformant or it is not.

### 1.8 The Casualties (amended in v1.5)

An Information Casualty is an event in which relevant information fails to **reach** an observer **in time** to inform perception, action, or participation. That is the founding definition, and every word of it works. *Reach* means the failure may occur anywhere between the publisher and the reader — in the encoding, at the door, on the wire, or inside the machine that read it. *In time* means that arrival at prohibitive cost or intolerable delay is a failure of arrival. A reader forced to labour for information that another reader receives at a glance has not been served equally; she has been served late. The four classes below are the four places the failure can occur. The definition is one.

Everything in v1.0 assumed the document arrived. Everything in v1.3 assumed that once the document arrived and was admitted, it was understood. Both assumptions are false often enough to matter.

We therefore name four classes.

**The Rendering Casualty.** The document arrived and was admitted, but its meaning was encoded in a way the observer could not decode. Colour as information. An unlabelled image that carries content. A heading that is only large. This is the concern of ZIC v1.0, and its governing principle is stated in §1.11.

**The Admission Casualty.** The document existed and could have been decoded, but a person was denied it because the machine reader they sent was refused, challenged, degraded, delayed, or misled. This is the concern of ZIC v1.1, narrowed precisely in v1.3.

**The Delivery Casualty.** The document existed, the observer was welcome, and it never arrived. This is the concern of ZIC v1.2.

**The Reconstruction Casualty (new in v1.4).** The document arrived, the reader was admitted, the meaning was decodable — and the machine reader reconstructed it wrong, silently, and reported the result to the person with confidence.

The four questions, in order:

- Can they read it? (v1.0)

- Is the person's reader allowed in? (v1.1, clarified in v1.3)

- Did it actually arrive? (v1.2)

- Did it survive being read? (v1.4)

**Why the Delivery Casualty deserves separate naming.** It is invisible to every check that runs against a document you already hold. WAVE, axe, Lighthouse, the HTML validator, the Schema validator, and a screen reader test will all pass a page that no visitor on earth can fetch, because every one of those tools begins by loading the page successfully. A tool that has the document cannot tell you the document is unreachable. The failure is upstream of the entire toolchain.

This is not hypothetical. The first ZIC implementation, charli.info, spent several days in exactly this state: immaculate semantic HTML, AAA contrast, and a robots.txt explicitly welcoming named agents — served over HTTPS behind a TLS certificate issued for *.github.io, a domain it does not own. The certificate was valid. The certificate was trusted. The certificate was for somebody else. Every automated agent validating the hostname failed the handshake, could not retrieve robots.txt, failed closed, and reported the site as disallowing automated access. The site was, in the plainest terms, perfect and unreachable.

The defect was found by exactly one check: a human asked a live AI assistant to fetch the site and it could not. That check exists in v1.1 as §4.4, where it reads as the oddest item on the list. It is now understood to be the most important one, and Part Four §4.7 generalises it.

The core delivery test: does the document arrive at a plain client that does not already trust you? If you cannot answer that from outside your own machine, you do not know whether your site works.

**Why the Reconstruction Casualty deserves separate naming.** It is the one casualty with no analogue in screen reader testing, and therefore the one that the convergence principle cannot reach.

A blind human reading a badly structured page knows that something is wrong. She backtracks. She re-reads. She hunts for the heading that should have been there. Her confusion is information, and it is available to her in the moment.

A machine reader does not backtrack. Faced with ambiguity — an unlabelled table, an implied hierarchy, a list that is only a list visually, a figure whose caption is three elements away — it resolves the ambiguity by inference, produces a fluent summary, and hands it to the person who is waiting. The person receives an answer that is confident, complete, and wrong, and receives no signal whatsoever that anything was reconstructed.

The Rendering Casualty withholds meaning. The Reconstruction Casualty replaces it. The second is worse, because the first announces itself.

The core reconstruction test: ask a machine reader to summarise the page and state what it could not determine. If it does not know what it did not know, neither do you. See §4.8.

### 1.9 The Sent-Agent Test

A sent agent is a machine reader acting in response to a present request from a person. The person has asked it to retrieve, read, summarise, compare, navigate, transform, or act upon public information, and is waiting for the result.

The test is simple: would this configuration stop a machine reader that a person sent? If yes, it creates an Admission Casualty and is not ZIC-compliant on public content.

The casualty is the person. The agent is only the vehicle. A refusal may appear in a log as a crawler decision, a WAF rule, a robots response, a JavaScript challenge, or a rate limit. In human terms, information requested by a reader was withheld from that reader.

**Equal conditions are permitted.** ZIC does not require an agent to bypass a login, subscription, payment, consent flow, privacy boundary, or access restriction that applies equally to a human visitor. It prohibits an additional barrier imposed because the visitor is a sent agent.

The test returns a different answer for search indexing and model training. Nobody has sent those crawlers with a present question. Permitting or declining either is a later-use decision. ZIC requires the decision to be explicit, independent, and true; it does not choose the answer for the publisher.

### 1.10 Four Things Kept Apart

Four distinct objects are routinely fused on the live web. ZIC keeps them separate.

**1. The licence of this specification.** How another party may use, fork, adapt, or extend ZIC itself. CC BY-SA 4.0: share and adapt with attribution, under the same terms.

**2. The licence of the site's content.** What another party may legally copy, adapt, republish, or otherwise reuse after obtaining it. This is set by the publisher.

**3. The conformance bar.** Whether the site serves sent agents and meets the rendering, delivery, semantic, technical, and validation requirements of this specification. Binary: pass or fail.

**4. The later-use declarations.** Whether search indexing and model training are permitted. Two separate yes-or-no answers, set by the publisher and declared machine-readably.

These answer four different questions — may I fork the rules, may I reuse the content, does this site follow the rules, and may I perform either of these later machine uses — and a document that answers them in one breath answers none of them.

### 1.11 The Single-Sense Rule (new in v1.4)

**No information may be locked behind a single sense.**

That is the whole of the rendering half of this specification. Everything in Part Two and every rendering requirement in Part Three is a consequence of it, and nothing that is not a consequence of it belongs there.

The rule is about information. It is not about decoration, and it has nothing whatsoever to say about beauty.

Colour is not the problem. Colour **as the only carrier of a status, a category, a distinction, or a warning** is the problem, because a person who cannot see the colour cannot receive the information, and neither can the agent she sent. Use whatever colour you like. Say it in words as well.

An image is not the problem. An image **that carries information available nowhere else** is the problem. A decorative image with alt="" transmits nothing and withholds nothing; it is silent by construction and causes no casualty. An informative image without a description is a locked room.

A typeface is not the problem. Emphasis carried **only** by a typeface is the problem, because <em> exists and italic does not survive the journey.

Position is not the problem. Meaning carried **only** by position is the problem, which is why DOM order must match reading order.

Size is not the problem. A heading that is **only** large is the problem, because it is a heading to one sense and a paragraph to every other.

The rule generates its own tests. For any element of a page, ask: **is there information here that exists in one sensory channel and nowhere else?** If yes, it must be duplicated into the semantic layer. If no, the element is outside this specification's jurisdiction and the publisher may do as she likes with it.

A ZIC-conformant site may be as visually rich, branded, illustrated, and typographically opinionated as its publisher wishes. It may not keep a single fact where only one sense can reach it.

### 1.12 What ZIC Does Not Govern (new in v1.4)

Standards accumulate scope the way sites accumulate visual encoding, and for the same reason: nobody is watching the boundary. This section watches it.

**ZIC does not govern appearance.** Typography, colour palette, imagery, illustration, iconography, ornament, layout, grid, whitespace, visual identity, and brand are the publisher's business and none of the standard's. A conformant site may look like a Swiss poster, a fanzine, a bank, or a wall of text. ZIC has no opinion and is not entitled to one.

**ZIC does not govern taste.** The reference implementation is austere. That is a preference of its publisher, not a property of the standard, and v1.3 was wrong to write it down as though it were.

**ZIC does not govern search or training policy.** It requires that both be declared, independently and truthfully. It does not require either answer. A publisher who declines both and serves sent agents is fully conformant.

**ZIC does not govern content.** What a site says, whether it is any good, and who it is for are not this specification's concern. Plain language is required only in the sense that meaning must actually be recoverable; a technical document may be as technical as its audience requires.

**ZIC does not govern hosting, framework, or stack.** Parts Five and Six are notes, not requirements. Any stack that delivers the artefacts and passes the checks conforms.

What remains after all of that is the standard: **information reaches the reader, whoever and whatever the reader is.** If a clause in this document cannot be traced to that sentence, the clause is a defect and should be reported.

### 1.13 The Composition of ZIC (amended in v1.5)

ZIC is described as an agent-first standard. That description is a strategy, and it is honest about the strategy, but it is not a complete account of the standard's contents.

The requirements of this specification are the **union** of two sets that overlap heavily and neither of which contains the other.

**What a sent agent requires and a screen reader user does not:** delivery (§1.8), admission (§1.6), a certificate that validates, a robots policy that does not fail closed, an agent surface, machine-readable licence and policy declarations. A screen reader user arrives inside the building. Her browser has already trusted the certificate, already been admitted, already fetched the page. Every one of those requirements is invisible from where she is standing.

**What a human sensory reader requires and an agent does not:** visible focus indicators, keyboard operability, skip links, text scaling to 200% without loss, prefers-reduced-motion, prefers-contrast, and colour contrast ratios. No agent has ever needed a focus ring. In v1.4 this document said these were here because human beings need them, and for no other reason. That was true, and it undersold them: most of this list is derived in §1.15, and the remainder of this section accounts for what is left.

**What both require:** heading hierarchy, landmark structure, descriptive link text, DOM reading order, text alternatives, honest semantics — everything that follows from §1.11.

The overlap is large enough that the strategy works: a site built for agents is very nearly a site built for screen readers, and a publisher motivated entirely by being read by machines will, in the course of pursuing that, remove most of the barriers facing blind people. That is the point, and it needs no apology.

But the sets are not identical, and a specification that pretended otherwise would be lying in a way that its own §1.11 forbids. Neither reader sees all of the terrain. This document is written from both positions at once, and it says so.

Most of the human list no longer needs a separate justification (amended in v1.5). Skip links and focus indicators derive from §1.15. Text scaling and colour contrast were always §1.11 applied to a degraded sense, as §2.1 has said since v1.4. Keyboard operability follows from the founding definition's participation clause: a control that only a pointer can operate has locked an action behind a single input channel. What remains is one requirement this framework cannot honestly derive: **prefers-reduced-motion**. Motion does not withhold information and does not delay it. It can make the reader ill. The requirement is retained — a standard that delivers every fact while inducing vestibular distress in the person reading it has missed the point of being read — but it is retained as what it is: a harm-prevention requirement, the one item in this specification that protects the reader rather than the information. This document forbids dishonest encoding in §1.11 and will not practise it in its own derivations.

One clarification guards the boundary this exception could otherwise breach. If ZIC retains one requirement because it prevents harm, why not every harm — flash thresholds, photosensitive seizure risk, the whole territory of protective design? Because ZIC does not select among harms at all. prefers-reduced-motion is retained because it arrives as a **declaration**: a standard, machine-expressible statement of the reader's own rendering requirements, transmitted in the protocol, of exactly the class this specification already treats as authoritative in §2.1 — prefers-color-scheme, prefers-contrast, the visitor's base font size. The reader has spoken, in the one register a human reader can speak machine-readably, and a specification whose entire subject is honest service to the reader who arrives may not ignore her. Harms that arrive with no declaration — flash limits, seizure risk carried by content itself — require the publisher to police material on behalf of readers who have said nothing. That is real work and it matters, and it belongs to general accessibility and safety standards, WCAG's photosensitivity provisions among them, not to this one (§1.14). The harm is the reader's reason for declaring. The declaration is this specification's reason for obeying.

### 1.14 What ZIC Secures, and What It Does Not (new in v1.4.1; retitled in v1.5)

ZIC guarantees that the meaning of a public page exists in the semantic layer and reaches the reader who asks for it. It does not guarantee that the rendering is optimal for any particular person.

It says nothing about cognitive load, reading level, plain-language alternatives, symbol sets, motor accessibility, timing, seizure risk, or the many other requirements that people with disabilities this specification's author does not have will rightly demand of a page.

This is not an oversight, and it is not modesty. It is the position: **no single rendering is optimal for everyone, and a standard that claimed to produce one would be lying.** The person who needs plain language and the person who needs dense technical precision want opposite pages. The person who needs no motion and the person who needs motion in order to perceive that something has changed want opposite pages. The entire history of Classical Accessibility is the history of pretending that one artefact can serve all of them, and of producing one that serves none of them well.

Generative Accessibility (§1.4) makes the opposite move. It stops attempting the single perfect artefact and instead guarantees a source from which many renderings can be generated. Every such rendering — a simplified-language version, a symbol-set version, a voice rendering, a rendering for a reader nobody has thought of yet — requires that the meaning exist somewhere reachable and honestly structured *before* it can be re-rendered for anyone.

That is what this specification secures. Not a floor beneath a building: the material the building is made of. In v1.4.1 this section's title still said floor while its final paragraphs said substrate. The title has caught up with the argument.

ZIC therefore does not offer a ceiling, and its author does not claim the standing to specify one. It secures the substrate. It leaves the renderings to the people who need them, and to the standards written by those qualified to specify them.

**ZIC is necessary. It is nowhere near sufficient. It is written to be built on.**

### 1.15 Structural Information (new in v1.5)

The structure of a document is information the document carries about itself: where the main content begins, where repeated material ends, what belongs to what, and how the whole is organised. It is information *about* the document rather than *in* it, and this specification has never treated that distinction as a licence to lose it — §3.3 already states that metadata is not decoration. Structural information is subject to §1.11 like any other fact: it may not be locked behind a single sense.

Consider one structural fact: *the main content starts here.* A sighted reader receives it by glance; visual gestalt performs an almost cost-free perceptual skip past the repeated header. An agent receives it by parsing the main element. A screen reader user receives it through landmark navigation. And a sighted keyboard user, navigating sequentially by the Tab key, receives it through — nothing. Browsers do not expose landmark navigation to the Tab key. For that reader, and for that reader alone, the fact exists in no channel at all unless the skip link supplies it.

The skip link is therefore not a human-accessibility requirement standing politely beside the casualty framework. It is the keyboard-modality **rendering** of the same structural fact that the main element renders for the agent and the visual gap renders for the eye. One fact; one rendering per channel that needs it. That is Generative Accessibility in miniature, and it is why the requirement belongs in this specification twice over: once as casualty prevention, and once as evidence that the substrate is real.

Focus indicators have the same shape. *Where am I in this document's interactive sequence* is information. The screen reader announces it. The sighted keyboard user has only the focus ring. Remove the ring and that information is held in no channel whatsoever — which is worse than a single sense, and prohibited by the same rule.

No fifth casualty class is required. The loss of structural information is a Rendering Casualty of the document's own organisation: the meaning was present and the observer could not decode it. The four questions of §1.8 stand unamended, and their elegance is not purchased at the price of an exception.

### 1.16 The Position Principle (new in v1.5)

**Equivalent access does not require identical interaction. It requires that every reader can reach the same informational and orientational position through a mechanism appropriate to their channel.**

The sighted reader sees the hierarchy. The screen reader user hears semantic headings and landmarks. The keyboard user is handed a skip link. The agent parses the DOM. These readers do not behave alike, are not addressed alike, and could not be — the equivalence this specification claims was never an equivalence of experience. It is an equivalence of **position**: each reader, by a different road, arrives knowing where the content is, how it is organised, and how to proceed.

The two principles divide the labour cleanly. The Single-Sense Rule (§1.11) governs how information is encoded: no fact may live where only one sense can reach it. The Position Principle governs whether information arrives: no reader may be left short of the position every other reader has reached. A page can pass the first and fail the second — every fact duplicated into the semantic layer, and one class of reader still labouring toward what another receives at a glance. Conformance requires both.

## Part Two: Design Decisions

This section documents what ZIC requires, what it rules out, and what it leaves alone. Every requirement follows from §1.11. Everything in v1.3 that did not follow from §1.11 has been removed.

### 2.1 What ZIC Requires

**Honest structure.** Headings must be headings, lists must be lists, tables must be tables, and each must be marked up as what it is. Visual appearance may reinforce structure; it may not substitute for it.

**Relative sizing.** Font sizes and spacing should use relative units (rem, em, %) that scale with the visitor's base font size setting. Text must remain readable and complete at 200% without horizontal scrolling or content loss. This is a requirement about *scaling*, not about *size*: set whatever base size you like.

**High contrast defaults.** Default text colours must meet WCAG AAA contrast ratios against their background. The prefers-color-scheme and prefers-contrast media queries must be respected; the visitor's OS-level settings are authoritative.

Contrast is the one visual property this specification does govern, and the reason is that it is not decoration. Contrast is whether a degraded sense can receive the text at all — which places it squarely inside §1.11. A publisher may choose any colours she likes. She may not choose colours that lock the text away from the people who need contrast to read it.

**Structural metadata.** Page titles, meta descriptions, Open Graph tags, Schema.org JSON-LD, sitemaps, robots.txt, and llms.txt are not optional decoration. They are the site's interface with agents, indexers, and assistive technologies. They must be accurate, complete, and meaningful.

**Skip links.** A skip-to-main-content link as the first focusable element is required on every page. Derivation at §1.15.

**Focus indicators.** Visible, clear focus indicators are required on every user-operable control. The browser default is acceptable; removing or weakening it is not. Derivation at §1.15.

**Suppressed outlines on landmark targets.** A landmark that is focusable only programmatically — typically <main tabindex="-1"> as the destination of a skip link — may suppress its focus outline. It is a destination, not a control. This exception is narrow and applies only to elements with tabindex="-1" that no keyboard sequence can reach.

**Reading order.** Visual reading order must match DOM order.

### 2.2 What ZIC Rules Out

Each prohibition below is a direct consequence of §1.11. There are no others.

**Information carried by colour alone.** Status, category, hierarchy, warning, or any other meaningful distinction must be encoded in text or structure. Colour may reinforce it. Colour may not be the only place it lives.

**Information carried by an image alone.** Every informative image must have a text alternative conveying the same information. Purely decorative images must be marked alt="" and are otherwise of no interest to this specification.

**Information carried by typography alone.** Emphasis, importance, and distinction must exist semantically (<em>, <strong>, heading elements), not only as weight, style, or size. A paragraph styled to look like a heading is a Rendering Casualty. A heading styled to look like anything at all is fine.

**Information carried by position alone.** If the reading order a sighted visitor would follow differs from the DOM order, the site is not conformant. CSS layout techniques must not be used to present content in a different sequence than it appears in the HTML.

**Information carried by whitespace alone.** Meaning must not be carried by blank lines, indentation, or spatial arrangement of text.

**Navigation cues carried visually alone.** Every navigation element must be meaningful in a sequential, non-visual context. Iconography is permitted; unlabelled iconography is not.

**Placeholder link text.** Links labelled "click here", "read more", "learn more", or any text that does not describe the destination are not conformant. Every link must make sense when read out of context.

**Violated heading hierarchy.** Exactly one h1 per page. No skipped levels. Hierarchy must be structurally honest.

**JavaScript for content delivery.** Content that requires JavaScript to render is not available to agents or to visitors with JavaScript disabled or unavailable. ZIC sites deliver all content as static HTML. JavaScript may be used for progressive enhancement of interactions, never for primary content delivery.

**Anti-agent measures.** Any configuration that refuses, challenges, degrades, delays, or misleads a machine reader that a person sent is not conformant on public content. This includes bot-detection challenges, CAPTCHA walls, JavaScript gauntlets, indiscriminate AI-refusal metadata, CDN or WAF rules that block user-directed retrieval agents, discriminatory rate limits, and cloaking of any kind. Declining search indexing or model training is not an anti-agent measure, provided each decision is declared independently and does not obstruct sent agents.

**Hand-maintained agent surfaces.** See §3.6.

**Unverifiable conformance claims.** See Part Seven.

### 2.3 What ZIC Leaves Alone (new in v1.4)

The following were prohibited in v1.3 and are not prohibited now. The prohibitions are withdrawn, not softened.

**Custom typefaces.** A webfont carries no information and withholds none. Use whatever typeface you like. Two engineering notes, offered as advice and not as requirements: an external font request is a third-party dependency in the delivery path, which §1.8 should make you nervous about; and text must remain real text, because an image of text is a locked room under §1.11. Beyond that, ZIC has nothing to say about letterforms.

The system font stack (system-ui, sans-serif) remains a *safe default* and is what the reference implementation uses. It respects the visitor's own font settings, requires no external request, and cannot fail to load. It is a recommendation. It was never a rule.

**Brand and decorative colour.** Accent colours, background colours, atmosphere, and visual identity are the publisher's business, subject only to contrast (§2.1) and to the prohibition on colour as the sole carrier of information (§2.2).

**Decorative imagery.** Images that serve visual interest and carry no information are permitted without restriction. Mark them alt="" and this specification has no further interest in them. v1.3 stated that such images "should not exist." That sentence was an aesthetic opinion wearing the uniform of an access requirement, and it is withdrawn with some embarrassment.

**Layout.** Multi-column layouts, grids, sidebars, cards, and asymmetry are all permitted, subject only to the requirement that DOM order match reading order (§2.1). The single-column reading layout is the reference implementation's preference. It is not a rule and was wrong to be stated as one.

**Ornament, illustration, iconography, whitespace, and visual richness generally.** Not governed. See §1.12.

A conformant ZIC site may be beautiful. It may be ugly. It may be branded to within an inch of its life. What it may not be is a site that keeps a single fact where only one sense can reach it.

### 2.4 The Line Between Information and Decoration

The test for any element of a page, visual or otherwise, is a single question:

**If this were removed entirely, would any information be lost?**

If yes, the element carries information, and that information must also exist in the semantic layer.

If no, the element is decoration, and it is none of this specification's business.

Spacing that reflects hierarchy: reinforces structure. Fine. Spacing that *is* the hierarchy: a casualty. A brand blue for headings: decoration. Fine. A brand blue that *means* "unread": a casualty. A custom typeface because it feels right: decoration. Fine. Bold text that is the only indication that a term is defined: a casualty.

The question is never "is this decorative?" Decoration is permitted. The question is always: **is any meaning trapped in here?**

## Part Three: Technical Specification

This section defines the technical requirements for ZIC compliance. These are checkable requirements, not guidelines.

### 3.1 HTML Requirements

**Document language.** Every page must declare its language via the lang attribute on the html element.

**Landmark regions.** Every page must use the correct HTML5 landmark elements: header, nav, main, footer. These must accurately represent the page structure. There must be exactly one main element per page.

**Heading hierarchy.** Pages must have exactly one h1. Heading levels must not be skipped. Headings must describe the content that follows them, not serve as decorative labels.

**Skip link.** The first focusable element on every page must be a skip link targeting the main element. This link may be visually hidden until focused. This is the keyboard rendering of the structural fact carried by the main element; see §1.15.

**Image alt text.** Every img element must have an alt attribute. Decorative images must use alt="". Informative images must have descriptive alt text that conveys the same information a sighted visitor would receive.

**Link text.** Every a element must have text that describes its destination when read out of context. If the link wraps an image, the alt text carries this responsibility.

**Current page indication.** The current page must be marked with aria-current="page" in navigation, and must be distinguished by something other than colour alone.

**Form labels.** Every form input must have an associated label element. Placeholder text is not a label.

**Table structure.** Tables must be used for tabular data only, never for layout. Data tables must use th elements with appropriate scope attributes.

**List structure.** Lists must use ul, ol, or dl as appropriate. Items that are not structurally lists must not be marked up as lists.

### 3.2 CSS Requirements

**Units.** Font sizes must use rem. Spacing must use rem or em. Fixed pixel values that override visitor preferences are not permitted for text sizing.

**Colour contrast.** All text must meet WCAG AAA contrast ratio (7:1 for normal text, 4.5:1 for large text) against its background in the default rendering. See §2.1 for why this, alone among visual properties, is a requirement.

**Colour scheme respect.** The site must implement prefers-color-scheme: dark if a dark mode variant exists. The prefers-contrast: more media query must be implemented to enhance contrast for visitors who require it.

**Focus indicators.** The :focus-visible state must be clearly visible on every user-operable control. The browser default is acceptable. Custom focus styles must meet or exceed the visibility of the browser default. Per §2.1, a landmark focusable only via tabindex="-1" may suppress its outline; no control may.

**Reading order.** Visual reading order must match DOM order. CSS properties that alter visual position — order in flexbox or grid, position: absolute, float — must not be used to present content in a different sequence than it appears in the HTML. Note that this constrains the *relationship* between layout and DOM, not the layout itself. Any layout whose visual order matches its source order is permitted.

**No animation without consent.** Any animation or motion effect must respect prefers-reduced-motion: reduce. If this media query is set, all non-essential animation must be disabled.

**No other CSS requirements exist.** Typeface, palette, ornament, and layout are not governed. See §2.3.

### 3.3 Metadata Requirements

**Page title.** Every page must have a unique, descriptive title element. Format: Page Name — Site Name.

**Meta description (amended in v1.4).** Every page must have a meta description that accurately summarises the page content. It must be a true and useful summary of the page, and it must be unique across the site.

No character range is specified. The 150-160 character range in v1.3 was inherited from search-engine display truncation — a fact about what one crawler happens to render, not a property of a well-formed document. §1.6 states that this specification describes what a well-formed site is rather than what current crawlers reward, and the range contradicted that. It is removed. Write a description that is true. If it is also 154 characters, that is a coincidence and not a virtue.

**Open Graph tags.** Every page must implement og:title, og:description, og:url, and og:type at minimum.

**Schema.org JSON-LD.** Every page must implement appropriate Schema.org structured data. At minimum: WebSite on the home page, WebPage on content pages, Person or Organization on about pages. This is the primary interface between the site and AI agents attempting to understand its content and context.

**Licence metadata.** The site's content licence must be stated in machine-readable form: as the license property in Schema.org JSON-LD on every page, as a human-readable statement in the footer, and in the llms.txt file. An agent must be able to determine what it may do with the content without leaving the page.

**Canonical URL.** Every page must declare its canonical URL via link rel="canonical". The canonical URL must be the HTTPS origin.

**Sitemap.** The site must publish a valid XML sitemap at /sitemap.xml.

**Syndication feed.** Where a site publishes content serially on its own domain — essays, posts, articles, releases — it must publish a valid RSS or Atom feed, declared via link rel="alternate". Feeds are the oldest agent-readable interface on the web and remain one of the most reliable.

Where a site publishes no serial content on its own domain, no feed is required. A site in this position must say so explicitly in its accessibility statement, and must commit to publishing a feed if that changes.

**Robots.txt.** The site must publish a valid robots.txt at /robots.txt. It must explicitly name and allow known user-directed retrieval agents. It must separately declare whether search indexing and model training are permitted, using both crawler directives and Content Signals. ai-input must be yes. search and ai-train must each be yes or no. Silence, bundling, and contradiction between purposes are not compliant. See §3.6.

### 3.4 Content Requirements

**Recoverable meaning.** Content must be written so that its meaning is recoverable from the text and structure alone. Technical terminology is permitted wherever the audience requires it. This is a requirement about *access*, not about *register*: ZIC does not tell a publisher how to write.

**Logical structure.** Every page must have a clear content structure that is self-evident from the heading hierarchy alone. A visitor navigating only by headings must be able to understand the page structure and locate any section.

**Date and time formats.** Dates must be written in unambiguous formats. ISO 8601 (2026-07-12) is preferred for machine readability. Human-readable formats must be unambiguous (12 July 2026, not 7/12/26).

### 3.5 Delivery Requirements

**Static HTML delivery.** All content must be available as static HTML without JavaScript execution. Progressive enhancement with JavaScript is permitted; JavaScript-dependent content delivery is not.

**No render-blocking resources.** CSS must not block rendering. JavaScript must be deferred or async. Critical CSS may be inlined.

**Third-party dependencies in the delivery path.** Every external request the page requires in order to deliver its *content* is a delivery risk (§1.8). External requests for *presentation* — a webfont, for instance — are permitted and are the publisher's judgment call. External requests for content are not permitted.

### 3.6 Agent Surface Requirements

The agent surface is the set of files a machine reader consults before, or instead of, reading the HTML. Every ZIC site must publish all of the following.

**llms.txt.** The site must publish a Markdown file at /llms.txt conforming to the llmstxt.org convention: an H1 with the site name as the first element, a blockquote of one to three sentences summarising the site, followed by sections of links with one-line descriptions. It must state the site's purpose, its author, its content licence, its sent-agent guarantee, and its separate search and training declarations. It must link to the highest-value pages with descriptions specific enough that an agent can route without fetching everything.

**The map must show the building.** Where Markdown mirrors are published, llms.txt must link both the canonical HTML page and its Markdown mirror. It must not link the mirror alone. A map that shows only the photocopies has lost the building. Mirrors are hospitality, not substitution.

**llms-full.txt.** Sites whose complete content fits comfortably in a single file should additionally publish /llms-full.txt containing the full text of the site in Markdown, generated from the same rendered pages as the HTML.

**Markdown mirrors.** Each content page should also be published as a plain Markdown file at a predictable, parallel URL. HTML is a rendering; Markdown is closer to the source of truth, and serving it costs an agent a fraction of the tokens.

**What mirrors are for (amended in v1.5).** Mirrors are not casualty prevention. A competent agent reads well-formed HTML, and a site with no mirror and honest semantics loses no meaning. Mirrors are **demonstration**. Generative Accessibility (§1.4) claims that one honest semantic source can produce multiple reliable renderings without drift; a generated mirror is that claim made checkable at build time. A site that cannot emit its own Markdown faithfully has failed to demonstrate that its meaning is held in a common source. The absence of one exporter is an implementation gap, not a metaphysical verdict — but until the second rendering exists, the claim that the HTML is a rendering of a substrate, rather than the substrate itself, remains asserted and untested. v1.4 said mirrors are hospitality, not substitution. Both halves were true; this completes the sentence: hospitality to agents, evidence to everyone.

**Generated, not hand-maintained.** The agent surface — llms.txt, llms-full.txt, and any Markdown mirrors — must be generated at build time from the same rendered pages that produce the HTML. It must not be hand-maintained.

This requirement is empirical. The first implementation hand-maintained its agent surface, and the surface drifted from the content within twenty-four hours of publication. Nobody was careless. Hand-maintained duplicates drift because that is what hand-maintained duplicates do. If two artefacts must agree, one of them must be generated from the other.

**Three classes, three declarations.** As of July 2026, user-directed retrieval agents include ChatGPT-User, Claude-User, and Perplexity-User. Search indexers include OAI-SearchBot, Claude-SearchBot, PerplexityBot, and conventional search crawlers. Training crawlers include GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, and Meta-ExternalAgent. The list will change and should be reviewed at least twice a year. The purposes must remain separate even when names change.

Mandatory sent-agent block:

```text
# ZIC robots.txt — mandatory sent-agent service
# A person asked, and is waiting. These agents are welcome.
User-agent: ChatGPT-User
Allow: /
User-agent: Claude-User
Allow: /
User-agent: Perplexity-User
Allow: /
```

**Search block:** choose one policy and apply it consistently to every known search indexer. The example below declines search. Replace Disallow with Allow where search=yes.

```text
# Search indexing — publisher decision
User-agent: OAI-SearchBot
Disallow: /
User-agent: Claude-SearchBot
Disallow: /
User-agent: PerplexityBot
Disallow: /
```

**Training block:** choose one policy independently of search. The example below declines training. Replace Disallow with Allow where ai-train=yes.

```text
# Model training — separate publisher decision
User-agent: GPTBot
Disallow: /
User-agent: ClaudeBot
Disallow: /
User-agent: Google-Extended
Disallow: /
User-agent: Applebot-Extended
Disallow: /
User-agent: CCBot
Disallow: /
User-agent: Meta-ExternalAgent
Disallow: /
```

**Content Signals.** The same file must state all three values explicitly. ai-input=yes is mandatory. Implementers must verify the current normative syntax against the Content Signals specification before publication; the form below is illustrative.

```text
Content-Signal: search=no, ai-input=yes, ai-train=no
Sitemap: https://example.com/sitemap.xml
```

**No bundled permission.** Changing search must not change ai-train. Changing ai-train must not change search. Neither may change ai-input, which remains yes for every ZIC-conformant site.

Comment lines are normative, not decorative. A welcome should say who is being served and why. A refusal of a later use should say what is declined and why it is separate from service to a reader. A silent Disallow is a door with no sign on it.

**Declaration is not compliance (new in v1.4).** robots.txt is where a publisher *declares* her policy. The serving stack is where she *complies* with it. These are different layers, and conflating them is the most likely way for a site to publish a false guarantee in good faith.

Two facts make this explicit rather than pedantic. First, robots.txt is advisory in every case: it is a request, honoured by convention, and a CDN rule, a WAF policy, or a bot-management heuristic will override it silently and without appearing anywhere in the file. Second, the vendors of the named user-directed agents do not agree on whether robots.txt governs them at all. Anthropic states that Claude-User honours robots.txt. OpenAI and Perplexity both state that robots.txt may not, or does not, apply to their user-triggered fetchers, on the reasoning that a fetch made at a person's direct request is not a crawl.

The consequence for this specification is precise. The mandatory sent-agent block is required, and it is *not sufficient*, and it was never the mechanism. It is a **declaration of intent**: a public statement that this publisher welcomes the readers her visitors send. What actually determines whether the agent is served is every layer beneath it — DNS, TLS, host, CDN, WAF, rate limiter, challenge page. A site whose robots.txt welcomes Claude-User while its edge issues a JavaScript challenge to Claude-User has published a false guarantee, and has published it sincerely.

Conformance is therefore established by §4.7, which fetches as the agent, and never by inspection of the file.

**The sent agents this specification cannot name (new in v1.4).** A growing class of sent agent arrives dressed as a person. Agentic browsers — those that drive a real browser session on the user's behalf — present the underlying browser's user agent string. At the HTTP layer, they are indistinguishable from an ordinary visitor.

They are sent agents in every sense that matters to §1.9: a person asked, a machine reads, the person waits. But this specification cannot allow them, because it cannot name them, and it cannot refuse them either.

Two consequences follow. First, they are served correctly by default, which is the right outcome and requires nothing of the publisher. Second, and less comfortably, the mechanism that threatens them is not robots.txt at all: it is bot-detection heuristics — behavioural, timing, and IP-reputation checks that flag traffic which is browser-shaped but does not move like a human. As this class grows, the centre of gravity of the Admission Casualty moves from the crawler-policy layer, where it can be declared, to the bot-management layer, where it cannot. §2.2 already prohibits such measures against sent agents. Publishers should understand that this prohibition, and not the robots.txt block, is increasingly the operative one.

**No contradiction between layers.** robots.txt, llms.txt, the content licence, Content Signals, the sitemap, Markdown mirrors, any feed, CDN or host configuration, and served pages must agree. Every declaration must be verified end to end, from outside, as the relevant machine reader would arrive. See §4.7.

## Part Four: Validation

A ZIC site is compliant when it passes all of the following checks. These are binary: pass or fail. There is no partial compliance.

### 4.1 Automated Checks

- WAVE Web Accessibility Evaluation Tool — zero errors

- axe DevTools — zero violations

- Lighthouse Accessibility audit — score of 100

- Lighthouse Agentic Browsing audit — passes, including the llms.txt presence check

- HTML validator (validator.w3.org) — zero errors

- Schema.org validator — valid structured data on every page

- Sitemap validator — valid sitemap with all pages listed

### 4.2 Screen Reader Checks

Test with at least one screen reader (NVDA on Windows is the reference implementation for ZIC). Verify:

- Skip link is the first element reached and functions correctly

- All landmark regions are present and correctly labelled

- Heading hierarchy is logical and complete

- All links make sense when read out of context

- All images are either meaningfully described or correctly marked as decorative

- All form inputs are correctly labelled

- Navigation is fully operable without a mouse

### 4.3 Agent Readability Checks

Verify that a sent agent reading the site receives complete and accurate public information:

- Page title and meta description accurately represent page content

- Schema.org structured data correctly describes the page, its author, and its licence

- All navigation links have descriptive text

- Content hierarchy is recoverable from heading structure alone

- Sitemap is accessible and complete

- robots.txt explicitly allows known user-directed retrieval agents

- search and ai-train are each explicitly declared yes or no, independently

- Where a feed is required under §3.3, it validates and contains the most recent content

### 4.4 Agent Surface and Policy Checks

Verify the Open Door and the two later-use declarations:

- /llms.txt exists, begins with an H1 and blockquote summary, links resolve, descriptions are specific, the content licence is stated, and both HTML pages and Markdown mirrors are linked

- /llms.txt states ai-input=yes and separately states the search and training declarations

- Markdown mirrors are generated from the rendered pages and identical in meaning to their HTML renderings

- No layer of the stack challenges, blocks, degrades, delays, or cloaks a user-directed retrieval agent

- Search indexers and training crawlers receive the behaviour declared for their own class, without either declaration being inferred from the other

- robots.txt, llms.txt, Content Signals, sitemap.xml, Markdown mirrors, any feed, host configuration, and served pages are mutually consistent

### 4.5 Visitor Preference Checks

- Set OS to dark mode: site renders appropriately

- Set browser base font size to 200%: site renders without horizontal scrolling or content loss

- Set OS to high contrast mode: site remains fully legible

- Set OS to reduce motion: no animations play

- Disable JavaScript: all content remains accessible

### 4.6 Human Readability Check

A sighted human visitor navigating the site with no prior knowledge must be able to:

- Understand what the site is and who it belongs to within the first screen

- Navigate to any major section without using search

- Understand the purpose of every link before clicking it

- Read all content without encountering visual treatment that obscures the meaning of the text

### 4.7 Delivery Checks

Every check in §4.1 through §4.6 is performed against a document the checker has already successfully obtained. None can detect a Delivery Casualty (§1.8). This section can. It is performed from outside the repository, outside the build, and outside a browser you have already taught to trust you.

**1. Fetch the canonical HTTPS origin with a plain HTTP client** — curl or equivalent — with no JavaScript, no cookies, no session, and no manually accepted certificate exception. The full content must be present in the response body.

**2. Validate the certificate hostname, not merely its issuer.** A certificate may be current, correctly chained, and issued by a trusted authority, and still be issued for a different domain. Confirm that the subject or a subject alternative name covers the canonical hostname exactly. A wildcard belonging to your host — *.github.io**,* .pages.dev, and their equivalents — is the signature of a domain whose certificate has not yet been provisioned, and every hostname-validating client will refuse it.

**3. Do not enable HTTP-to-HTTPS redirection until step 2 passes.** This ordering is normative. A site whose HTTPS origin refuses agents is, before the redirect, still reachable over HTTP; after the redirect, it is reachable by nobody. The redirect is correct and must eventually be enabled, but enabling it first converts a visible failure into a silent one.

**4. Fetch the pages and agent surface as a browser and as at least one named user-directed retrieval agent.** The public content responses must be identical. Any agent-specific challenge, degradation, delay, or divergence is a failure. This check, and not the contents of robots.txt, is what establishes conformance with the Open Door. See §3.6, "Declaration is not compliance."

**5. Fetch as at least one named search indexer and one named training crawler.** Each response must match the site's separate declaration for that class. An allowed class must receive the public content; a declined class must receive the declared refusal. Search behaviour proves nothing about training behaviour, and vice versa.

**6. Ask a live AI assistant to fetch and summarise a page by URL.** Its account must reflect the actual content of the page. This is the sent-agent equivalent of the NVDA test, and it is the only check in this specification that exercises DNS, TLS, hosting, crawler policy, robots parsing, and content in a single operation, from a machine you do not control.

The live assistant check found the defect described in §1.8. It looks, on the page, like the least rigorous item in this specification. It is the most rigorous, because it is the only one that does not begin by assuming the answer.

### 4.8 Reconstruction Checks (new in v1.4)

Every check above establishes that the document arrived, was admitted, and was well formed. None establishes that it was *understood*. A page can pass every automated audit in Part Four and still be systematically misread, because the failures that produce a Reconstruction Casualty (§1.8) are failures of implication rather than of markup: a relationship a human infers from proximity, a caption that belongs to the figure above it, a table whose header row is a header row only to the eye.

These checks are qualitative. They are performed by asking a machine reader to expose what it inferred, rather than by asking it to summarise.

**1. Fetch-and-summarise, then check for invention.** Ask a live AI assistant to summarise the page. Compare its account against the page. Any fact in the summary that is not in the page is a reconstruction, and the element that permitted it is a defect.

**2. Ask what it could not determine.** Ask the assistant, explicitly: what on this page was ambiguous, and what did you have to guess? An assistant that reports nothing ambiguous on a page you know to be ambiguous has told you that the ambiguity is invisible from where it stands — which is precisely the condition of the person who sent it.

**3. Ask it to reconstruct the structure.** Ask for the heading hierarchy, the relationships between figures and captions, and the meaning of every table. Where its reconstruction differs from your intent, the semantic layer is under-specified, whatever the validator says.

**4. Test the tables and figures specifically.** These are where reconstruction failures concentrate. A data table without th and scope will be read; it will simply be read wrongly, and confidently.

A site passes §4.8 when a machine reader's account of the page contains nothing the page does not say, and when the reader is able to identify what the page left ambiguous.

This section is deliberately the least mechanised in the specification, and it is expected to remain so. The failure it detects is a failure of a reader that does not know it is failing, and no validator that does not read can find it.

## Part Five: Implementation Notes for Astro

These are notes, not requirements. See §1.12.

**Use Astro's static output mode by default.** Server-side rendering introduces complexity and potential JavaScript dependency. Static HTML is the ZIC default.

**Disable client-side routing** unless there is a specific, justified reason to enable it.

**Use content collections for text content.** Markdown source files with schema validation are well suited to ZIC content management.

**Generate the agent surface at build time.** This is a requirement (§3.6), not a convenience. A post-build step should parse the rendered main of each page, emit the Markdown mirror beside it, and assemble /llms.txt and /llms-full.txt from the same rendered output. Generating from the *rendered* pages rather than from the source collection is deliberate: it guarantees the mirror reflects what was actually published.

**Implement the sitemap integration.** @astrojs/sitemap produces a valid XML sitemap automatically.

**Implement the feed where §3.3 requires one.** @astrojs/rss produces the syndication feed from the same content collections.

**Set the lang attribute in the base layout,** and put the skip link there too. A single implementation covers every page.

**Validate on every build.** Integrate ZIC checking into the build process so that violations are caught before deployment. Note that a repository verifier cannot check §4.7 or §4.8; see Part Seven.

## Part Six: Implementation Notes for GitHub Pages

GitHub Pages is a congenial host for a ZIC site, for a reason worth stating plainly: it serves files and nothing else. There is no WAF to misconfigure, no bot-management layer to silently contradict robots.txt, and no server-side rendering to introduce JavaScript dependency. What is in the repository is what every admitted visitor receives. The host's limitations are the specification's requirements.

**Deploy the built output, not the source.** Use a GitHub Actions workflow to run the build and deploy the output directory to Pages. Do not use the legacy Jekyll pipeline.

**Include a .nojekyll file** in the output root, so that files beginning with underscores are served.

**Custom domain and HTTPS — and the provisioning trap.** Configure the custom domain (a CNAME file in the output, plus DNS: A records at the apex pointing to GitHub's Pages addresses, and a www CNAME to the Pages host). Set the site URL in the build config to the canonical HTTPS origin so that sitemap, canonical links, feed URLs, and llms.txt links are all absolute and correct.

Then stop, and read this before you enable Enforce HTTPS.

GitHub provisions a Let's Encrypt certificate for a custom domain asynchronously, and until it lands, https://yourdomain is served with GitHub's generic *.github.io certificate. A browser shows a full-page warning that a human can click through. An agent cannot click through **anything.** It fails the handshake, cannot retrieve /robots.txt, fails closed, and reports the site as disallowing automated access. Your site is invisible to every machine reader on earth, and the only visible symptom is that the Enforce HTTPS checkbox is greyed out — which reads like a UI quirk rather than the alarm it is.

Provisioning can stall indefinitely and silently. Two common causes: a CAA record on the domain that does not authorise letsencrypt.org, and a www record in a shape GitHub does not expect, which can block issuance for the apex as well. If the certificate has not landed within twenty-four hours, check the CAA record first, correct the www record to a CNAME, then remove and re-add the custom domain in the repository's Pages settings to force a fresh request.

Enforce HTTPS becoming *tickable* is the success signal. Not the page loading in your browser — that will happen either way. Tick it only then, and only in that order, per §4.7 step 3.

**Text files serve natively.** GitHub Pages serves .txt, .md, and .xml files with sensible content types and no interference, which is exactly what the agent surface of §3.6 requires.

**The public repository is a second front door.** If the repository is public, the site exists twice: once rendered at the domain, once as source on GitHub — and agents read GitHub fluently, including raw file URLs. This should be treated as a feature and designed for: a README that orients a reader (or a coding agent) to the project, a LICENSE file naming the content licence, and commit messages written as if someone will read them, because something will.

**The agent briefing file.** A repository that is a second front door should carry an AGENTS.md at its root: a short, standing brief that a coding agent reads on arrival. It should name the standard the repository implements, link it, state the invariants that must not be broken, and name the command that proves they have not been.

The reasoning is specific to agents and worth stating. A human collaborator taught once retains the lesson; the cost of teaching amortises over every future session. A coding agent retains nothing. It arrives each session competent and blank, and every instruction given to it yesterday is gone. The usual answer to "it would take longer to explain than to do it myself" — *what about next time?* — has no purchase here, because for an agent there is no next time.

The resolution is to move institutional memory out of the worker and into the building. Whatever a maintainer currently carries in their head between sessions, and re-explains each morning, belongs in a committed file. AGENTS.md is where the standard goes so that it does not have to be taught again. The verifier is where the rules go that must never be forgotten, because a machine enforces them and a machine does not forget.

**Known limits, stated honestly.** GitHub Pages offers no custom HTTP headers, no server-side redirects beyond meta refresh, and no content negotiation — so the Markdown mirrors must live at real URLs rather than being negotiated via Accept headers. None of these limits blocks ZIC compliance as specified. If they ever do, the host changes, not the standard.

## Part Seven: Claiming Conformance

A conformance claim is a statement made to a reader who cannot see inside your build. Its only value is that the reader can check it. A claim that cannot be checked is not a weaker claim; it is a different kind of object entirely, and this specification declines to be used to manufacture them.

**1. Name the version.** A site claiming ZIC conformance must state which version it conforms to. "ZIC-compliant" without a version number is not a claim.

**2. Link the specification.** The named version must be publicly retrievable at a stable URL, and the site must link it. A repository-internal checklist is an implementation profile, not a specification, and may not be cited as one.

**3. State the two later-use declarations.** A conformance statement must state search=yes or search=no and ai-train=yes or ai-train=no. ai-input=yes is already entailed by the ZIC claim. The two declarations must be stated separately; neither may be inferred from the other.

**4. State what was checked and what was not.** Part Four is binary, but honesty about coverage is not. Under-claiming is permitted and is a virtue. Over-claiming is a defect of the same class as a missing alt attribute: it is information the reader needed and did not receive.

**5. Claim only after §4.7.** A repository verifier can prove that the artefacts are correct. It cannot prove that anybody can obtain them. Public conformance is claimed only when the in-repository checks pass and the delivery checks succeed against the live origin.

**6. Every declaration must be true at every layer.** A site that claims ZIC while its CDN challenges a sent agent has made a false conformance claim. A site that states search=no or ai-train=no while another layer permits the declared use has made a false policy claim. Absence fails to inform; contradiction instructs wrongly.

Reference form:

```text
This site conforms to Zero Information Casualty v1.4.1.
Sent agents: served (ai-input=yes).
Search indexing: declined (search=no).
Model training: declined (ai-train=no).
Specification: https://example.org/zic/1.4.1
Checked: repository verifier, delivery checks (§4.7),
reconstruction checks (§4.8), NVDA.
Not yet checked: JAWS, VoiceOver.
```

The reason this Part exists is uncomfortable and is recorded deliberately. The first implementation once claimed conformance to a version that had not yet been written. The correct response to catching yourself doing the thing you object to is not to quietly stop. It is to write the clause.

Version 1.4 adds a second instance of the same discipline, and it is recorded here for the same reason. This specification spent four versions telling publishers not to lock information behind a single sense, while itself locking a set of aesthetic preferences inside a document that had no authority to hold them. The prohibitions on typefaces, colour, and decorative imagery were not derived from the principle. They were derived from the taste of the person who wrote them, and they were the clauses most likely to make the standard refusable by the publishers it most needs to reach. Catching that is not an embarrassment to be minimised. It is the reason the version number exists.

## Appendix: ZIC at a Glance

For model context initialisation and quick reference.

**What ZIC is:** An agent-first web design standard in which no person — whether reading directly, using assistive technology, or acting through an agent they sent — loses access to public meaning because of how a site is rendered, admitted, delivered, or read.

**The two principles:** No information may be locked behind a single sense (§1.11). No reader may be left short of the informational and orientational position available to another (§1.16).

**The four questions:** Can they read it? Is the person's reader allowed in? Did it actually arrive? Did it survive being read?

**The four casualties:** Rendering — meaning was encoded where the observer could not decode it. Admission — a person was denied information because the reader they sent was refused. Delivery — the observer was welcome and the document never arrived. Reconstruction — the document was read, and silently misunderstood, and the person was told the result with confidence.

**The immediate duty:** Serve every machine reader acting on a present request from a person for public information. ai-input=yes is mandatory.

**The two later permissions:** Search indexing and model training are separate publisher decisions. Each must be declared yes or no. Neither affects ZIC conformance.

**No bundled permission:** Sent-agent retrieval implies neither indexing nor training. Search permission never implies training permission, and never the reverse.

**Declaration is not compliance:** robots.txt is where you declare. The stack is where you comply. Conformance is established by fetching as the agent (§4.7), never by reading the file.

**What ZIC requires:** Honest structure, relative sizing and 200% scaling, AAA contrast, respect for visitor preference queries, structural metadata, skip links, visible focus on controls, DOM order matching reading order, static HTML content delivery, a generated agent surface, and an Open Door for sent agents.

**What ZIC rules out:** Information carried by colour, image, typography, position, or whitespace *alone*. Vague link text. Violated heading hierarchy. JavaScript-dependent content. Barriers to sent agents on public content. Hand-maintained agent surfaces. Bundled machine-use permissions. Unverifiable conformance claims.

**What ZIC does not govern:** Typeface, palette, imagery, ornament, layout, brand, visual identity, taste, register, hosting, framework, or search and training policy. A conformant site may look like anything at all. (§1.12, §2.3)

**The core test for any element:** If this were removed, would any information be lost? If yes, that information must also exist in the semantic layer. If no, it is decoration and none of ZIC's business.

**The core test for admission:** Would this stop a machine reader that a person sent? If yes, it manufactures an Admission Casualty and does not belong on public content.

**The core test for delivery:** Does the document arrive at a plain client that does not already trust you? If you cannot answer that from outside your own machine, you do not know whether your site works.

**The core test for reconstruction:** Ask a machine reader what it could not determine. If it does not know what it did not know, neither do you.

**The composition of ZIC:** the union of what a sent agent needs and what human sensory access needs. Neither set contains the other. (§1.13)

**Structural information:** The structure of a document is information the document carries about itself. A skip link is the keyboard rendering of a structural fact every other channel already receives; a focus ring is the only rendering of the current position that a sighted keyboard user has. (§1.15)

**The one exception:** prefers-reduced-motion is harm prevention, not casualty prevention. It is retained because it arrives as the reader's own machine-expressible rendering declaration — the class of declaration this specification already treats as authoritative. ZIC does not select among harms; it honours declarations. (§1.13)

**The jurisdiction of ZIC:** ZIC secures the semantic substrate and its delivery. It does not specify renderings, and offers no ceiling for cognitive, motor, or other access needs it is not qualified to specify. It is necessary, nowhere near sufficient, and written to be built on. (§1.14)

**Theoretical grounding:** Tyrer Framework (C J Tyrer, CharliVerse). Specifically: Information Casualty, Tyrer's Law, Generative Accessibility.

**Implementations:** charli.info — first implementation, first site to operationalise the Open Door, source of the defects that produced v1.2 and the clarifications in v1.3 and v1.4. blind-ant.com — pending.

*Zero Information Casualty v1.5 — C J Tyrer and Claude (**Anthropic) —** July 2026*

*CC BY-SA 4.0 — Share and adapt with attribution*

## This Document in Other Renderings

This page is the canonical publication of Zero Information Casualty v1.5. The same document is also available as a Word file: [Download ZIC v1.5 as a Word document (.docx)](/documents/Zero_Information_Casualty_v1_5.docx). The HTML at this URL is the authoritative version; the Word file is a rendering of it.
