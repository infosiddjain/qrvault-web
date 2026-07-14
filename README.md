# QR Vault — Web

Next.js 14 (App Router) + TypeScript + Tailwind CSS project with the marketing
and legal pages for QR Vault.

## Pages

- `/` — Home
- `/about-us` — About us
- `/our-apps` — Our apps
- `/contact-us` — Contact us (with working form UI)
- `/privacy-policy` — Privacy policy
- `/terms-conditions` — Terms & conditions

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx          # Root layout (Navbar + Footer wrapper)
  page.tsx             # Home page
  about-us/page.tsx
  our-apps/page.tsx
  contact-us/page.tsx
  privacy-policy/page.tsx
  terms-conditions/page.tsx
  globals.css
components/
  Navbar.tsx
  Footer.tsx
  PageHero.tsx
  ContactForm.tsx
```

## Notes

- The contact form in `components/ContactForm.tsx` currently only simulates
  submission on the client. Wire it up to a real backend (an API route,
  Formspree, Resend, etc.) before going to production.
- Brand colors live in `tailwind.config.ts` under `theme.extend.colors`.
