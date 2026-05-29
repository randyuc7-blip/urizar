# Client Customization

Use this checklist when turning the base system into a client-specific version.

## Update First

Start in `config.js` and replace:

- business name
- headline and subheadline
- CTA labels
- phone, SMS, and email
- pain points
- solution bullets
- steps
- gallery items
- footer links and business details

For mobile lead capture, update `mobileLeadCapture` in `config.js`.
Add the real number to `phoneDisplay` and `phoneHref`, then set `enabled` to `true`.

## Update Second

Move into `index.html` and replace:

- trust strip items
- positioning cards
- testimonials

Keep these trust sections in HTML so search engines, AI summaries, and no-JavaScript visitors can read them immediately.

## Update Third

Move into `assets/` and replace:

- logos
- icons
- brand images
- downloadable PDFs or brochures

## Update Fourth

Adjust `styles.css` only when needed for:

- color direction
- spacing
- typography changes
- section polish

Avoid rewriting the structure unless the client needs a different sales flow.

## Final Review

Before launch:

1. Check mobile layout.
2. Check contact details.
3. Check phone and SMS links from a mobile device if `mobileLeadCapture.enabled` is turned on.
4. Check button labels and links.
5. Check form submission.
6. Check SEO against `SEO_SYSTEM_RULES.md`.
7. Check visual consistency against `DESIGN_SYSTEM.md`.
