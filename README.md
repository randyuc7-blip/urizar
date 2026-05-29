# Lead Capture System

Simple static lead capture system built for fast client delivery.

This project keeps the workflow intentionally small:

- `index.html` handles page structure
- `styles.css` handles layout and styling
- `script.js` handles interactivity and content rendering
- `config.js` holds business-specific content and settings

The goal is long-term reuse across multiple client projects without introducing frameworks, build tools, or unnecessary setup.

## Project Goals

- Fast to customize
- Easy to deploy with GitHub + Netlify
- Beginner-friendly to maintain
- Reusable for multiple local business clients

## Current Workflow

1. Update `config.js` with the client's business details, offer, contact info, and page content.
2. Adjust `index.html` only when the page structure needs to change.
3. Update `styles.css` when the visual system needs refinement.
4. Update `script.js` only for behavior or rendering logic.
5. Add branded assets to `assets/`.
6. Deploy the folder directly to Netlify.

## Project Structure

```text
/
├── index.html
├── styles.css
├── script.js
├── config.js
├── README.md
├── SEO_SCALING_STRATEGY.md
├── SEO_SYSTEM_RULES.md
├── DESIGN_SYSTEM.md
├── services/
├── faq/
├── resources/
├── case-studies/
├── industries/
├── texas/
├── docs/
│   ├── README.md
│   ├── CLIENT_CUSTOMIZATION.md
│   └── DEPLOYMENT_CHECKLIST.md
└── assets/
    ├── README.md
    ├── images/
    ├── icons/
    └── files/
```

## What Goes Where

### Core app files

- `index.html`: Page sections, form markup, semantic structure
- `styles.css`: Global styles, section layouts, responsive rules, component styles
- `script.js`: DOM rendering, form behavior, preview tools, visual interactions
- `config.js`: Reusable business content, labels, links, and settings

### System docs

- `README.md`: Project overview and operating guide
- `SEO_SYSTEM_RULES.md`: Reusable SEO standards for this system
- `DESIGN_SYSTEM.md`: Design consistency rules for future edits

### Support folders

- `docs/`: Short operational docs for deployment, editing, and reuse
- `assets/images/`: Client photos, gallery images, thumbnails, OG images
- `assets/icons/`: Logos, favicons, SVG marks, social icons
- `assets/files/`: PDFs, lead magnets, brochures, downloadable resources

## Client Reuse Process

When reusing this system for a new client:

1. Duplicate the project folder.
2. Replace the content inside `config.js`.
3. Swap branded assets in `assets/`.
4. Review copy against `SEO_SYSTEM_RULES.md`.
5. Review styling against `DESIGN_SYSTEM.md`.
6. Deploy to a new GitHub repo and connect it to Netlify.

## Deployment

This project is designed for static deployment.

- GitHub stores the source
- Netlify serves the site
- Netlify Forms can capture leads from the existing contact form

See `docs/DEPLOYMENT_CHECKLIST.md` for the simple deployment flow.

## Why This Structure Works

- Keeps the app files obvious for beginners
- Separates business rules from implementation
- Makes future client duplication faster
- Gives AI tools clear places to read and update content, design rules, and deployment notes
