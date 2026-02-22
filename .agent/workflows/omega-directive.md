---
description: Omega Directive - Fetch Superdesign UI, sanitize brand data, enforce CWV, and standardize to 8px grid in one pipeline
---

# OMEGA DIRECTIVE: DESIGN FETCH & ARCHITECTURE OVERHAUL

> Target: New Superdesign Portfolio Import
> Directive: Fetch raw Superdesign UI, sanitize all real-world data, and refactor to enforce Next.js 15 Core Web Vitals, 8px grid, and WCAG accessibility.

## PHASE 1: Data Ingestion & Sanitization

1. Read the Superdesign skill instructions from `https://raw.githubusercontent.com/superdesigndev/superdesign-skill/refs/heads/main/skills/superdesign/SKILL.md`
2. Run `superdesign get-design --draft-id <DRAFT_ID>` to fetch the design HTML
3. Implement the design into the Next.js codebase using the Sovereign Engineering Protocol
4. **Immediate Sanitization**:
   - Replace original company names with **"Aura Architecture"**
   - Replace phone numbers with `+27 (0) 21 555 0198`
   - Replace emails with `hello@aura-arch.co.za`
   - Replace addresses with `Cape Town CBD, South Africa`
   - Replace logo with typography-based `<span className="font-bold text-xl">AURA</span>`
   - Clear layout metadata to reflect the new brand

## PHASE 2: Strict Next.js 15 Core Web Vitals

1. **RSC Enforcement**: Strip `"use client"` from all layout files and static sections. Only permit client boundaries where `useState`/`useEffect` are strictly required.
2. **LCP & Image Optimization**: Convert every `<img>` to `next/image`. Hero image must have `priority={true}`. All images need explicit `width`/`height` or Tailwind `aspect-ratio` parents.
3. **Font Edge-Hosting**: Delete external `<link>` Google Fonts. Use `@next/font/google` with `display: 'swap'`.
4. **Bundle Decimation**: Remove Framer Motion for simple fades/hovers. Replace with Tailwind CSS transitions (`transition-all duration-300`).
// turbo-all

## PHASE 3: Global UI Standardization & 8-Pixel Grid

1. **Strict 8px Grid**: All spacing must use multiples of 8 (`p-2`, `m-4`, `gap-6`, `h-8`). Half-steps (4px) only for micro-components.
2. **Gutters**: Restrict gap to `gap-4`, `gap-6`, or `gap-8`. Section spacing: `py-16` mobile, `md:py-24` desktop.
3. **Component Padding**: Standardize buttons/cards (`px-6 py-3`). Strip arbitrary pixel values like `p-[15px]`.
4. **WCAG 2.1 Contrast**: Text on `bg-zinc-900`/`bg-black` must be `text-slate-300` or lighter (4.5:1 minimum).
5. **Mobile-First**: Root sections need `px-4` or `px-6`. Multi-column grids default `grid-cols-1`, scale via `md:grid-cols-2`. Force `overflow-x-hidden` on body.

## Verification

- Run `npm run build` to verify production build
- Run `grep` for arbitrary pixel values and proprietary brand data
- Verify contrast ratios meet WCAG 2.1 AAA
