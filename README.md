# Vue 3 + TypeScript + Vite + Element Plus

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Package Manager

This project uses **pnpm** for package management. Make sure you have pnpm installed:

```bash
npm install -g pnpm
```

## Project Setup

### Install dependencies

```bash
pnpm install
```

### Development

```bash
pnpm run dev
```

### Build

```bash
pnpm run build:vite
```

### Preview

```bash
pnpm run preview
```

### Lint

```bash
pnpm run lint
```

### Type Check

```bash
pnpm run type-check
```

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Versions

- Vue: ^3.5.26
- Element Plus: ^2.13.0
- Vite: ^7.3.0
- TypeScript: ^5.9.3
- Pinia: ^3.0.4
- Vue Router: ^4.6.4
