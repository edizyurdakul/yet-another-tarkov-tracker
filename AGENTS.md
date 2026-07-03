# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Project Rules

- Always use bun not npm, pnpm, or yarn.

## Overview

Tarkov Progression Management Platform — full-stack Next.js 16 app tracking
quests, hideout upgrades, traders, and crafts for Escape from Tarkov players.
This is a portfolio project: code quality and commit history are being read
by hiring managers, not just users, so favor clarity and correct conventions
over shortcuts.

## Stack

- Next.js 16 (App Router), TypeScript strict mode
- Tailwind CSS v4, shadcn/ui (Base UI primitives), custom dark
  military-industrial OKLCH theme
- Drizzle ORM, PostgreSQL — Docker locally, Neon in production
- Better Auth
- TanStack Query (server state), Zustand (client state) — don't introduce a
  third state library

## Commands

- Dev: `bun dev`
- Build: `bun run build`
- Test: `bun test`
- Lint: `bun run lint`
- Format: `bun run format`
- DB generate/migrate: `bun run db:generate` / `bun run db:migrate`

## Code style

- No `any`, no unexplained `@ts-ignore`.
- Named exports except Next.js page/layout/route files.
- Server Components by default; `"use client"` only when needed.
- Query data via TanStack Query on the client or direct Drizzle queries in
  Server Components/Route Handlers — don't client-fetch what a Server
  Component could do.

## Git workflow — important, don't skip

- Conventional Commits (enforced by Commitlint via Husky).
- One logical concern per commit — don't bundle unrelated changes.
- Feature branches. PRs merge with a merge commit, not squash — granular
  history is intentional here, not an accident to clean up.
- Don't push or open a PR without asking first.

## Boundaries

- Don't touch `drizzle/meta/` (auto-generated migration metadata).
- Don't modify `.husky/` hooks without flagging it first.
