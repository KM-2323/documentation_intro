---
title: Jekyll Site Maintenance
---

# Jekyll Site Maintenance

This repository is the source for a GitHub Pages site built with Jekyll. The source files are Markdown, Sass, HTML includes, JavaScript, and YAML configuration. Jekyll turns them into the static HTML site in `_site/`.

Do not edit `_site/` directly. It is generated output.

## How The Site Builds

The main configuration file is `_config.yml`.

At build time, Jekyll:

1. Reads `_config.yml`.
2. Loads the remote Cayman theme from `remote_theme`.
3. Applies defaults from `_config.yml` to Markdown pages.
4. Converts Markdown files into HTML.
5. Wraps each page with `_layouts/custom.html`.
6. Pulls reusable blocks from `_includes/`.
7. Reads navigation data from `_data/reading_paths.yml`.
8. Processes `assets/css/style.scss` into the site CSS.
9. Copies JavaScript from `assets/js/`.
10. Writes the generated site into `_site/`.

On GitHub Pages, this build happens on GitHub's servers. Locally, `bundle exec jekyll serve` builds and serves the same site for preview.

## Local Preview

Install Ruby with DevKit on Windows, then open PowerShell in the repository.

The repository already has a `Gemfile`:

```ruby
source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
```

Install dependencies once:

```bash
bundle install
```

Preview locally:

```bash
bundle exec jekyll serve
```

Then open the URL printed by Jekyll, usually:

```text
http://127.0.0.1:4000/
```

To do a build without serving:

```bash
bundle exec jekyll build
```

If the remote theme cannot be downloaded, the build may fail with a connection error to GitHub. That is a network/theme-fetch problem, not usually a Markdown problem.

Alternatively, local server can be hosted through python. To start a server (optionally set port to 80):

