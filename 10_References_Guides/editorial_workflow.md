---
title: Editorial Workflow
---

# Editorial Workflow

This guide explains how writing, review, task tracking, and publication should work as more people contribute to the knowledge base.

## Management Structure

Use three layers:

| Layer | Tool | Purpose |
| --- | --- | --- |
| Public direction | `00_project_overview/roadmap.md` | Reader-facing summary of current priorities. |
| Live work management | GitHub Projects and Issues | Task status, ownership, deadlines, discussion, and review requests. |
| Published guidance | `10_References_Guides/` | Contributor instructions, style guides, templates, and maintenance notes. |

Avoid putting the live to-do list directly in the website. It is too easy for a Markdown task page to become stale once several people are contributing.

## Project Board Columns

Recommended GitHub Project columns:

| Column | Meaning |
| --- | --- |
| Inbox | New ideas or reports that have not been triaged. |
| Backlog | Valid work, but not ready to start. |
| Ready to Write | Scoped work with a clear location and expected outcome. |
| Drafting | Someone is actively writing or revising. |
| Needs Technical Review | Physics, mathematics, code mapping, or citation accuracy needs checking. |
| Needs Editorial Review | Clarity, structure, notation, links, and reader flow need checking. |
| Ready to Merge | Review is complete and the page is ready for publication. |
| Published | Merged into the main branch and visible on the site. |
| Needs Update | Published material that needs revision after later changes. |

## Recommended Labels

Use labels to make the board searchable.

| Label | Use |
| --- | --- |
| `content` | New or revised written material. |
| `derivation` | Algebra-heavy or proof-heavy work. |
| `code-map` | Theory-to-code mapping or routine walkthroughs. |
| `diagram` | Figures, flowcharts, or visual explanations. |
| `notation` | Symbols, conventions, or glossary updates. |
| `site` | Layout, navigation, Jekyll, CSS, JavaScript, or build work. |
| `review` | A page or pull request needs expert checking. |
| `needs-triage` | The task needs scope, owner, or location decisions. |
| `good-first-issue` | Suitable for a new contributor. |

## Issue Workflow

Each substantial task should have an issue before writing begins.

An issue should answer:

- What page, section, or concept is being changed?
- Where should the work live in the repository?
- What is the expected outcome?
- Is the task new content, revision, technical review, editorial review, or site maintenance?
- Who should review it?

Small typo fixes can go straight to a Pull Request.

## Pull Request Workflow

Each Pull Request should:

- Link the related issue.
- Describe what changed.
- List the pages or folders touched.
- Note whether technical review, editorial review, or both are needed.
- Confirm that nearby index pages and reading paths were updated when needed.
- Confirm that the site was built locally for larger or structural changes.

## Review Standards

Technical review should check:

- Physics and mathematical correctness.
- Consistency with the established notation.
- Correct relation between theory and code.
- Appropriate assumptions and caveats.
- Citations or references where needed.

Editorial review should check:

- Clear page purpose.
- Smooth reader flow.
- Sensible heading structure.
- Helpful links to prerequisite and related material.
- No orphaned pages.
- Good rendering of equations, tables, diagrams, and code blocks.

## Where To Put Drafts

Use `z_draft/` or a draft branch for unpolished working notes. Drafts should not be linked from reader-facing index pages until they are ready for review.

Once a draft is ready, move it into the appropriate section folder and open a Pull Request.

