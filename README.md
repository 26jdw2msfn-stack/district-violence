# District Violence — Community Hub

Companion site for the Roblox game **District Violence** (asymmetric horror:
1 Killer vs 5 Survivors, 5 generators to escape).

## What's in it

- Interactive **Killer Dossier** with a terror-radius cursor field
- **Skill-check trainer** rebuilt 1:1 after the in-game generator repair UI,
  with a focus mode that centers the dial mid-run
- **Fog parting beam** on the hero — canvas effect that follows the cursor
  (mouse drag, touch tap, or phone tilt on mobile)
- Perk intel, item list, playstyle quiz, clickbait myth-busting

## Stack

Astro static single-page site — no JS framework, no backend. Vanilla
HTML/CSS/JS, one inline script.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static output to dist/
```

## Deploy

Push to `main`. Cloudflare Pages builds and deploys automatically.
