# Vito Taxi by Charbel — the site

Planned address: **https://vitotaxi.cierp.uk/** (Arabic: **/ar/**)

A static site made of plain HTML, one stylesheet, one small script and self-hosted fonts.
It has no framework, no trackers, no cookies and no backend. The pages are generated
once by `tools/build.py` and then committed, and GitHub Pages serves them exactly as they are.

## What's on it

- **Homepage, English and Arabic:** the hero with the animated Vito scene, services, the car,
  a booking form, the Google rating, areas, FAQ and a closing call to action. There is also a floating
  WhatsApp button, and on phones a Call/WhatsApp dock.
- **Booking form:** it writes a WhatsApp message to 70 609 211 containing the trip type, pickup,
  destination, date and time, passengers, bags, flight number, name and notes. Nothing is stored or sent anywhere else.
- **Nine area pages in both languages (18 pages).** They exist to rank for local searches:
  Antelias, Beirut Airport, Beirut, Jounieh, Byblos, Metn, Batroun, Faraya, and private driver/day trips.

## SEO in place

- Every page has its own `<title>`, meta description and canonical URL, plus `hreflang`
  links for en, ar and x-default.
- Open Graph and Twitter cards, using a designed `og.png` (1200×630).
- JSON-LD structured data: `LocalBusiness` (address, geo, phone, 24/7 hours, Instagram,
  Facebook and Google Maps in `sameAs`), `TaxiService`, `WebSite`/`WebPage` and `FAQPage`.
  Area pages also carry `BreadcrumbList`.
- `sitemap.xml` with hreflang pairs, `robots.txt`, a web manifest, app icons and a `.vcf` contact card.
- Geo meta tags for Antelias, one `h1` per page, semantic sections and a fully bilingual RTL layout.
- The page is fast: CSS and JS are about 40 KB combined, fonts are preloaded, and there are no third-party requests.

The Google rating (4.9 from 17 reviews) is shown on the page with a link to the listing, but it is
deliberately **not** in the structured data. Google ignores self-published review markup on a
business's own site and can penalise it. Update `rating`, `reviews` and `rating_asof` in CFG as it changes.

## Changing anything

All copy, the phone number, links and areas are in **`tools/build.py`**, in the `CFG`, `T` (en/ar) and
`AREAS` blocks. After editing, run:

    python3 tools/build.py

Do not edit the generated `.html` files by hand, because the next build overwrites them.
Styles live in `assets/site.css` and behaviour in `assets/site.js`.

To regenerate `og.png` and the icons after a design change:

    NODE_PATH=$(npm root -g) node tools/render-images.js

## Photos

The car, skyline and logo artwork are hand-drawn SVG, so the site looks finished with no photos at all.
Real photos still sell better, though. Drop them into `photos/` (see `photos/README.md`) and a gallery
appears automatically.

## Before sending the link to customers

1. Check that **70 609 211 is on WhatsApp**, because all booking goes to it (`CFG['wa']`).
2. Check the areas. The nine area pages are places a taxi from Antelias normally serves. If any
   should not be advertised, delete its entry in `AREAS` and rebuild.
3. **Voices.** Real customer quotes, used with permission, go in `CFG['voices']`. The section only
   appears once there is at least one. Never invent them.

## Deploying on vitotaxi.cierp.uk

It uses the same setup as Joy Taxi:

1. **GitHub → Settings → Pages:** deploy from a branch, choose the branch holding these files
   and `/ (root)`. The `CNAME` file already says `vitotaxi.cierp.uk`.
   *GitHub Pages on a private repository needs a paid plan. On the free plan, make the repository public.*
2. **Cloudflare DNS for cierp.uk:** add `CNAME vitotaxi → ccg-cyber.github.io` (DNS only, grey cloud).
3. Wait for GitHub to issue the certificate, then tick **Enforce HTTPS**.
4. **Google Search Console:** add `https://vitotaxi.cierp.uk/` and submit `sitemap.xml`.
   In the Google Business Profile, set the website to this address. That link is what connects the
   site to the 4.9★ listing in local search.
