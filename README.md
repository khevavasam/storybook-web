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
Create `.env.local` (do not commit). Use `.env.example` as template.

Example:
```env
DATABASE_URL=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

## Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Run the development server           |
| `npm run build`  | Build the application for production |
| `npm run start`  | Start the production server          |
| `npm run lint`   | Run the code linter                  |

## UI rules
Chakra UI components first.  
Custom feature components are allowed, built from Chakra components.  
CSS Modules are allowed only for small extra styling when Chakra props/theme are not enough.  
All user-facing text must come from next-intl JSON messages (no hardcoded strings).  

## MVP flow
```text
Auth -> Create story -> Translate same story -> Library -> Share -> PDF
```
