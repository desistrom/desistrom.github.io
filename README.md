# Portfolio Website

Static portfolio website for Moh Puji Junaedi.

## Overview

This repository contains a simple single-page style portfolio site built with:

- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap 4
- Typed.js

The site loads page sections dynamically into `index.html` using AJAX.

## Pages

- `index.html`: main shell, navbar, footer, asset loading
- `home.html`: hero and profile summary
- `about.html`: profile summary, work experience, education
- `skill.html`: technical skills and selected projects overview
- `project.html`: selected project catalog
- `contact.html`: contact information and resume link

## Assets

- `css/styles.css`: custom styling
- `js/main.js`: AJAX navigation and typed text initialization
- `js/jquery-2.2.4.min.js`: jQuery dependency
- `js/typed.js`: typing animation library
- `img/`: static images and icons
- `resume.pdf`: source resume used for portfolio content

## Run Locally

Do not open `index.html` directly with `file://` because local assets and AJAX-loaded HTML partials may fail to load.

Run a local server from the project root instead:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Updating Content

Main portfolio content is based on `resume.pdf`.

Common update points:

- Update title, navbar, footer, and meta tags in `index.html`
- Update hero section in `home.html`
- Update profile and work history in `about.html`
- Update skills in `skill.html`
- Update project list in `project.html`
- Update contact details in `contact.html`

## Notes

- Navigation is handled in `js/main.js` using delegated click handlers.
- The typed headline on the home page is initialized after AJAX content is rendered.
- Relative paths are used so the site works both locally and when deployed as a static site.

## Deployment

This repository is structured as a static website and can be deployed to GitHub Pages or any static hosting provider.
