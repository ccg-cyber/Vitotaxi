# Vito Taxi by Charbel

**Your comfort, our priority.** The website for Vito Taxi by Charbel, a 24/7 Mercedes-Benz Vito taxi
based in Antelias, Lebanon.

Live address: **https://vitotaxi.cierp.uk/** · Arabic: **/ar/**

## What's on the site

- **Cinematic homepage in English and Arabic:**
  - a full-screen night photo of a Mercedes Vito, with a floating glass "Where to?" booking card
  - bento tiles: 4.9★ Google, 24/7, the car, 9 regions, pricing, airport, drivers
  - photo service cards and a scroll-driven horizontal destinations gallery
  - a booking form, the Google rating, the FAQ, and a closing call to action
- **Premium WhatsApp button:** a glass pill with a rotating gold ring. It expands to "Chat on WhatsApp · Available 24/7",
  and a greeting bubble appears once per visit. Phones also get a gold call button.
- **Motion:** a logo preloader, headline reveals, parallax photos, smooth scrolling, a gold cursor and magnetic buttons.
  All of it switches off for visitors who ask their device for reduced motion.
- **Nine area pages in both languages:** Antelias, Beirut Airport, Beirut, Jounieh, Byblos, Metn, Batroun, Faraya,
  and private driver. Each has its own photo, copy, FAQ and booking links.
- **Booking:** every form writes a ready-made WhatsApp message to **+961 70 609 211**. Nothing is stored on the site.

## SEO

- **Page metadata:** every page has a unique title and description, a canonical URL, and `hreflang` for en, ar and x-default.
- **Share previews:** Open Graph and Twitter cards with a designed `og.jpg`.
- **Structured data:**
  - `LocalBusiness`: address, geo, phone, 24/7 hours, slogan, and Instagram, Facebook and Google Maps in `sameAs`.
  - `TaxiService` per area, `WebSite`, `WebPage`, `FAQPage`, and `BreadcrumbList`.
- **Crawling:** `sitemap.xml` with language alternates and image entries, and `robots.txt`.
- **App and contact files:** a manifest, icons, and a vCard contact file.
- **Speed:**
  - WebP photos, lazy-loaded below the fold, with the hero image preloaded.
  - Self-hosted fonts and scripts, so there are no third-party requests.

## Changing things

| What | Where |
|---|---|
| Phone, WhatsApp, links, rating | `CFG` in `tools/content.py` |
| All English and Arabic copy, FAQ | `T` in `tools/content.py` |
| Areas (add or remove one) | `AREAS` in `tools/content.py` |
| Layout, extra homepage words, which photo goes where | `tools/pages.py` |
| Design | `assets/site.css` · behaviour: `assets/site.js` |

After any change, run:

    python3 tools/pages.py

Never edit the generated `.html` files by hand, because the next run overwrites them. If the logo or the hero photo changes, also run:

    NODE_PATH=$(npm root -g) node tools/render-images.js      # og.jpg, icons, favicon

## Photos

- **Car photography:** Unsplash, under the Unsplash License. The photos show the car model; they are not Vito Taxi's own vehicle.
- **Lebanon photography:** Wikimedia Commons, under Creative Commons licences, credited on `/credits/`
  as those licences require. `tools/photo-credits.json` lists every one.
- **Charbel's own photos:** drop them into `photos/` as `vito-1.jpg`, `vito-2.jpg` or `vito-3.jpg` and they
  appear automatically as a gallery under "The Vito". Real photos of the car and drivers will always convert best.

## Deploying on vitotaxi.cierp.uk

1. **GitHub → Settings → Pages:** deploy from the branch holding these files, root folder. `CNAME` already
   contains `vitotaxi.cierp.uk`. *Pages on a private repository needs a paid plan; otherwise make it public.*
2. **Cloudflare DNS (cierp.uk):** add `CNAME vitotaxi → ccg-cyber.github.io`, DNS only.
3. Once GitHub has issued the certificate, tick **Enforce HTTPS**.
4. **Google Search Console:** add the site and submit `https://vitotaxi.cierp.uk/sitemap.xml`.
   On the Google Business Profile, set the website to `https://vitotaxi.cierp.uk/`.
   That link is what ties the site to the 4.9★ listing in local search.

## Licences of bundled code

- GSAP, ScrollTrigger and SplitText: GreenSock standard no-charge licence.
- Lenis: MIT.
- Fonts (Instrument Serif, Manrope, IBM Plex Sans Arabic): SIL Open Font License.
