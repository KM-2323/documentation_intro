---
title: JavaScript Guide
---

# JavaScript Guide

Use this guide when reading or editing the shared JavaScript used by the site. It covers the two main files in `assets/js/` and the small inline Mermaid script in `_layouts/custom.html`.

The more complex visual script in `02_Born_Oppenheimer_and_Nonadiabaticity/visuals/different_conical_intersections.md` is intentionally left out for now.

## Where JavaScript Lives

| File or location | Purpose | Loaded by |
| --- | --- | --- |
| `assets/js/page-toc.js` | Builds the "On this page" table of contents from page headings. | `_layouts/custom.html` |
| `assets/js/mathjax-config.js` | Defines MathJax delimiters and shared math macros. | `_layouts/custom.html` |
| Inline `<script type="module">` in `_layouts/custom.html` | Loads Mermaid and converts Mermaid code fences into renderable diagram blocks. | Already inside the layout |

The load order matters. `mathjax-config.js` must appear before the external MathJax library so MathJax can read `window.MathJax` when it starts.

## Basic JavaScript Shape

A normal variable assignment looks like this:

```js
const name = value;
```

The parts are:

| Part | Meaning |
| --- | --- |
| `const` | Create a variable that will not be reassigned. |
| `name` | The variable name. |
| `=` | Put the value on the right into the variable on the left. |
| `value` | A string, number, object, array, HTML element, or other JavaScript value. |
| `;` | Ends the statement. |

A function callback looks like this:

```js
function (heading) {
  return heading.id;
}
```

This means: "when someone calls this function, receive a value named `heading`, then run the code inside the braces."

## Dot Syntax: `.something`

JavaScript uses dots to reach inside an object:

```js
heading.id
```

In plain English, this code says: "from the object stored in `heading`, read its `id` property."

In `page-toc.js`, many objects are HTML elements from the browser's DOM. DOM means "Document Object Model": the browser's JavaScript representation of the HTML page.

For example:

```js
const headings = Array.from(
  document.querySelectorAll(".main-content h2, .main-content h3")
);
```

In plain English, this code says: "ask the browser for all `h2` and `h3` headings inside `.main-content`, then turn that result into a normal JavaScript array."

After that, each `heading` in the loop is one real heading element, like:

```html
<h2 id="main-idea">Main Idea</h2>
```

So:

| JavaScript | Built in or custom? | What it means |
| --- | --- | --- |
| `heading` | Custom variable name in our callback | One heading element from the page. |
| `heading.id` | Built-in DOM property | The heading's `id=""` value, such as `main-idea`. |
| `heading.textContent` | Built-in DOM property | The visible text inside the heading, such as `Main Idea`. |
| `heading.tagName` | Built-in DOM property | The element name, such as `H2` or `H3`. |
| `heading.closest(...)` | Built-in DOM method | Looks upward through parent elements to find a matching selector. |
| `link` | Custom variable name we create | A new `<a>` element made by `document.createElement("a")`. |
| `link.href` | Built-in DOM property on links | The link destination, equivalent to an HTML `href=""` attribute. |
| `link.className` | Built-in DOM property | The element's full `class=""` text. |
| `toc.dataset.minHeadings` | Built-in DOM `dataset` property | Reads `data-min-headings` from HTML. Dash names become camelCase. |
| `toc.classList.add(...)` | Built-in DOM method | Adds a class without replacing the other classes. |
| `toc.remove()` | Built-in DOM method | Removes the element from the page. |
| `tocList.appendChild(link)` | Built-in DOM method | Puts the new link inside the TOC list. |

The words before the dot, such as `heading`, `link`, `toc`, and `tocList`, are variable names chosen in this script. The words after the dot, such as `id`, `href`, `dataset`, and `classList`, are usually built-in browser properties or methods because those variables hold DOM elements.

## Why `link.href = "#" + heading.id` Is Needed

The TOC needs each link to jump to a heading on the same page. In HTML, same-page jump links use a hash:

```html
<a href="#main-idea">Main Idea</a>
```

In plain English, this code says: "when clicked, jump to the element on this page whose `id` is `main-idea`."

The matching heading looks like this:

```html
<h2 id="main-idea">Main Idea</h2>
```

`page-toc.js` builds that link in JavaScript:

```js
link.href = "#" + heading.id;
```

In plain English, this code says: "set the new link's destination to a hash mark followed by this heading's id."

If `heading.id` is `main-idea`, the result is:

```html
<a href="#main-idea">Main Idea</a>
```

The `#` matters. Without it, `href="main-idea"` would be treated like a relative page or file path. With it, `href="#main-idea"` means "stay on this page and scroll to this id."

Some Markdown headings already get ids during the Jekyll build. For headings without ids, the script creates one:

```js
heading.id = heading.textContent
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");
```

In plain English, this code says: "take the heading text, trim outside spaces, make it lowercase, turn runs of non-letter/non-number characters into hyphens, and remove hyphens from the start or end."

So `Main Idea!` becomes `main-idea`.

## Comments And Docstrings

JavaScript does not have Python-style docstrings, but it often uses block comments as file or function documentation:

