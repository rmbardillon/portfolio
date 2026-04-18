# Portfolio Project Rules

## Project Overview
- Developer portfolio for Romeo Jr Bardillon, positioned as an **ERP Consultant & Integration Engineer**
- Stack: React 18 + Vite + TypeScript + Tailwind CSS v3 + shadcn/ui
- Deployed to GitHub Pages at https://rmbardillon.github.io/portfolio
- Base path: `/portfolio/`

## Messaging & Positioning
- Primary identity: **ERP Consultant / Integration Engineer**, NOT "web developer" or "frontend developer"
- Enterprise experience (Infor M3 ecosystem) is the PRIMARY selling point
- Personal projects are SECONDARY — framed as supporting evidence of technical depth
- Tone: professional, consultant-grade, minimal — not creative/flashy
- Hero headline must reflect ERP/integration focus, never generic titles
- Infor stack includes: Infor M3, Infor OS, Infor ION, ION Workflows, MEC, XtendM3, API Gateway, Datalake, H5 Scripting, H5 SDK, Experience Designer

## Architecture & Conventions

### Path Aliases
- Use `@/` alias for `./src/` in all imports (configured in vite.config.ts and tsconfig.json)
- Example: `import { Button } from "@/components/ui/button"`

### Folder Structure
```
src/
├── assets/          # Images, PDFs, project data (projects/index.tsx)
├── components/
│   ├── ui/          # shadcn primitives (button, card, dialog, badge, input, textarea)
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   └── SectionHeading.tsx
├── hooks/           # Custom hooks (useTheme.ts)
├── lib/
│   └── utils.ts     # cn() utility (clsx + tailwind-merge)
├── pages/           # Section-level components (Hero, About, Projects, Contact, Footer)
├── App.tsx
├── index.css        # Tailwind directives + CSS variables for theming
└── main.tsx
```

### Dark/Light Mode
- Uses CSS variables defined in `index.css` (`:root` for light, `.dark` for dark)
- Tailwind `darkMode: "class"` strategy — `.dark` class toggled on `<html>`
- Theme state managed by `useTheme` hook in `src/hooks/useTheme.ts`
- Persisted to localStorage, defaults to system preference
- Toggle button (Sun/Moon) lives in Navbar
- All colors MUST use semantic tokens: `bg-background`, `text-foreground`, `border-border`, `bg-card`, `text-muted-foreground`, `text-accent`, etc.
- NEVER hardcode hex colors — always use the CSS variable-based Tailwind classes

### Color Tokens (HSL values in CSS variables)
| Token             | Light              | Dark               |
|-------------------|--------------------|---------------------|
| background        | white              | #0f172a (slate-900) |
| foreground        | #1e293b (slate-800)| #f1f5f9 (slate-100) |
| card              | #f1f5f9 (slate-100)| #1e293b (slate-800) |
| muted-foreground  | #64748b (slate-500)| #94a3b8 (slate-400) |
| accent            | #3b82f6 (blue-500) | #3b82f6 (blue-500)  |
| border            | #e2e8f0 (slate-200)| #1e293b (slate-800) |

### shadcn/ui Components
- Located in `src/components/ui/`
- All use `cn()` from `@/lib/utils` for class merging
- Components: button, card, dialog, badge, input, textarea
- Button variants: default, secondary, outline, ghost, link
- Badge variants: default (accent-tinted), secondary (muted), outline
- Do NOT install shadcn CLI — components are manually created to match the project's CSS variable system

### Section Layout
- All sections use `py-20` vertical padding
- Content constrained to `max-w-6xl mx-auto px-6`
- Use `SectionHeading` component for consistent section titles (label + title + description)
- Hero is full viewport height: `min-h-[calc(100vh-4rem)]`

### Contact Form
- Uses `@emailjs/browser` (NOT axios, NOT a backend)
- Credentials via Vite env vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
- Form uses `useRef` + `emailjs.sendForm()` (reads name attributes from DOM)
- Validation: required fields + email regex, errors clear per-field on change
- Status state machine: idle → sending → success/error → auto-reset to idle after 5s
- Inline toast notifications (green for success, red for error)
- `.env` and `.env.local` are gitignored

### Project Data
- Defined in `src/assets/projects/index.tsx`
- `stack` field is `string[]` (rendered as Badge components)
- Descriptions must be 1-2 lines max, emphasizing backend logic and system design
- Order: backend-heavy projects first (Spring Boot API, then full-stack, then business logic systems)

### Dependencies — Do NOT Add
- No Bootstrap
- No jQuery
- No axios (removed — use fetch if needed)
- No react-modal (replaced by Radix Dialog)
- No unnecessary UI libraries

### Dependencies — Currently Used
- `@emailjs/browser` — contact form
- `@fortawesome/react-fontawesome` + brand icons — social links
- `lucide-react` — UI icons (note: this version does NOT export `Github` icon, use FontAwesome's `faGithub` instead)
- `react-slick` + `slick-carousel` — project image carousels
- `@radix-ui/react-dialog` + `@radix-ui/react-slot` — shadcn Dialog and Button primitives
- `class-variance-authority` + `clsx` + `tailwind-merge` — shadcn styling utilities
- `tailwindcss-animate` — animation plugin for Radix state transitions

### Fonts
- Body: Inter (loaded from Google Fonts)
- Monospace: JetBrains Mono (used for nav logo, section labels, code references)
- Loaded via `@import` in `index.css`

### Deployment
- `npm run deploy` → runs `gh-pages -d dist`
- `vite.config.ts` has `base: "/portfolio/"`
- Build output: `dist/`
