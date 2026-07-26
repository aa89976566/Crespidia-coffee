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

**Published:** https://aa89976566.github.io/Crespidia-coffee/

GitHub Pages is enabled from the `gh-pages` branch (`status: built`).

### Republish after content changes

```bash
GITHUB_PAGES=true npm run build
# then push the contents of ./out to the gh-pages branch
```

Or merge to `main` / push the feature branch to trigger `.github/workflows/deploy-pages.yml` (GitHub Actions Pages).
