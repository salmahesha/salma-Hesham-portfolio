# Salma Hesham – Portfolio

A personal portfolio website for Salma Hesham, a CS student and frontend web developer.  
Built with **Angular 19**, **Tailwind CSS**, strict TypeScript, standalone components, signals, and the new Angular control flow.

---

## Tech Stack

| | |
|---|---|
| Framework | Angular 19 (standalone, no NgModules) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS + CSS custom properties |
| Reactivity | Angular Signals |
| Forms | Reactive Forms |
| Images | NgOptimizedImage |
| Animations | CSS transitions + IntersectionObserver |
| Deployment | GitHub Pages / Vercel |

---

## Folder Structure

```
portfolio/
├── public/                         # Static assets
│   ├── favicon.svg
│   ├── og-image.png                # Replace with actual OG image (1200×630)
│   ├── cv/Salma-Hesham-CV.pdf      # Replace with actual CV
│   └── images/projects/            # One screenshot per project
├── src/
│   ├── index.html                  # Meta tags, OG, fonts
│   ├── styles.css                  # Tailwind + design tokens + base styles
│   ├── main.ts
│   └── app/
│       ├── app.component.ts/.html  # Root – composes all sections
│       ├── app.config.ts
│       ├── core/
│       │   ├── models/             # TypeScript interfaces
│       │   ├── data/               # ALL editable content (edit here)
│       │   └── services/           # SeoService, ScrollSpyService
│       ├── shared/
│       │   ├── components/         # Reusable UI components
│       │   └── directives/         # RevealOnScrollDirective
│       └── features/               # One folder per page section
│           ├── navbar/
│           ├── hero/
│           ├── about/
│           ├── skills/
│           ├── projects/
│           ├── education/
│           ├── volunteering/
│           ├── contact/
│           └── footer/
```

---

## Editing Content

**All content lives in `src/app/core/data/`.** Components never contain hardcoded content.

| File | What to edit |
|---|---|
| `profile.data.ts` | Name, title, summary, contact info |
| `skills.data.ts` | Skill groups and items |
| `projects.data.ts` | Projects (fill in TODOs) |
| `education.data.ts` | Education and training entries |
| `volunteering.data.ts` | Volunteer experience |
| `navigation.data.ts` | Nav links |
| `social-links.data.ts` | GitHub / LinkedIn URLs |

---

## Replacing the CV

Drop your PDF at:
```
public/cv/Salma-Hesham-CV.pdf
```
The Download CV button in the hero already points to `/cv/Salma-Hesham-CV.pdf`.

---

## Run Locally

```bash
npm install
npx ng serve
```
Then open [http://localhost:4200](http://localhost:4200).

---

## Production Build

```bash
npx ng build --configuration production
```
Output goes to `dist/portfolio-app/browser/`.

---

## Deploy to GitHub Pages

1. Install the deploy tool (optional but convenient):
   ```bash
   npm install -D angular-cli-ghpages
   ```
2. Build with the correct base href:
   ```bash
   npx ng build --configuration production --base-href "/your-repo-name/"
   ```
3. Deploy:
   ```bash
   npx angular-cli-ghpages --dir=dist/portfolio-app/browser
   ```
4. **SPA 404 fallback:** Copy `dist/.../index.html` to `dist/.../404.html` before deploying so GitHub Pages serves the SPA on direct URL access.

---

## Deploy to Vercel

1. Import the repo in Vercel.
2. Framework preset: **Other** (or Angular).
3. Build command: `npx ng build --configuration production`
4. Output directory: `dist/portfolio-app/browser`
5. Add a `vercel.json` for SPA rewrites:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```

---

## Pending TODOs

See `src/app/core/data/projects.data.ts` for items marked `// TODO` — these need the owner to confirm descriptions, tech stacks, and links before they go live.
"# salma-Hesham-portfolio" 
