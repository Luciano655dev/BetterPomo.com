# 🌐 BetterPomo — Marketing Site

The public marketing site for [BetterPomo](https://github.com/luciano655dev), served
at **betterpomo.com**. A fast, static Next.js site that introduces the product,
collects waitlist signups, and hosts the legal pages.

Built by [Luciano Menezes](https://github.com/luciano655dev).

---

## What it is (and isn't)

This is a **static marketing site** — deliberately minimal. It has:

- No authentication, no Supabase client, no SWR.
- A single public API call: `POST /api/wishlist` (waitlist signup) to the
  [BetterPomo API](../betterpomo-api).
- The canonical legal pages: `/privacy`, `/terms`, `/license`.
- All the SEO (the product web app is `noindex`).

It shares the [web app](../betterpomo-webapp)'s design system — the same design
tokens, Plus Jakarta Sans typeface, and Base UI primitives — so the two stay
visually in sync.

---

## Tech stack

| Concern | Technology |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| Styling | Tailwind CSS v4 |
| UI primitives | Base UI + shadcn |
| Icons | Lucide React |
| Analytics | PostHog |
| Language | TypeScript |

---

## Getting started

### 1. Install

```bash
npm install
```

### 2. Environment

```env
NEXT_PUBLIC_API_URL=http://localhost:4000      # BetterPomo API (for waitlist)
NEXT_PUBLIC_POSTHOG_KEY=your-posthog-key        # optional
```

### 3. Run

```bash
npm run dev     # → http://localhost:3001
npm run build
npm start       # → :3001
```

> **Note:** this site runs on **port 3001** so it can run alongside the web app
> (port 3000) locally.

---

## Structure

```
app/
  page.tsx              landing page
  (legal)/
    privacy/            privacy policy
    terms/              terms of service
    license/            license summary
lib/api.ts              the lone POST /api/wishlist call
```

---

## License

Licensed under the **BetterPomo Non-Commercial License** — see [LICENSE](./LICENSE).
Free to read, learn from, and modify **with credit**; **no commercial use**.
Contact [Luciano Menezes](https://github.com/luciano655dev) for a commercial license.