```js
/**
 * Build the optional "On this page" table of contents.
 */
```

Use line comments for local explanation:

```js
// Reveal the TOC only after links have been created.
toc.classList.add("is-ready");
```

Prefer comments that explain why a block exists, what HTML or SCSS it connects to, or what fallback behaviour it provides.

## Built-In JavaScript Used So Far

These names are built into the browser or standard JavaScript. They are not custom site code.

| Name | Type | What it does here |
| --- | --- | --- |
| `window` | Browser global object | Holds `window.MathJax` so the MathJax library can read configuration. |
| `document` | Browser page object | Finds and creates HTML elements. |
| `document.addEventListener` | Browser method | Runs code after `DOMContentLoaded`, when page HTML is ready. |
| `document.querySelector` | Browser method | Finds the first matching HTML element. |
| `document.querySelectorAll` | Browser method | Finds all matching HTML elements. |
| `document.createElement` | Browser method | Creates a new HTML element, such as a TOC link. |
| DOM element properties such as `.id`, `.href`, `.textContent`, `.tagName` | Browser properties | Read or change parts of a real HTML element. |
| DOM element methods such as `.appendChild()`, `.remove()`, `.closest()` | Browser methods | Move, remove, or search from real HTML elements. |
| `.classList.add()` / `.classList.remove()` | Browser methods | Add or remove one class while keeping other classes intact. |
| `.dataset` | Browser property | Reads `data-*` attributes from HTML. |
| `Array.from` | JavaScript method | Converts browser element lists into arrays. |
| `.filter()` | Array method | Keeps only headings that pass a test. |
| `.forEach()` | Array method | Runs a function once per item. |
| `.map()` | Array method | Converts one array into another. |
| `Map` | JavaScript collection | Stores heading id to TOC link pairs. |
| `Number.parseInt` | JavaScript function | Converts `data-min-headings` text into a number. |
| `IntersectionObserver` | Browser API | Watches which heading is currently near the reading area. |
| `return` | JavaScript keyword | Leaves a function early or gives a value back. |
| `if` | JavaScript keyword | Runs code only when a condition is true. |
| `const` | JavaScript keyword | Creates a variable that is not reassigned. |
| `import` | JavaScript module keyword | Loads Mermaid from the CDN in the inline layout script. |

## Site-Specific Hooks Used By JavaScript

These names are custom to this site. The browser does not know what they mean until our HTML, SCSS, or JavaScript gives them meaning.

| Hook | Created by | Used by | Effect |
| --- | --- | --- | --- |
| `.page-toc` | `_includes/table-of-contents.html` | `page-toc.js`, `style.scss` | Finds, hides, removes, or reveals the TOC container. |
| `#page-toc-list` | `_includes/table-of-contents.html` | `page-toc.js` | Receives generated TOC links. |
| `data-min-headings` | `_includes/table-of-contents.html` | `page-toc.js` | Tells JS how many headings are needed before a TOC should appear. |
| `.main-content h2, .main-content h3` | Cayman theme and Markdown output | `page-toc.js` | Selects headings that become TOC entries. |
| `.page-toc__link` | `page-toc.js` | `style.scss` | Styles generated TOC links. |
| `.page-toc__link--h2` | `page-toc.js` | Future styling hook | Marks links generated from h2 headings. |
| `.page-toc__link--h3` | `page-toc.js` | `style.scss` | Indents links generated from h3 headings. |
| `.is-ready` | `page-toc.js` | `style.scss` | Reveals and styles the TOC after links exist. |
| `.is-active` | `page-toc.js` | `style.scss` | Highlights the active TOC link. |
| `.language-mermaid` | Markdown/Kramdown | Inline Mermaid script | Finds Mermaid code fences before conversion. |
| `.mermaid` | Inline Mermaid script | Mermaid library and `style.scss` | Tells Mermaid which blocks to render. |
| `window.MathJax` | `mathjax-config.js` | External MathJax library | Supplies delimiters and macros. |

## How `page-toc.js` Works

The table-of-contents script is a browser-side enhancement. The page still works without it, but the automatic TOC will not appear.

Simplified flow:

1. Wait for `DOMContentLoaded`.
2. Find `.page-toc` and `#page-toc-list`.
3. Stop if either element is missing.
4. Read `data-min-headings`.
5. Collect `.main-content h2` and `.main-content h3`.
6. Remove the TOC if there are too few headings.
7. Give headings an `id` if they do not already have one.
8. Create one `<a>` link for each heading.
9. Add `.is-ready` so SCSS reveals the TOC.
10. Use `IntersectionObserver` to add `.is-active` to the current heading link.

The key connection is:

{% raw %}
```html
<aside class="page-toc" data-min-headings="{{ page.toc_min_headings | default: site.toc_min_headings | default: 3 }}">
  <nav id="page-toc-list" class="page-toc__list"></nav>
</aside>
```
{% endraw %}

Liquid writes the `data-min-headings` value. JavaScript reads it. SCSS changes the display when JavaScript adds `.is-ready`.

