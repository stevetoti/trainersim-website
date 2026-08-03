# TrainerSim Marketing Website

Marketing site for `https://trainersim.com`, hosted in the Vercel project `trainersim-website`.

## Stack
- Next.js 15 App Router
- React 19
- TypeScript and Tailwind CSS
- Vercel production hosting

## Commands
```bash
npm ci
npm run test:branding
npm run lint
npm run build
vercel deploy --prod --yes
```

## Rules
- Use TrainerSim assets from `public/`; never add Lovable branding or `src/app/favicon.ico`.
- Keep icon declarations in `src/app/layout.tsx` metadata so Next emits one authoritative icon set.
- Run branding, lint, and production build checks before deployment.
- Record changes in `memory/` with date and agent attribution.
