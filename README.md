# Crespidia Coffee

Neighbourhood coffee bakery website for **Crespidia** (Crystal Palace / Anerley).

## Stack

- Next.js 15 (App Router)
- Tailwind CSS 4
- TypeScript

## Design direction

Inspired by [La Croissanterie — Espace fidélité](https://www.lacroissanterie.fr/votre-espace-fidelite/presentation/): warm orange, cream ground, clear loyalty “how it works”, friendly bakery energy — adapted for a family independent cafe.

See `RESOURCES.md` for colours, local references, and content sources.

## Pages

- `/` — Home
- `/menu` — Breakfast, bakery, drinks
- `/visit` — Two locations + hours
- `/about` — Our story
- `/regulars` — Regulars club (loyalty)
- `/cookies` — Cookie policy + banner consent

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```


## Live site

**Preview (Cloudflare Tunnel):** https://connections-tool-mean-brothers.trycloudflare.com/

### Permanent GitHub Pages (one-time setup)

1. Open https://github.com/aa89976566/Crespidia-coffee/settings/pages
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Branch: **`gh-pages`** / folder **`/` (root)** → Save
4. Site URL will be: https://aa89976566.github.io/Crespidia-coffee/
