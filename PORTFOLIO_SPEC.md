# Portfolio Website – Build Spec (Angular, Dark Mode)

You are an expert Angular developer and UI designer. Build a complete, polished, dark-mode personal portfolio for a **junior web developer (CS student)**. Tone: confident but honest. Never overstate experience or seniority.

Work in this order: (1) scaffold, (2) data + models, (3) shared/core, (4) sections, (5) SEO, (6) README, (7) run `ng build` and fix every error before finishing.

---

## 1. Tech Stack

- Latest stable Angular, TypeScript (strict mode), **standalone components only** (no NgModules)
- Tailwind CSS (use the setup that matches the installed Angular version)
- Angular **signals**, new control flow (`@if`, `@for`), `inject()`, `ChangeDetectionStrategy.OnPush`
- Reactive Forms for the contact form
- `NgOptimizedImage` for images
- Single page, smooth scroll, mobile-first, fully responsive
- No extra libraries (no animation libs, no UI kits). Icons: inline SVG or a tiny local icon component.
- Deployable to GitHub Pages and Vercel

## 2. Folder Structure

```
portfolio/
├── public/                         # static assets (favicon, og-image, cv)
│   ├── favicon.svg
│   ├── og-image.png                # placeholder 1200x630
│   ├── cv/Salma-Hesham-CV.pdf      # replaceable
│   └── images/projects/            # one screenshot per project (placeholders OK)
├── src/
│   ├── index.html                  # meta tags, OG tags, fonts
│   ├── styles.css                  # Tailwind import + design tokens + base styles
│   ├── main.ts
│   └── app/
│       ├── app.ts / app.html       # root, composes all sections
│       ├── app.config.ts
│       ├── core/
│       │   ├── models/             # interfaces: project, skill-group, timeline-item, nav-link, social-link, profile
│       │   ├── data/               # ALL editable content (typed)
│       │   │   ├── profile.data.ts
│       │   │   ├── navigation.data.ts
│       │   │   ├── skills.data.ts
│       │   │   ├── projects.data.ts
│       │   │   ├── education.data.ts
│       │   │   ├── volunteering.data.ts
│       │   │   └── social-links.data.ts
│       │   └── services/
│       │       ├── seo.service.ts
│       │       └── scroll-spy.service.ts
│       ├── shared/
│       │   ├── components/         # section-heading, tag, button, icon, project-card, timeline-item
│       │   ├── directives/         # reveal-on-scroll.directive.ts (IntersectionObserver)
│       │   └── utils/
│       └── features/               # one folder per section
│           ├── navbar/
│           ├── hero/
│           ├── about/
│           ├── skills/
│           ├── projects/
│           ├── education/
│           ├── volunteering/
│           ├── contact/
│           └── footer/
├── README.md
└── (angular.json, tsconfig, package.json, etc.)
```

Rules: components contain **no hardcoded content**; they read from `core/data`. Each feature folder holds its `.ts`, `.html`, and optional `.css`.

## 3. Design System (dark mode only)

Define as CSS variables / Tailwind theme tokens in `styles.css`:

| Token | Value |
|---|---|
| Background | `#0B0F19` |
| Surface | `#111827` |
| Border | white at ~8–10% opacity |
| Text primary | `#F3F4F6` |
| Text muted | `#9CA3AF` (must pass WCAG AA on bg) |
| Accent | **Violet `#8B5CF6`** (single accent, used consistently) |

- Font: Inter (self-host or Google Fonts with `display=swap`)
- Consistent radius (e.g. 12px cards, 8px buttons) and 4/8px spacing scale
- Minimal glassmorphism (subtle blur on navbar and cards), soft borders, very subtle shadow/glow
- Container: `max-width ~1100px`, generous vertical section spacing

**Avoid:** heavy gradients, neon, floating blobs, decorative clutter, oversized text, animation-heavy layouts. It should look like a real developer's portfolio, not an AI template.

## 4. Animation

- Fade/slide reveal on scroll via `RevealOnScrollDirective` (IntersectionObserver, once per element)
- Lightweight typing effect in hero (a few role phrases from the title only)
- Hover lift on cards, hover state on skill tags, smooth button transitions
- Respect `prefers-reduced-motion` (disable typing + reveal, show content immediately)
- Animate only `transform`/`opacity`