## How `mathjax-config.js` Works

This file does not directly render equations. It creates a configuration object:

```js
window.MathJax = {
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
    tags: "ams",
    macros: {
      mat: ["\\mathbf{#1}", 1]
    }
  }
};
```

Then the external MathJax script reads that object and renders page equations.

Macro pattern:

```js
macroName: ["latex replacement", numberOfArguments]
```

Example:

```js
pdv: ["\\frac{\\partial #1}{\\partial #2}", 2]
```

That lets authors write:

```tex
\pdv{f}{x}
```

MathJax expands it as:

```tex
\frac{\partial f}{\partial x}
```

Macros without arguments are written as one-item arrays:

```js
H: ["\\underline{\\Hmat}"]
```

## How The Inline Mermaid Script Works

Markdown Mermaid fences begin like this:

````md
```mermaid
graph TD
    A --> B
```
````

Kramdown turns that into code-block HTML. Mermaid wants a renderable block like:

```html
<div class="mermaid">graph TD...</div>
```

The inline script in `_layouts/custom.html` bridges that gap:

1. Import Mermaid from the CDN.
2. Configure Mermaid with `mermaid.initialize(...)`.
3. Wait for `DOMContentLoaded`.
4. Find `code.language-mermaid` and `pre.mermaid` blocks.
5. Create a new `<div>`.
6. Give it `className = "mermaid"`.
7. Copy the diagram text into the new div.
8. Replace the old code block with the new Mermaid div.

The script is inline because it is tightly coupled to the layout and external Mermaid import.

## Five Walkthrough Levels

### Level 1: Read A Constant

```js
const toc = document.querySelector(".page-toc");
```

In plain English, this code says: "ask the browser for the first element with class `page-toc`, and store that element in a variable named `toc`."

Connected pieces:

| Layer | Role |
| --- | --- |
| HTML | `_includes/table-of-contents.html` creates `.page-toc`. |
| JavaScript | `querySelector` finds it. |
| SCSS | `.page-toc` starts hidden. |

### Level 2: Stop Safely When HTML Is Missing

```js
if (!toc || !tocList) {
  return;
}
```

In plain English, this code says: "if either the TOC wrapper or the TOC list was not found, stop running this script now."

This prevents errors on pages without a TOC include. `!toc` means "if `toc` was not found".

Connected pieces:

| Layer | Role |
| --- | --- |
| Page front matter | `toc: false` can remove the TOC include. |
| JavaScript | The guard lets the script exit quietly. |

### Level 3: Turn Headings Into Links

```js
const link = document.createElement("a");
link.href = "#" + heading.id;
link.textContent = heading.textContent;
tocList.appendChild(link);
```

In plain English, this code says: "make a new link, point it at this heading, copy the heading text into the link, and place the link inside the TOC."

Connected pieces:

| Layer | Role |
| --- | --- |
| Markdown | Page headings become `h2` and `h3` elements. |
| JavaScript | Creates matching `<a>` elements. |
| Browser | Clicking `#heading-id` jumps to that heading. |

### Level 4: Let JavaScript Trigger Styling

```js
toc.classList.add("is-ready");
```

In plain English, this code says: "add the class `is-ready` to the TOC element."

The script does not set colours, borders, or spacing directly. It adds a class. SCSS handles the display:

```scss
.page-toc.is-ready {
    display: block;
}
```

In plain English, this code says: "when an element has both `page-toc` and `is-ready`, show it as a block on the page."

Connected pieces:

| Layer | Role |
| --- | --- |
| JavaScript | Adds `.is-ready` only after links exist. |
| SCSS | Shows and styles the TOC box. |
| Reader experience | Empty TOC boxes do not flash on short pages. |

### Level 5: Use Configuration Before An External Library Loads

{% raw %}
```html
<script src="{{ '/assets/js/mathjax-config.js' | relative_url }}"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```
{% endraw %}

In plain English, this code says: "load the local MathJax settings first, then load the external MathJax library."

The local config script runs first. It defines `window.MathJax`. The external MathJax library loads second and reads that configuration.

Connected pieces:

| Layer | Role |
| --- | --- |
| Markdown | Authors write math such as `$\pdv{f}{x}$`. |
| Local JavaScript | `mathjax-config.js` defines the `\pdv` macro. |
| External JavaScript | MathJax renders the equation. |
| Generated HTML | MathJax creates `mjx-container` elements. |
| SCSS | `.main-content mjx-container` prevents wide equations from overflowing. |

## Editing Checklist

- Keep shared scripts in `assets/js/` when they are used by many pages.
- Keep page-specific visual scripts close to the page they belong to.
- Add comments for HTML hooks, SCSS hooks, fallback behaviour, and external-library assumptions.
- Use `const` by default when a variable is not reassigned.
- Prefer adding or removing classes over writing lots of inline styles in JavaScript.
- When adding a MathJax macro, also add it to `assets/js/mathjax-config.js` and document important notation in `Symbols_and_notations.md`.
- After changing JavaScript loaded by the layout, run `bundle exec jekyll build` and check at least one page with a TOC and one page with math.
