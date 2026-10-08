# Prayogi Sholihul Insan · Portfolio (Next.js)

Personal portfolio built with Next.js 15 (App Router), React 19, TypeScript,
Tailwind CSS v4, GSAP ScrollTrigger, Lenis smooth scroll, and Framer Motion.

Design reference: [Carlos – Personal Portfolio Website](https://dribbble.com/shots/10724776-Carlos-Personal-Portfolio-Website)
by Muh Salmon (dark theme, orange accent, sharp cards).

## Run locally

```
npm install
npm run dev
```

Open http://localhost:3000. If PowerShell blocks `npm`, use `npm.cmd` instead.

## How animation is layered

- **Lenis** (`components/SmoothScroll.tsx`) — buttery smooth wheel scrolling.
  Disabled automatically when the OS requests reduced motion.
- **GSAP ScrollTrigger** — scroll-linked effects, all scrubbed to scroll position:
  - Hero title and phone screenshots parallax at different speeds.
  - Journey timeline progress line draws as you scroll; stops light up.
  - Projects section pins and scrolls horizontally on desktop (`lg:` and up),
    with a progress bar. Stacks vertically on mobile.
- **Motion** (`motion/react`) — entrance animations (`whileInView`) and
  hover micro-interactions.
- **CSS** — tech marquee strip (pauses on hover, off under reduced motion).

Nav links scroll via the Lenis instance (`scrollToSection`).

## Edit content

- `data/profile.json` — name, title, availability, tagline, summary, contact
  links, education, activities
- `data/experience.json` — journey entries (bullets are kept as data but not rendered)
- `data/projects.json` — project cards
- `data/skills.json`, `data/certifications.json`
- `data/screenshots.ts` — screenshot lists per project and hero images

## Add images

App screenshots live in `public/images/projects/<slug>/` and are listed in
`data/screenshots.ts`. Every image in a project's list appears, so name files
in display order (`01`, `02`, …). Hero images come from `heroScreens` in the
same file.

## Deploy (free)

Push this repo to GitHub, then import it in Vercel (free tier). No special
settings needed — `npm run build` is detected automatically. Every push to
`main` redeploys.