```bash
bundle exec jekyll build #if sites are not built
cd _site
python -m http.server 80
```
Now open the browser at:
[http://localhost/](http://localhost/)

> **Note for local deployment, it is recommned to change all toc to false to speed up local rendering. (see later on how table of contents are rendered and styled)**

## Important Files

### `_config.yml`

Use `_config.yml` for site-wide settings:

- Site title.
- Remote theme.
- Repository URL.
- Footer links.
- Default layout.
- Default breadcrumb labels.
- Default table-of-contents behavior.

The current defaults apply `layout: "custom"` and `toc: true` to all pages unless a page overrides them.

Example:

```yml
defaults:
  - scope:
      path: ""
    values:
      layout: "custom"
      toc: true
```

Add a new section default when creating a new top-level folder:

```yml
  - scope:
      path: "07_New_Section"
    values:
      section_title: "New Section"
      section_url: "/07_New_Section/"
```

Only add `section_url` when that folder has an `index.md`.

### `_layouts/custom.html`

This is the shared page wrapper used by default. It currently adds:

- Breadcrumb navigation via `_includes/page-nav.html`.
- Automatic table of contents via `_includes/table-of-contents.html`.
- Page content through `{% raw %}{{ content }}{% endraw %}`.
- Previous/next links via `_includes/prev-next.html`.
- A second breadcrumb at the bottom.
- The site footer via `_includes/site-footer.html`.
- Table-of-contents JavaScript.
- MathJax configuration and MathJax.
- Mermaid rendering support.

Edit this file only when changing behavior that should apply to many or all pages.

### `_includes/page-nav.html`

This renders breadcrumb navigation:

```text
Home / Section / Subsection / Subsubsection
```

It reads page variables such as:

- `section_title`
- `section_url`
- `subsection_title`
- `subsection_url`
- `subsubsection_title`
- `subsubsection_url`

Most of these values should come from `_config.yml` defaults.

### `_includes/table-of-contents.html`

This adds the empty TOC container. The links are generated in the browser by `assets/js/page-toc.js`.

The TOC is enabled by default. Disable it on a specific page with:

```yml
---
toc: false
---
```

Change the minimum number of headings needed before a TOC appears:

```yml
---
toc_min_headings: 5
---
```

The site-wide fallback is `toc_min_headings` in `_config.yml`.
> **Note for local deployment, it is recommned to change all toc to false to speed up local rendering.**
### `assets/js/page-toc.js`

This script scans page headings and fills the TOC.

It currently uses:

- `h2` and `h3` headings.
- A minimum heading count before showing the TOC.
- Active-link highlighting while scrolling.

If the TOC feels too long, reduce the number of headings in the page or adjust the script to collect only `h2`.

### `_includes/prev-next.html`

This renders previous/next links at the bottom of pages.

By default, it reads `_data/reading_paths.yml`. A page can override the automatic result with front matter:

```yml
---
nav_prev:
  title: Previous Page
  url: /some/page.html
nav_next:
  title: Next Page
  url: /another/page.html
---
```

If a page is not listed in `_data/reading_paths.yml` and has no `nav_prev` or `nav_next`, no previous/next block appears.

### `_data/reading_paths.yml`

This is the central reading-order file.

Use it when a page should be part of a guided path. Each entry needs a title and a final site URL:

```yml
- title: Example Reading Path
  pages:
    - title: Section Overview
      url: /07_New_Section/
    - title: First Topic
      url: /07_New_Section/first_topic.html
```

Use directory URLs for index pages and `.html` URLs for normal Markdown pages.

### `_includes/site-footer.html`

This renders the footer.

Footer links are controlled from `_config.yml`:

```yml
footer_links:
  - title: Home
    url: /
  - title: Diabatisation
    url: /06_diabatisation_deeperdive/
```

The footer shows `page.last_updated` if a page provides it:

```yml
---
last_updated: 2026-05-12
---
```

Otherwise, it shows the build date.

### `assets/css/style.scss`

This is the main custom stylesheet.

The top of the file must keep this front matter:

```scss
---
---
@import "{% raw %}{{ site.theme }}{% endraw %}";
```

The front matter tells Jekyll to process the file. The import loads the Cayman theme styles before local overrides.

This file currently controls:

- Breadcrumb styling.
- Mobile readability.
- Scroll behavior for code, tables, MathJax, and images.
- TOC placement and styling.
- Previous/next link styling.
- Footer styling.

### `assets/js/mathjax-config.js`

This file holds MathJax configuration and macros.

Add shared macros here when deployed pages need to understand commands such as:

```js
pdv: ['\\frac{\\partial #1}{\\partial #2}', 2]
```

Local editor preview tools may have their own MathJax config. GitHub Pages cannot read local editor config files, so important macros should live here too.

## Adding A New Page

1. Create the Markdown file in the correct folder.
2. Add front matter with at least a title.
3. Link it from the nearest `index.md`.
4. If it belongs in a guided sequence, add it to `_data/reading_paths.yml`.
5. If it creates a new folder, consider adding an `index.md` for that folder.
6. If it creates a new section or subsection, add `_config.yml` defaults for breadcrumbs.
7. Run `bundle exec jekyll serve` and click through the links.

Example page:

```md
---
title: New Topic
---

## Overview

Short orientation paragraph.

## Main Idea

Content here.
```

## Adding A New Folder

Every folder that users can click into should have an `index.md`.

Good:

```text
07_New_Section/index.md
07_New_Section/derivations/example_derivation.md
```

Then add or update breadcrumbs:

```yml
  - scope:
      path: "07_New_Section"
    values:
      section_title: "New Section"
      section_url: "/07_New_Section/"
  - scope:
      path: "07_New_Section/derivations"
    values:
      section_title: "New Section"
      section_url: "/07_New_Section/"
      subsection_title: "Derivations"
```

If the subsection has its own index:

```yml
      subsection_url: "/07_New_Section/derivations/"
```

## Linking Between Pages

For normal Markdown links, both `.md` source links and final `.html` links can work in many cases.

For reader-facing navigation, prefer:

- Directory URLs for index pages.
- `.html` URLs for generated pages in `_data/reading_paths.yml`.
- Exact folder casing.

Examples:

```md
[Diabatisation deep dive](../06_diabatisation_deeperdive/)
[Born-Huang expansion](../02_Born_Oppenheimer_and_Nonadiabaticity/beginer/01_bornhuang_expansion.md)
```

Inside Mermaid diagrams, use final website paths because Mermaid links are not rewritten by Jekyll:

```md
click BO "../02_Born_Oppenheimer_and_Nonadiabaticity/beginer/01_bornhuang_expansion.html" "View page"
```

## Common Problems

### Raw Markdown Appears In The Browser

Usually this means the browser is visiting a raw `.md` path instead of the generated page.

Prefer:

```text
/06_diabatisation_deeperdive/
```

or:

```text
/06_diabatisation_deeperdive/intermediates/example.html
```

instead of:

```text
/06_diabatisation_deeperdive/index.md
```

### Directory Listing Appears

The folder probably has no `index.md`, or the link points to a folder name with the wrong casing.

Fix by adding an `index.md` or correcting the link.

### Breadcrumb Link Goes Somewhere Odd

Check `_config.yml`. A breadcrumb URL should point to a folder that has an index page.

### GitHub Pages Fails But Windows Preview Works

Check path casing. GitHub Pages runs on Linux, where:

```text
06_Diabatisation_Deeperdive
```

and:

```text
06_diabatisation_deeperdive
```

are different paths.

Use the exact tracked folder name.

## What Not To Edit

- Do not manually edit or commit `_site/`.
- Do not add breadcrumbs manually to every Markdown file.
- Do not duplicate footer links in page bodies.
- Do not hand-code previous/next links into every page if the page belongs in `_data/reading_paths.yml`.
- Do not add a `section_url` or `subsection_url` unless the target folder has an `index.md`.

## Related Guides

- [Content authoring guide](content_authoring_guide.md)
- [HTML and Liquid template guide](html_liquid_template_guide.md)
- [JavaScript guide](javascript_guide.md)
- [Code writing template](code_explanation_template.md)
