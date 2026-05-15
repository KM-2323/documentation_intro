# Contributing

Thank you for helping improve the Quantics Knowledge Base. This project is a living textbook and code manual, so contributions should make the material clearer, more accurate, easier to navigate, or easier to maintain.

## Where Work Belongs

Use this structure when deciding where to put new material.

| Work type | Location |
| --- | --- |
| Public project direction, aims, reading maps, roadmaps | `00_project_overview/` |
| Theory pages | The relevant numbered topic folder, such as `02_Born_Oppenheimer_and_Nonadiabaticity/` |
| Beginner explanations | `beginer/` inside the relevant topic folder |
| Intermediate explanations | `intermediates/` inside the relevant topic folder |
| Formal derivations | `derivations/` inside the relevant topic folder |
| Code walkthroughs and implementation notes | `code+breakdown/` inside the relevant topic folder |
| Specialised topics | A named subfolder inside the relevant topic folder |
| Contributor guides, style guides, workflow notes, site maintenance | `10_References_Guides/` |
| Unpolished notes, experiments, private working drafts | `z_draft/` or a draft branch |
| Active tasks, assignments, review status, deadlines | GitHub Issues and GitHub Projects |

The website should contain polished reader-facing material. The live management board should live in GitHub Projects, with each task tracked as a GitHub Issue.

## Contribution Workflow

1. Pick or create a GitHub Issue for the work.
2. Move the issue through the project board as its status changes.
3. Create a branch for the work.
4. Write or revise the page in the correct folder.
5. Update the nearest `index.md` page if the new page should be discoverable.
6. Open a Pull Request and request review.
7. Address technical, editorial, and rendering feedback.
8. Merge once the page is accurate, linked, and builds cleanly.

Suggested branch names:

```text
content/short-topic-name
review/page-or-section-name
site/navigation-or-layout-change
fix/broken-link-or-rendering-issue
```

## Writing Expectations

Before opening a Pull Request, check that the page:

- Has front matter with a clear `title`.
- Defines symbols before using them heavily.
- Separates physical intuition, mathematical formulation, and caveats when helpful.
- Uses the shared notation and glossary where possible.
- Links to prerequisite and related pages.
- Is connected from the nearest relevant `index.md` page.
- Builds locally if the change affects navigation, Liquid templates, MathJax, CSS, or JavaScript.

For detailed writing structure, see `10_References_Guides/content_authoring_guide.md`.

## Local Build Check

Run this before merging larger changes:

```bash
bundle exec jekyll build
```

For site maintenance details, see `10_References_Guides/Jekyll_site_maintenance.md`.

