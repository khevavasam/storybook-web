# storybook-web

Multilingual kids stories (FI/EN/SV) with strict 1:1 translations, personal library, sharing links and PDF export.

## Tech
Next.js (App Router), React, PostgreSQL, Prisma, NextAuth, Chakra UI, next-intl

## Getting started
```bash
npm install
npm run dev
```

Open:
```text
http://localhost:3000
```

## Env

Create `.env.local` and `.env` (do not commit).  
Use `.env.example` as a template.

Required for local development:

```.env.local
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

```.env
DATABASE_URL=postgresql://postgres:REAL_PASSWORD@db.rcgmdmdhastjlwlawhdt.supabase.co:5432/postgres




## Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Run the development server           |
| `npm run build`  | Build the application for production |
| `npm run start`  | Start the production server          |
| `npm run lint`   | Run the code linter                  |

## UI rules

### General
- Chakra UI is the primary tool for layout, spacing, sizing and responsiveness.
- Components should be composed from Chakra primitives whenever possible.
- Custom feature components are allowed if built on top of Chakra components.

### Styling
- CSS Modules are allowed **only** for:
  - hover / active / focus effects
  - transitions and animations
  - decorative visuals (gradients, blur, images)
- Do not duplicate Chakra layout styles (padding, margin, flex, grid) in CSS.
- Do not use px in CSS unless strictly required for visual assets.
- Prefer `rem`, `%`, `em` and `currentColor`.

### Theme & tokens
- Colors and spacing should come from Chakra theme tokens.
- Do not hardcode colors in components.
- Use semantic tokens (e.g. `text.accent`, `fg.default`) instead of component tokens.

### i18n
- All user-facing text must come from `next-intl` JSON messages.
- No hardcoded strings in components.

## MVP flow
```text
Auth -> Create story -> Translate same story -> Library -> Share -> PDF
```
