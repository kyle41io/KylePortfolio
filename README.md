# Kyle Nguyen — Developer Portfolio

A single-page personal portfolio built with Next.js: intro, about, skills,
education, projects, activities and certifications, with a light/dark theme and
scroll-driven animations.

**Live:** deployed on Vercel.

## Tech stack

- **Next.js 13.2** (Pages Router) + **React 18**
- **Tailwind CSS 3.3** with a custom theme, plus `tailwindcss-textshadow`
- **Framer Motion** — entrance, hover and scroll animations
- **react-scroll** — smooth in-page navigation
- JavaScript, not TypeScript. Path alias `@/*` → `src/*` (see `jsconfig.json`).

## Getting started

Requires **Node 24** (`engines` in `package.json`).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint    # ESLint (next/core-web-vitals)
```

No environment variables and no backend — the site is fully static content in
the component tree, so a clone runs with nothing else configured.

## Project structure

The page is composed in **`_app.js`**, not `index.js`. `_app.js` renders the
navbar, then the current page, then every remaining section in order, then the
footer — so `index.js` contributes only the hero.

```
src/
├── pages/
│   ├── _app.js         # composes the page: NavBar → <Component/> → About →
│   │                   #   Activities → Projects → Certifications → ToTop → Footer
│   │                   #   also: Montserrat font, global CSS, scroll listener
│   ├── index.js        # the hero section only — photo, headline, bio, CV link
│   └── _document.js    # stock Next.js document, unmodified
├── components/
│   ├── NavBar.js       # nav, social links, theme toggle (useThemeSwitcher)
│   ├── Layout.js       # width + padding container
│   ├── About.js        # bio and stats
│   ├── Activities.js   # exported as `Experience` where it is imported
│   ├── Projects.js     # project cards
│   ├── Certifications.js  # CS50x, Claude Code, AWS SAA-C03, TOEIC 845
│   ├── Footer.js
│   ├── ToTop.js        # back-to-top, mounted once scroll > 300px
│   ├── AnimatedText.js # per-word stagger for headings
│   ├── Icons.js        # inline social/UI SVGs
│   ├── Logo.js
│   └── icons/          # per-technology logo components
├── hooks/
│   └── useThemeSwitcher.js   # localStorage + prefers-color-scheme
└── styles/globals.css
```

**Unused components.** `Education.js`, `Skills.js` and `LiIcon.js` are in the
tree but imported by nothing — leftovers from the starter template this was
built from. `LiIcon.js` is the scroll-driven timeline dot that `Education.js`
depends on. Wire `Education` into `_app.js` to bring the timeline back, or
delete all three.

## Editing the content

All content is hard-coded in the components — there is no CMS and no data file.

| To change | Edit |
|---|---|
| Headline, bio, CV link | `src/pages/index.js` |
| Which sections appear, and in what order | `src/pages/_app.js` |
| Long-form bio and stats | `src/components/About.js` |
| Projects | `src/components/Projects.js` |
| Talks, courses, community | `src/components/Activities.js` |
| Certifications | `src/components/Certifications.js` (images in `public/images/certs/`) |
| Social links | `src/components/NavBar.js` and `Footer.js` |
| CV PDF (`CV_NguyenKien_SWE.pdf`), profile photo | `public/` |

Images go through `next/image`; keep new assets under `public/images/` and
import them so Next can size them at build time.

## Deployment

Pushing to `main` triggers a Vercel deployment. Any static host works too —
there are no server routes, so `next build` output can be served anywhere.