## 5. Accessibility & Performance

- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`), one `h1`, logical heading order
- Skip-to-content link, visible focus rings, full keyboard navigation
- Accessible mobile menu (button with `aria-expanded`/`aria-controls`, close on Escape and on link click)
- Scroll-spy for active nav link
- Labels + `aria-describedby` error messages on form fields
- Meaningful `alt` text; decorative icons `aria-hidden`
- Lazy-load below-the-fold images; target Lighthouse 90+ in all categories

## 6. Sections

### 6.1 Navbar
Sticky, blurred dark background. Name/logo on the left. Links: **About, Skills, Projects, Education, Contact**. Hamburger menu on mobile. Smooth scroll + active state.
(Note: use "Education", not "Experience" – there is no work experience to show.)

### 6.2 Hero
- Name: **Salma Hesham**
- Title: **Web Developer | Computer Science Student**
- Short intro derived only from the summary (below)
- Buttons: **View Projects** (scroll), **Download CV** (`/cv/Salma-Hesham-CV.pdf`, easy to replace, `download` attribute), **Contact** (scroll)
- GitHub + LinkedIn icon links (open in new tab, `rel="noopener noreferrer"`)

### 6.3 About
Use the professional summary. Quick facts: Cairo University · AI Department · Expected graduation 2027. Nothing else (no age, GPA, stats).

### 6.4 Skills
Grouped cards with tags. **No percentage bars or proficiency numbers.** Groups listed in section 8. Spoken languages (Arabic/English) go in the About section as a small "Languages" fact, not in the technical Languages group, to avoid confusion.

### 6.5 Projects
Responsive grid. Each card: screenshot (placeholder allowed), title, short description, tech badges, buttons. Show **Live Demo** only if `liveUrl` exists, **GitHub** only if `githubUrl` exists (never render a dead/empty link). Add a small "Featured" ordering: first 6 visible, rest accessible via "Show more" if the list is long. Project data in section 9.

### 6.6 Education & Training
Vertical timeline (accessible `<ol>`). Data in section 10.

### 6.7 Volunteering
Two simple cards (data below).

### 6.8 Contact
- Links: mailto, tel, LinkedIn, GitHub
- Form (Name, Email, Message) with Reactive Forms validation (required, email format, message min length ~10), inline errors, disabled submit while invalid
- **No backend exists.** On valid submit, do NOT claim a message was sent. Show a clear note such as: "This form is a frontend demo – please email me directly" and offer a `mailto:` fallback that opens the mail client with the fields prefilled.

### 6.9 Footer
Name, current year (computed), GitHub, LinkedIn, back-to-top button. Minimal.

## 7. Content Rules (strict)

Use the provided info exactly. Minor rewording is allowed only for UI readability.
**Do NOT invent:** experience, features, statistics, certificates, awards, companies, testimonials, client work, percentages, URLs, or technologies not listed. No lorem ipsum.
If something is missing, leave a clearly marked `// TODO` in the data file instead of guessing.

## 8. Profile & Skills Data

**Name:** Salma Hesham
**Title:** Web Developer | Computer Science Student
**Phone:** +20 114 815 8776
**Email:** salmahesham5917@email.com
**LinkedIn:** https://linkedin.com/in/salma-hesham-6b6886324
**GitHub:** https://github.com/salmahesha
**Spoken languages:** Arabic (Native), English (Very Good)

**Summary:**
CS student in the AI Department focused on Frontend and Web Development. Solid foundation in modern web technologies through academic study and professional training; hands-on with responsive interfaces, JavaScript, TypeScript, Angular, and frontend tooling. Motivated to contribute to real-world projects and build high-quality, user-focused web apps.

**Skills:**
- Web: HTML5, CSS3, SASS, JavaScript ES6+, TypeScript, Responsive Design, Bootstrap, Tailwind CSS
- Frameworks: Angular, React (Beginner)
- Backend & DB: Node.js, Express, MongoDB, Mongoose, SQL
- Languages: C++, Java, Python
- Tools: Git, GitHub, VS Code
- AI & CV: Data preprocessing, dataset handling, image processing, beginner ML, chatbot development
- AI Agents: Docker, FastAPI, RAG
- AI-Assisted Tools: Cursor, Claude, Antigravity, Flowise
- Soft Skills: Teamwork, Problem Solving, Logical Thinking, Communication, Time Management

