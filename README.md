# Vito Taxi by Charbel

**Your comfort, our priority.** The website for Vito Taxi by Charbel, a 24/7 Mercedes-Benz Vito taxi
based in Antelias, Lebanon.

Live address: **https://vitotaxi.cierp.uk/** · Arabic: **/ar/**

## Stack

The site is built with the same toolchain Atoms (mgx.dev) uses to generate websites:

| | |
|---|---|
| **React 19 + TypeScript** | components and pages |
| **Vite** | dev server and build |
| **Tailwind CSS v4** | styling, with the brand theme in `web/src/index.css` |
| **shadcn/ui** (Radix) | Button, Input, Textarea, Accordion, Sheet, ToggleGroup, Label… in `web/src/components/ui` |
| **Framer Motion** | reveals, split-word headlines, parallax, the pinned horizontal gallery, the WhatsApp bubble |
| **Lenis** | smooth scrolling on desktop |
| **lucide-react** | icons |

Every page is **pre-rendered to static HTML at build time** (`web/scripts/prerender.mjs`). Google gets complete
pages with titles, structured data and every word of the FAQ. Visitors get an instant first paint, and
React then takes over in the browser.

## Pages

- **Home, in English (`/`) and Arabic (`/ar/`):**
  - cinematic hero with a glass "Where to?" booking card
  - bento highlights, photo service cards and the Mercedes Vito section
  - a sideways-scrolling destinations gallery
  - the three booking steps and the full booking form
  - the Google rating, FAQ and closing call to action
- **Nine area pages per language:** `/taxi-antelias/`, `/beirut-airport-taxi/`, `/taxi-beirut/`, `/taxi-jounieh/`,
  `/taxi-byblos/`, `/taxi-metn/`, `/taxi-batroun/`, `/taxi-faraya/` and `/lebanon-private-driver/`.
- **Other pages:** `/credits/` lists photo credits, and there is a `404.html`.

Every booking form writes a WhatsApp message to **+961 70 609 211**. Nothing is stored.

## Repository layout

- **`web/`**: the React project (source, public assets, build scripts).
- **Repository root**: the **built site** that GitHub Pages serves. It is generated, so don't edit it by hand;
  `.published.json` lists every entry the build owns.

## Working on it

    cd web
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # type-check, build, pre-render, then publish to the repo root
    npm run preview    # serve web/dist/

Then commit both `web/` and the rebuilt root.

| What | Where |
|---|---|
| Phone, links, rating, all English and Arabic copy, areas, FAQs | `web/src/content/data.ts` |
| Page layout and sections | `web/src/pages/*`, `web/src/components/sections/*` |
| Nav, footer, WhatsApp button, cursor, loader | `web/src/components/layout/*` |
| Titles, descriptions, canonical/hreflang, structured data | `web/src/lib/seo.ts` |
| Colours, fonts, brand utilities | `web/src/index.css` |

In the copy, text between `*asterisks*` in a heading is rendered in gold italic.

## SEO

- **Page metadata:** each page has a unique title and description, a canonical URL, and `hreflang` for en, ar and x-default.
- **Share previews:** Open Graph and Twitter cards with `og.jpg`.
- **Structured data (JSON-LD):**
  - `LocalBusiness`: address, geo, phone, 24/7 hours, slogan, and Instagram, Facebook and Maps in `sameAs`.
  - `TaxiService` per area, `WebSite`, `WebPage`, `FAQPage`, and `BreadcrumbList`.
- **Crawling:** `sitemap.xml` (language alternates and images) and `robots.txt` are generated on every build.
- **App and contact files:** manifest, app icons, and a vCard contact file.
- **Speed:** WebP photos, self-hosted fonts, the hero image preloaded, and no third-party requests.

## Deploying on vitotaxi.cierp.uk

GitHub Pages serves this branch's root, which holds the built site, so no special Pages setting is needed.
When anything under `web/` changes on GitHub, `.github/workflows/deploy.yml` rebuilds the site and commits the fresh
build to the root.

1. **GitHub → Settings → Pages:** deploy from a branch, choose this branch (or `main` after merging), `/ (root)`.
   *Pages on a private repository needs a paid plan; otherwise make it public.*
2. **Cloudflare DNS (cierp.uk):** add `CNAME vitotaxi → ccg-cyber.github.io`, DNS only. `CNAME` is already in place.
3. Tick **Enforce HTTPS** once the certificate is issued. Then submit
   `https://vitotaxi.cierp.uk/sitemap.xml` in Google Search Console, and set the site as the website on the
   Google Business Profile.

## Photos

- **Car photography:** Unsplash (Unsplash License). The photos show the car model, not Vito Taxi's own vehicle.
- **Lebanon photography:** Wikimedia Commons (Creative Commons), credited on `/credits/` as the licences require.
- **Charbel's own photos:** drop them into `web/public/photos/` as `vito-1.jpg`, `vito-2.jpg` or `vito-3.jpg` and a gallery appears
  automatically under "The Vito".
- **Link preview and icons:** to regenerate `og.jpg` and the app icons after changing the logo or hero photo, run
  `cd web && NODE_PATH=$(npm root -g) npm run images` (needs Playwright).

## Licences of bundled code and fonts

- React, Vite, Tailwind CSS, shadcn/ui, Radix, Framer Motion, Lenis and lucide: MIT/ISC.
- Fonts (Instrument Serif, Manrope, IBM Plex Sans Arabic): SIL Open Font License.
