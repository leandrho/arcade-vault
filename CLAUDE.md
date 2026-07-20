# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Arcade Vault** is a Next.js web application for playing online and competing for points. It's built with the App Router and follows a Spec Driven Design methodology.

## Common Commands

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Technology Stack

- **Next.js 16.2.10** (canary version with breaking changes)
- **React 19.2.4** with React Server Components
- **Tailwind CSS 4** (uses `@import "tailwindcss"` in CSS, not directives)
- **TypeScript 5**
- **ESLint 9**

## Important Notes

### This is NOT the Next.js you know

This is a canary version with breaking changes — APIs, conventions, and file structure may differ from stable Next.js. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

### Tailwind CSS 4

Tailwind v4 uses a different configuration approach:
- No `tailwind.config.ts` file by default
- Use `@import "tailwindcss"` in CSS files
- Define theme with `@theme inline { ... }` in CSS

### Design Pattern

This project follows **Spec Driven Design**:
- `/spec` - Specifications and requirements
- `/spec-impl` - Implementation based on specs

Follow the practices from [Klerith/fernando-skills](https://github.com/Klerith/fernando-skills) for structuring features.

## Skills
Usa siempre /frontend-design para diseñar la interfaz de usuario.

## Architecture

```
app/                    # Next.js App Router pages
├── layout.tsx          # Root layout with Geist fonts
├── page.tsx            # Home page
└── globals.css        # Global styles with Tailwind 4

public/                 # Static assets
references/             # Reference files (placeholders, docs)
```

The app uses the `app/` directory as the primary routing layer. Routes are defined by the file structure within `app/`.

## Key Files

- `app/layout.tsx` - Root layout with Geist fonts and metadata
- `app/page.tsx` - Main landing page
- `app/globals.css` - Global styles with Tailwind 4 theme configuration
- `next.config.ts` - Next.js configuration (currently minimal)
- `tsconfig.json` - TypeScript configuration with path aliases (`@/*` maps to `./`)