## 9. Projects Data

Typed `Project` interface:
```ts
interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: 'frontend' | 'backend' | 'ai' | 'fullstack';
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}
```

| # | Title | Description | Tech | Live | GitHub |
|---|---|---|---|---|---|
| 1 | E-Commerce Frontend | Full customer journey: product browsing, category/search filtering, product details, cart, checkout. Responsive layouts and reusable components. | Angular, TypeScript, HTML5/CSS3, Bootstrap/Tailwind CSS | https://salmahesha.github.io/E-commerce/ | TODO |
| 2 | Social Media App (Backend) | RESTful API: authentication, profile management, post creation/retrieval; MongoDB/Mongoose schemas. Likes/comments planned. | Node.js, Express, MongoDB, Mongoose | – | https://github.com/salmahesha/social-app-backend |
| 3 | Saraha – Anonymous Messaging Backend | Shareable profile link to receive anonymous messages; authentication and inbox endpoints. | Node.js, Express, MongoDB, Mongoose | – | https://github.com/salmahesha/saraha-backend |
| 4 | Kids Platform – Landing Page | Landing page for a kids platform. *(TODO: owner to confirm description)* | TODO | https://kids-platform-pehf5y3mb-salmas-projects-f0c28970.vercel.app | TODO |
| 5 | Baytak | *(TODO: owner to provide description; confirm spelling "Baytak" vs "Bayteck")* | TODO | https://baytak-4718kf66d-salmas-projects-f0c28970.vercel.app | TODO |
| 6 | Car Plate Detection | Car plate detection project. *(TODO: owner to confirm description)* | TODO | – | https://github.com/salmahesha/car-plate-detection |
| 7 | CV Scrapper | TODO: description, links | TODO | – | TODO |
| 8 | Quotes App | TODO: description, links | TODO | – | TODO |
| 9 | Bookmarker | TODO: description, links | TODO | – | TODO |

Extra links supplied, not yet matched to a project (ask the owner, do not guess):
- https://frontend-lhsh4pqbo-salmas-projects-f0c28970.vercel.app
- https://github.com/salmahesha/Telecom-RAG

Rules: where tech is `TODO`, render no badges (do not invent). Keep projects 7–9 hidden until their data is filled (use a `visible` flag or leave them out of the array with a TODO comment).

## 10. Education & Training Data

| Type | Title | Org | Date |
|---|---|---|---|
| Education | B.Sc. Computer Science – AI Department | Cairo University | Expected 2027 |
| Training | Frontend Development Course | Route Academy | Sep 2025 |
| Training | Web Designer Trainee | NTI (National Telecommunication Institute) | May 2026 |
| Training | Backend Development Course | Route Academy | Jul 2026 |
| Training | AI Agents Crash Course | Orange Digital Center x Instant Solution Software | Aug 2026 |

Order the timeline newest first or chronologically (pick one, keep it consistent). No grades/certificates/details beyond this.

## 11. Volunteering Data

- **StarUnion Student Activity** – Volunteer: supported team tasks and collaborated on web projects using React.js; contributed to responsive, user-friendly interfaces.
- **SBS** – Volunteer: dataset preparation, data preprocessing, beginner-level AI/Computer Vision model workflows.

## 12. SEO

In `index.html` + `SeoService`: title ("Salma Hesham | Web Developer"), meta description, keywords, author, Open Graph title/description/image/type/url (placeholder image), Twitter card tags, theme-color `#0B0F19`, favicon, `lang="en"`.

## 13. README must include

Project overview, tech stack, folder structure, how to edit content (`core/data`), replacing the CV file, run locally (`npm install`, `ng serve`), production build, **GitHub Pages deploy** (correct `--base-href`, SPA 404 fallback), **Vercel deploy** (output directory, SPA rewrites).

## 14. Quality Gate (before finishing)

- Run `ng build --configuration production` with zero errors/warnings
- All nav anchors scroll correctly; no dead links or empty buttons
- No `any` types; strict TS passes
- No hardcoded duplicated content in components
- Keyboard-only and reduced-motion checks pass
- Responsive at 360px, 768px, 1280px
- Every file complete: no "rest of code here", "same as above", or `...`
