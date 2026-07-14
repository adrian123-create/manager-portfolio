# Mea Sasam — Portfolio

## Files
- `index.html` — page structure
- `style.css` — all styling and animations
- `script.js` — typing animation, scroll reveals, lightbox
- `images/` — certificate placeholder images (swap these!)

## Replace the placeholder images
Drop your real certificate photos into the `images/` folder using these exact filenames
(so nothing else needs to change):

- `images/certi.jpg`  → SEO Sprint (Taglish)
- `images/certi1.jpg` → WOSCON 2024
- `images/certi2.jpg` → PinoySEO Training Series
- `images/certi3.jpg` → Premium Local SEO Masterclass

Want a 5th certificate? Copy one `<button class="cert-card">...` block in `index.html`
(inside the `#certificates` section) and point it at `images/certi4.jpg`.

## Deploy on Vercel
1. Push this folder to a GitHub repo (`git init`, `git add .`, `git commit -m "portfolio"`, `git push`).
2. Go to vercel.com → **Add New Project** → select the repo → **Deploy**.
   No build settings needed — it's plain HTML/CSS/JS.
3. Every future `git push` auto-redeploys.

## Edit content
All text lives directly in `index.html` — search for the section you want
(`id="about"`, `id="skills"`, etc.) and edit the copy in place.