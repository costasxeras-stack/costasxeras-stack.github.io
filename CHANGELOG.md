# Changelog

## 2.3.0 (20 November 2026)

### Changed
- Zero Results Fixer page and card now show the first live run with Claude: 46 of 60 searches got a tested fix, and the AI fixes scored lower than a simple fix without AI (nDCG@10 0.566 against 0.642).

## 2.2.0 (20 November 2026)

### Added
- Two new projects with their own pages: Zero Results Fixer (n8n) and Confidence Gate Lab.
- A step-by-step workflow diagram on the Zero Results Fixer page, plus screenshots of the workflow in n8n and of the review form.

### Changed
- Stats strip: 6 working products and 4 live demos.

### Fixed
- Screenshots on project pages were stretched, because images kept their fixed height when the page scaled them down.

## 2.1.0 (20 November 2026)

### Added
- Full experience from my CV: titles, dates and results at Genuine Parts Company (NAPA), Stibo Systems, Kimberly-Clark, Cisco and Bidroom, plus earlier roles.
- Email in the contact section, with an "Email me" button.
- Certificates and languages in the About section.

### Changed
- Stats strip: "4 Fortune 200/500 companies" replaced by "7+ years shipping AI, ML and data products". Stibo Systems is not a Fortune 500 company, so the old line was not accurate.
- About text, capabilities and the tools list updated to match the CV (Learning to Rank, A/B testing, AI evaluation, agentic workflows, Elasticsearch).

## 2.0.0 (20 November 2026)

### Added
- One page per project: Search Relevance Lab, Review Radar, Garage Quote Agent and KostasTravel, each written from the repo's case study.
- Portrait in the hero, with the head breaking out of a circle and a slight tilt that follows the mouse on desktop.
- Stats strip, "What I help with", a scrolling list of tools, capabilities, an experience section with expandable roles, and a contact section.
- Mobile menu.

### Changed
- New dark design, laid out after a portfolio site I liked. Shared styles moved to `assets/site.css`.
- Work list now links to the project pages instead of straight to GitHub.
- KostasTravel version updated to v1.4.2.

### Fixed
- Custom domain restored (`CNAME` file), so kostasxeras.com loads the site again.

## 1.x (16 November 2026)
- First portfolio site, a single `index.html`.
