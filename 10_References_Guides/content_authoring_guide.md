---
title: Content Authoring Guide
---

# Content Authoring Guide

Use this guide when adding or reorganising pages in the knowledge base. It explains what to put where, which index pages to update, and which site features need maintenance.

## Decide Where The Page Belongs

Use the nearest conceptual section rather than creating a new top-level folder too early.

| Content type | Usual location |
| --- | --- |
| Introductory theory | `02_Born_Oppenheimer_and_Nonadiabaticity/beginer/` or a section overview |
| More formal explanation | `intermediates/` inside the relevant section |
| Derivation | `derivations/` inside the relevant section |
| Code walkthrough | `code+breakdown/` inside the relevant section |
| Specialised topic | A named specialised-topic folder inside the relevant section |
| Site/process documentation | `10_References_Guides/` |
| Unpolished drafts | `z_draft/` |

If a folder becomes a place readers should browse, give it an `index.md`.

## Use Basic Front Matter

Every polished page should start with front matter:

```md
---
title: Page Title
---
```

Optional fields:

```md
---
title: Page Title
toc: false
toc_min_headings: 5
last_updated: 2026-05-12
---
```

Use `toc: false` for short pages where a table of contents would be distracting.

## Landing Page Template

Use this for section `index.md` files.

```md
---
title: Section Title
---

## Overview

Briefly explain what this section covers and why a reader would come here.

## Recommended Reading Path

1. [First page](path/to/page.md)
2. [Second page](path/to/page.md)
3. [Next section or specialised topic](subfolder/)

## Core Notes

- [Topic name](path/to/page.md)
- [Topic name](path/to/page.md)

## Derivations

- [Derivation name](derivations/example.md)

## Implementation Notes

- [Routine or code path](code+breakdown/example.md)

## Related Topics

- [Related section](../other_section/)
```

Keep landing pages short. Their job is navigation and orientation, not full explanation.

## Theory Page Template

Use this for explanatory pages.

```md
---
title: Theory Topic
---

## Overview

State the purpose of the page in a few sentences.

## Main Idea

Explain the concept before going into equations.

## Mathematical Formulation

Introduce symbols before using them.

## Physical Interpretation

Say what the equations mean in plain language.

## Caveats

List assumptions, limits, and common confusions.

## Reading Path

- [Previous or prerequisite](../path/to/page.md)
- [Next useful topic](../path/to/page.md)
```

If the page belongs in the guided sequence, prefer adding it to `_data/reading_paths.yml` instead of manually writing previous/next links.

## Derivation Page Template

Use this when the algebra is the main purpose of the page.

```md
---
title: Derivation Title
---

## Goal

State what will be derived.

## Starting Point

Define the assumptions and notation.

## Derivation

Work through the algebra.

## Result

Show the final equation clearly.

## Interpretation

Explain what the result means physically or computationally.

## Related Pages

- [Relevant theory page](../path/to/page.md)
```

For derivations that interrupt a narrative page, consider a collapsible block:

```md
<details class="derivation" markdown="1">
<summary>Derivation: short descriptive title</summary>

Long algebra here.

</details>
```

## Code Walkthrough Template

Use this for files in `code+breakdown/`.

```md
---
title: Subroutine or File Name
---

## Purpose

One paragraph explaining what this routine does.

## Where It Sits In The Workflow

Explain what calls it and what it prepares for.

## Inputs

- `name`: meaning

## Outputs And Side Effects

- `name`: meaning

## Temporary arrays and object shapes

- `name`: meaning

## Important helper routines

One paragraph explaining the achieved output and linkd to pages that explains it if it exist

## Important Globals Or Module Data

- `name`: meaning

## Step-By-Step Walkthrough

1. First major step.
2. Second major step.

## Theory-To-Code Map

| Theory object | Code variable |
| --- | --- |
| Example | `example` |

## Worked miniature example

If possible, include small numerical examples to illustrate

## Failure Modes Or Caveats

- Important condition or risk.

## Related Pages

- [Relevant derivation](../derivations/example.md)
```

Refer to [code writing template](code_explanation_template.md) for a checklist.

## Update Nearby Index Pages

When adding a page, update the nearest index page:

- Top-level section index, such as `06_diabatisation_deeperdive/index.md`.
- Subsection index, if the page is inside a browsable subfolder.
- `10_References_Guides/index.md`, if the page is a reference guide.

Index pages should use directory links for subfolders:

```md
[Specialised topics](specialised_propagation_diabatisation_deepdive/)
```

and normal links for individual pages:

```md
[Topological spin](topological_spin.md)
```

## Update Breadcrumb Defaults

If a new folder needs breadcrumb labels, update `_config.yml`.

Example:

```yml
  - scope:
      path: "07_New_Section"
    values:
      section_title: "New Section"
      section_url: "/07_New_Section/"
```

Add subsection defaults when useful:

```yml
  - scope:
      path: "07_New_Section/derivations"
    values:
      section_title: "New Section"
      section_url: "/07_New_Section/"
      subsection_title: "Derivations"
```

Only add URL fields when the target folder has an `index.md`.

## Update Reading Paths

If the page belongs in a guided reading sequence, add it to `_data/reading_paths.yml`.

Use final site URLs:

```yml
- title: New Section Reading Path
  pages:
    - title: New Section
      url: /07_New_Section/
    - title: First Topic
      url: /07_New_Section/first_topic.html
```

This automatically creates previous/next links at the bottom of matching pages.

## Link Carefully

Use exact folder casing. GitHub Pages is case-sensitive.

Good:

```md
[Diabatisation deep dive](../06_diabatisation_deeperdive/)
```

Avoid browser-facing links to raw `index.md`:

```md
[Diabatisation deep dive](../06_diabatisation_deeperdive/index.md)
```

Inside Mermaid diagrams, use `.html` links because Jekyll does not rewrite Mermaid link targets.

## Final Checklist

Before treating a page as polished:

- It has front matter with a title.
- It is linked from the nearest index page.
- Any new folder has an `index.md`.
- Breadcrumb defaults exist if the folder is new.
- The page is added to `_data/reading_paths.yml` if it belongs in a guided path.
- Math macros used on the page exist in `assets/js/mathjax-config.js`.
- Long equations, tables, and code blocks render acceptably on mobile.
- Local build passes with `bundle exec jekyll build`.
