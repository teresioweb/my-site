# Teresio Gassino — GitHub Pages Site

A static tribute site with real content, Italian typography (Merriweather), and scroll/load-triggered image animations. No build tools required.

## Structure
```
site/
├── index.html                      ← landing page (matches Wix root "/")
├── home.html                       ← full essay (matches Wix "/home")
├── logos-27.html
├── un-discorso-di-capellaro.html
├── curriculum.html
├── galleria-immagini.html          ← Foto (gallery placeholder, needs your images)
├── quercia.html                    ← hidden page, NOT in nav, linked from home.html text only
├── css/style.css
├── js/animations.js
└── images/
    ├── discorso/                   ← 4 thumbnails for the clump animation
    ├── galleria/                   ← Foto gallery images
    └── quercia/                    ← 2 images for the hidden Quercia page
```

## Font
Merriweather (serif) is loaded from Google Fonts via `@import` in `css/style.css` and applied site-wide. No local files needed.

## 1. Images still needed

**Footer (every page)** — new addition:
- `images/creative.png` — Creative Commons badge, shown at 22px height in the fixed footer bar, linking to the license page.

**Background drawings (Logos 27, Curriculum, Un discorso di Capellaro)**:
- `sfondi/disegno-1.svg`, `sfondi/disegno-2.svg`, `sfondi/disegno-3.svg` — solved: export these with a **white stroke** (not black) — the CSS tints them with a dark overlay at 0.75 opacity so they read as a faint watermark on the black page background. Assigned as disegno-1 → Logos 27, disegno-2 → Curriculum, disegno-3 → Un discorso di Capellaro (swap the `url(...)` values in `css/style.css` — `body.page-logos`, `body.page-curriculum`, `body.page-discorso` — if you want a different pairing). The drawing sits behind everything on the page, including behind the pastel colour bands (which stay solid on top, no pattern inside them).

**Landing page (index.html)** — 4 small teaser thumbnails:
- `images/card-tecnigrafo.jpg` — from `https://static.wixstatic.com/media/416323_36215ca9223f417b86a1f4e3c420fd2e~mv2_d_2300_1483_s_2.jpg`
- `images/card-logos.jpg` — from `https://static.wixstatic.com/media/416323_5e15c71210444853b1758d2369cb1546~mv2.jpg`
- `images/card-lavoro-1.jpg` — from `https://static.wixstatic.com/media/416323_25ac4d07c28c414393cbe299c09182a6~mv2.jpg`
- `images/card-lavoro-2.jpg` — from `https://static.wixstatic.com/media/416323_02ccc3ae42414f1189a31ab7ca763d52~mv2.jpg`

**Home (home.html)** — same as before:
- `images/teresio-tecnigrafo.jpg`, `images/logos-27.jpg` (see previous notes / same source URLs as the card thumbnails above, full-size versions)

**Logos 27** — `images/logos-pintori.jpg`, `images/logos-opuscolo.jpg`, `images/ranimer-belle-mecanique.jpg`, `images/schema-logos.jpg` (URLs unchanged from before)

**Curriculum** — `images/curriculum-fronte.jpg`, `images/diploma-cfm.jpg`, `images/teresio-cavaliere.jpg` (URLs unchanged from before)

**Un discorso di Capellaro** — 6 clump thumbnails now (was 4). The first 4 are the same as before and still **not sourced** (Wix loaded them dynamically):
- `images/discorso/capellaro-documento.jpg`
- `images/discorso/piol.jpg`
- `images/discorso/sartor.jpg`
- `images/discorso/banchelli.jpg`

The 2 new ones are a best guess — I reused the two "Teresio al lavoro" photos that appear as teaser thumbnails on the landing page and on this page's own nav card, since the real page's extra 2 images weren't retrievable either. **Double-check these against the live Wix page** and swap in the correct originals if these aren't right:
- `images/discorso/teresio-lavoro-1.jpg` — best guess: `https://static.wixstatic.com/media/416323_25ac4d07c28c414393cbe299c09182a6~mv2.jpg`
- `images/discorso/teresio-lavoro-2.jpg` — best guess: `https://static.wixstatic.com/media/416323_02ccc3ae42414f1189a31ab7ca763d52~mv2.jpg`

Go to the live Wix page for this section to confirm/replace these, or substitute any relevant photo/document scan you have.

