# AGENTS.md

## Purpose

This document tells humans and AI agents how to work inside this repository.

It exists to keep the project:

- simple
- static-first
- beginner-friendly
- reusable across multiple local business clients
- aligned with SEO, AI-search, and conversion goals

If there is ever a choice between a clever solution and a clear solution, choose the clear solution.

## Project Philosophy

This repository is not just a brochure website.

It is the foundation for a reusable business systems platform that helps local businesses:

- capture demand
- explain their offer clearly
- improve lead handling
- build trust faster
- adapt to modern search and AI-driven discovery

The core offer is:

`Tailor-made growth systems for local businesses.`

The site should feel like guidance, structure, and thoughtful implementation, not generic agency output.

## Business Intent

Every update should support one or more of these business outcomes:

- better semantic SEO
- stronger AI-search readiness
- clearer local business positioning
- higher conversion trust
- easier client customization
- smoother long-term reuse

Do not add features that only make the project look more advanced without improving clarity, trust, or maintainability.

## Architecture Philosophy

Keep the architecture simple and static by default.

Preferred stack:

- `index.html` for structure and semantic markup
- `styles.css` for styling
- `script.js` for light interaction and rendering
- `config.js` for reusable business content and client settings

Prefer direct files over abstractions.

Avoid:

- frameworks
- bundlers
- unnecessary dependencies
- build steps
- large component systems
- CMS complexity unless there is a real business need

## Static-First Workflow

When making changes, follow this order:

1. Clarify the business goal.
2. Check whether the change belongs in content, structure, styling, or behavior.
3. Prefer updating `config.js` first when the change is business-specific.
4. Only change `index.html` when the page structure or semantic markup must change.
5. Only change `styles.css` when visual presentation must change.
6. Only change `script.js` when behavior or rendering logic must change.
7. Update documentation if the operating model changes.

This keeps the project fast to edit and easy to hand off.

## File Ownership

- `index.html`: semantic layout, sections, accessibility structure, page hierarchy
- `styles.css`: layout, spacing, colors, typography, responsive behavior
- `script.js`: DOM updates, rendering logic, interaction behavior
- `config.js`: business copy, labels, service data, trust signals, links, client-facing settings
- `SEO_SYSTEM_RULES.md`: reusable SEO rules
- `DESIGN_SYSTEM.md`: reusable visual rules
- `BRAND_POSITIONING.md`: messaging, tone, emotional direction, authority positioning
- `docs/`: supporting operational instructions

## Coding Behavior Expectations

When editing this repository:

- write plain, readable code
- keep logic short and obvious
- favor small edits over rewrites
- preserve existing static deployment compatibility
- use semantic HTML whenever possible
- keep CSS organized and readable
- keep JavaScript lightweight and easy to trace
- avoid hidden magic or fragile abstractions

Code should be understandable by a beginner reviewing it for the first time.

## Beginner-Friendly Constraints

Assume future editors may not be advanced developers.

That means:

- do not introduce advanced patterns unless truly necessary
- do not split files aggressively
- do not create complex naming systems
- do not require setup beyond opening the folder and deploying static files
- do not make content updates depend on code knowledge when `config.js` can handle them

If a local business owner or junior editor cannot reasonably follow the structure after reading the docs, the solution is too complex.

## SEO-First Mindset

This project should be easy for search engines and AI systems to understand.

Always favor:

- clear page intent
- semantic heading structure
- descriptive internal linking
- specific service and location language
- readable trust-building copy
- strong metadata support
- clean content hierarchy

Do not treat SEO as a plugin or afterthought.
It should be reflected in structure, copy, and page organization from the start.

## AI-Search Readiness

This repository is being shaped for AI-assisted discovery as well as traditional search.

To support that:

- keep service explanations concrete
- use natural language that answers real buyer questions
- make offerings easy to summarize
- define business identity clearly
- avoid vague marketing language
- keep trust signals explicit
- structure content so it can be parsed section by section

AI systems should be able to understand:

- who this business helps
- what it builds
- how the process works
- why it is different
- where it operates

## Messaging and Conversion Guardrails

The differentiator is not "we make websites."

The differentiator is:

- personalized intake
- workflow understanding
- white-glove implementation
- simplified technology adoption
- guided business adaptation

Do not add messaging that makes the brand sound like:

- a generic web design shop
- a template seller
- a corporate agency
- a trend-chasing AI company

## Do Not Overengineer

Before adding anything, ask:

1. Does this help the client or future editor immediately?
2. Can this be done with the current static stack?
3. Is there a simpler version that solves the same problem?
4. Will this still make sense when duplicated for another client?

If the answer is unclear, choose the simpler path.

Avoid:

- premature scalability layers
- large refactors without business value
- abstract systems with no second use case
- dependency-heavy solutions for simple needs

## Maintainability Standards

All additions should be:

- easy to find
- easy to rename
- easy to reuse
- easy to remove
- easy to explain

When adding new sections or content types:

- keep naming consistent
- keep repeated patterns predictable
- document any new rules briefly
- avoid one-off structural exceptions unless necessary

## Maintainable Project Structure Expectations

As the project grows, prefer a structure like this:

```text
/
├── index.html
├── styles.css
├── script.js
├── config.js
├── AGENTS.md
├── BRAND_POSITIONING.md
├── SEO_SYSTEM_RULES.md
├── DESIGN_SYSTEM.md
├── docs/
├── assets/
├── services/
├── industries/
├── locations/
└── resources/
```

Notes:

- keep top-level files limited to core system files and core documentation
- add folders only when there is real content to organize
- use descriptive folder names tied to search intent and business structure
- preserve static deployability on GitHub + Netlify

## Reuse Across Client Projects

This system should be easy to duplicate for new local business clients.

To support that:

- keep client-specific content in `config.js` where possible
- keep shared rules in markdown docs
- keep assets organized by type
- avoid hardcoding business assumptions into multiple files
- prefer reusable page and section patterns

Think in terms of:

`lead capture -> processing -> notification -> deployment`

That business systems flow should stay visible in both content and implementation decisions.

## AI Agent Guidance

If an AI agent works in this repository, it should:

- read this file before making structural changes
- check `BRAND_POSITIONING.md` before rewriting copy
- check `SEO_SYSTEM_RULES.md` before changing page hierarchy or metadata direction
- check `DESIGN_SYSTEM.md` before changing visual patterns
- preserve the static architecture unless explicitly told otherwise
- prefer small edits over full rewrites
- document meaningful structural changes
- avoid introducing frameworks or unnecessary tooling

When uncertain, the AI agent should optimize for:

- clarity
- trust
- semantic structure
- reuse
- low maintenance burden

## Decision Filter

Use this filter before shipping changes:

1. Is it simple?
2. Is it clear?
3. Is it reusable?
4. Is it easy for a beginner to maintain?
5. Does it support SEO or AI understanding?
6. Does it strengthen trust or conversion?
7. Does it preserve the static-first architecture?

If not, revise it.
