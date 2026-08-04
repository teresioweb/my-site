# My Site — GitHub Pages Starter

A simple 5-page static site with a GSAP "gather to center" photo animation on the homepage, no build tools required.

## Structure
```
site/
├── index.html      ← homepage with the animation
├── page2.html
├── page3.html
├── page4.html
├── page5.html
├── css/style.css
├── js/animations.js
└── images/          ← put your photos here (photo1.jpg ... photo5.jpg)
```

## 1. Add your images

The text content for all 5 pages is already filled in with the real content from the Wix site. You just need to download the images and drop them into `images/` with these exact filenames (referenced already in the HTML):

**Home (index.html)**
- `images/teresio-tecnigrafo.jpg` — from `https://static.wixstatic.com/media/416323_36215ca9223f417b86a1f4e3c420fd2e~mv2_d_2300_1483_s_2.jpg`
- `images/logos-27.jpg` — from `https://static.wixstatic.com/media/416323_5e15c71210444853b1758d2369cb1546~mv2.jpg`

**Logos 27 (logos-27.html)**
- `images/logos-pintori.jpg` — from `https://static.wixstatic.com/media/416323_2c4aff2dd32147d5b512e4bc489afb2c~mv2.jpg`
- `images/logos-opuscolo.jpg` — from `https://static.wixstatic.com/media/416323_00652d23dc8742fea5d6119dbe55dc6c~mv2.jpg`
- `images/ranimer-belle-mecanique.jpg` — from `https://static.wixstatic.com/media/416323_b7f40204e4004e00a87169babe05b88c~mv2.jpg`
- `images/schema-logos.jpg` — from `https://static.wixstatic.com/media/416323_978f0e98c7534d559740f2f532fce1f2~mv2.jpg`

**Curriculum (curriculum.html)**
- `images/curriculum-fronte.jpg` — from `https://static.wixstatic.com/media/416323_ee46b413f3664b8eb0a4273caadb92e4~mv2.jpg`
- `images/diploma-cfm.jpg` — from `https://static.wixstatic.com/media/344412_87b097420df44f438fb346c0fcde0b08~mv2_d_2420_1709_s_2.jpg`
- `images/teresio-cavaliere.jpg` — from `https://static.wixstatic.com/media/344412_996b3c859bb74cf1af6ad770627d1e29~mv2.jpeg`

**Foto (galleria-immagini.html)** — this page is a placeholder. Wix loads its gallery images dynamically via JavaScript so they couldn't be auto-extracted. Go to the live Wix page, save each image (or pull originals from the Wix Media Manager if you have account access), drop them into `images/galleria/`, and duplicate the `<figure>` block in `galleria-immagini.html` for each one.

To download a Wix image at full resolution: open the URL above directly in your browser, right-click → Save As. The URLs above are Wix's cropped/compressed display versions — for the true originals, it's better to go into the Wix Media Manager (if you have account access) and download from there instead.

## 2. Adjust the animation (optional)
Each image on the page has a `reveal-img` class, and slides in from the **left** by default. Add the class `from-right` to any `<figure>` to have it slide in from the right instead (already alternated in the pages above). The trigger point and speed can be tuned in `css/style.css` (`.reveal-img img` transition) and `js/animations.js` (`threshold: 0.2` — lower it to trigger the animation earlier while scrolling).

## 3. Push to GitHub
```bash
cd site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## 4. Turn on GitHub Pages
1. Go to your repo on GitHub → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`.
4. Save. Your site will be live within a minute or two at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## 5. Custom domain (optional)
If you own a domain, add it under Settings → Pages → Custom domain, then create a `CNAME` record at your DNS provider pointing to `YOUR-USERNAME.github.io`.

## Notes
- GSAP is loaded from a CDN in `index.html` — no install needed.
- If you want the animation on more than one page, add the same `<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>` and `js/animations.js` include, plus the `.stage`/`.photo` markup, to that page.
