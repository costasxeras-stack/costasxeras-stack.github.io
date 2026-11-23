# costasxeras-stack.github.io

**My portfolio site, served free by GitHub Pages at https://kostasxeras.com.**

**Current version:** 2.19.2

Plain HTML and CSS, no build step. The custom domain is set by the `CNAME` file, and https://costasxeras-stack.github.io redirects there.

## Files

- `index.html` is the homepage: hero, about, what I help with, capabilities, experience, course, work and contact.
- `projects/` has one page per project, written from each repo's case study.
- `assets/site.css` holds all styles. `assets/site.js` adds the mobile menu, the photo tilt and the scroll fade-in. The site works without it.
- `assets/img/` holds the portrait, logos and project screenshots, as WebP. `assets/img/thumbs/` holds the small card screenshots.
- `assets/video/` holds short demo videos (MP4, no sound).
- `tools/` only holds forwarding pages from the old small tools to the apps they became.

## How to add a project

1. Copy one `<article class="work">` block in `index.html` and edit the problem, solution, both button links, the thumbnail and the `data-cat` filter words (ai, search, data, research, tools).
2. Copy a page in `projects/`, rename it, and edit the text.
3. Update the "Previous" and "Next" links at the bottom of the neighbouring project pages.
