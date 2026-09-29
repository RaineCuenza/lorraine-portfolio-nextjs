# Lorraine Portfolio — React + Next.js Version

This project is the React/Next.js conversion of the original PHP portfolio. The visual design, page structure, purple/mint palette, typography, responsive behavior, gallery, and reveal effects were kept as close as possible to the PHP version.

## Stack

- Next.js 16
- React 19
- TypeScript
- CSS (the original design stylesheet was preserved)
- App Router

## Run locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Pages

- `/` — Home
- `/about` — About
- `/work` — Selected work
- `/leadership` — MDO and SIT journey
- `/journey` — Miss DWCC and Buwan ng Wika journey
- `/gallery` — Filterable gallery + lightbox
- `/contact` — Contact page

## First things to edit

1. Open `data/content.ts` and replace the placeholder email/social links.
2. Replace files in `public/assets/images/` with your real photos and screenshots. Keeping the same filenames lets you replace images without changing code.
3. Edit page copy inside `app/about/page.tsx`, `app/leadership/page.tsx`, and `app/journey/page.tsx`.
4. Add or remove projects and gallery items in `data/content.ts`.

## Contact form

The starter API route at `app/api/contact/route.ts` validates the form but does not send email yet. Connect it to Resend, Nodemailer, Formspree, or your preferred service when you are ready.

## Design preservation

The original PHP project's `style.css` was carried into `app/globals.css`, and the React markup uses the same CSS class names and layout structure. This keeps the design visually consistent while replacing PHP templates with reusable React components and Next.js routes.
