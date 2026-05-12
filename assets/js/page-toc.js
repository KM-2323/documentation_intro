document.addEventListener("DOMContentLoaded", function () {
  const toc = document.querySelector(".page-toc");
  const tocList = document.querySelector("#page-toc-list");

  if (!toc || !tocList) {
    return;
  }

  const minHeadings = Number.parseInt(toc.dataset.minHeadings || "3", 10);
  const headings = Array.from(
    document.querySelectorAll(".main-content h2, .main-content h3")
  ).filter(function (heading) {
    return !heading.closest(".page-toc, .prev-next, .site-footer-custom, .page-breadcrumb");
  });

  if (headings.length < minHeadings) {
    toc.remove();
    return;
  }

  headings.forEach(function (heading) {
    if (!heading.id) {
      heading.id = heading.textContent
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    }

    const link = document.createElement("a");
    link.href = "#" + heading.id;
    link.textContent = heading.textContent;
    link.className = "page-toc__link page-toc__link--" + heading.tagName.toLowerCase();
    tocList.appendChild(link);
  });

  toc.classList.add("is-ready");

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const linksById = new Map(
    Array.from(tocList.querySelectorAll("a")).map(function (link) {
      return [link.getAttribute("href").slice(1), link];
    })
  );

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        const link = linksById.get(entry.target.id);
        if (!link) {
          return;
        }

        if (entry.isIntersecting) {
          tocList.querySelectorAll(".is-active").forEach(function (activeLink) {
            activeLink.classList.remove("is-active");
          });
          link.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
  );

  headings.forEach(function (heading) {
    observer.observe(heading);
  });
});