**Quercia (hidden page)**:
- `images/quercia/quercia-racciano-1.jpg` — from `https://static.wixstatic.com/media/416323_6e9e04a810f040c598a8abe51ce96568~mv2.png`
- `images/quercia/quercia-racciano-2.jpg` — from `https://static.wixstatic.com/media/416323_4641bb0c84a94d76ac18b61d3d09aebf~mv2.png`

**Foto (galleria-immagini.html)** — still a placeholder; pull images from the live Wix gallery or Media Manager into `images/galleria/`.

To grab any Wix image at full quality: open the source URL in a browser and Save As, or better, pull the original from the Wix Media Manager if you have account access (the URLs above are Wix's compressed display versions).

## 2. Layout notes

- **Header**: a fixed, translucent gray nav bar (`rgba(220,220,220,0.82)`, same opacity as the footer, with a blur), content constrained to a centered 980px `.nav-inner` so the brand and links don't stick to the viewport edges on wide screens. "Teresio Gassino" links to the landing page and underlines on hover, same as the other links. It hides on scroll down and reappears on scroll up — handled by `js/animations.js`. **On mobile** (under 700px), the links collapse into a burger menu on the right; tapping it animates open (slower, eased) and the burger morphs into an X — tap again (or tap a link, or tap outside) to close. The bar stays visible while the dropdown is open.
- **Typography**: Merriweather (serif) for body text; Merriweather Sans for the nav, the footer, and every small "Fonte: ..." citation line (class `.fonte`) — gives those UI/metadata bits their own visual register instead of sharing the reading typeface.
- **Footer**: fixed gray bar, all text black, Creative Commons logo first followed by the credit line (no `©` symbol — redundant with the logo).
- **Side-by-side image + description**: any `<figure class="reveal-img side">` shows the image and its `<figcaption>` next to each other (stacks on mobile). Add `from-right` to flip which side the image is on, `align-top` to align the text to the top of the image instead of centering it vertically, `square` for a taller/squarer image crop, and `crop-top` to crop the image from the top instead of the center. Used on the Logos 27 and Curriculum pages.
- **Image badges** (Logos 27, Curriculum): every linked image gets a small pill badge in the bottom-right corner (PDF / Video / Link / Immagine) via `.img-badge`, plus a subtle darkening overlay on hover, so it's clear upfront that the image is clickable and what it opens.
- **Clump animation** (Un discorso di Capellaro): the 6 thumbnails in `.clump-stage` (340×220px each, 3 rows of 2) slide in together from different sides and land clustered, on page load — pure CSS. All the page's text sits below it, inside a single dark translucent `.ritagli-band`. On mobile, the clump switches to a plain vertical stack at readable size instead of the clustered layout.
- **Per-image reveal** (Home, Logos 27, Curriculum, Foto, Quercia): each image fades/slides in individually as it scrolls into view, via `js/animations.js`.
- **Quercia scroll windows**: the two long Facebook-post screenshots sit in fixed-height (`560px`, `420px` on mobile) `.quercia-window` containers with a native vertical scrollbar, instead of running the full image height inline — otherwise the page would be enormous. Each has a small "Ingrandisci" button that stays pinned to the top-right while scrolling (`position: sticky`) and opens the same lightbox used on the Foto page.
- **Lightbox**: generalized to work off a single `.lightbox-trigger` class (previously it was hardcoded to `.gallery-grid img`). Any image or button with that class — plus a `data-src`/`data-alt` pair if it's not an `<img>` itself — will open the shared `.lightbox-overlay`. Used on both the Foto grid and the Quercia expand buttons.

## 3. Site structure vs. the original Wix site
- Wix's root `/` is a separate teaser/landing page (cards linking into the site) — that's now `index.html` here.
- Wix's `/home` is the full essay — that's `home.html` here.
- The nav bar's &#8962; icon links back to `index.html` (the landing page), matching the original.
- `quercia.html` is intentionally excluded from the nav bar, exactly as on the original site — it's only reachable via the "La Quercia di Racciano" link inside the text on `home.html`.

## 4. Push to GitHub
```bash
cd site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## 5. Turn on GitHub Pages
Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder `/ (root)` → Save. Since the repo is named `teresioweb.github.io` (a user/organization site), it deploys straight to `https://teresioweb.github.io/` — no repo name in the path. Live within a minute or two.
