<div align="center">
  <h1>🚀 Vue3 + Vite + Element Plus</h1>
  <p>A modern, fast, and elegant web application template</p>

  [![Vue](https://img.shields.io/badge/Vue-3.5.26-brightgreen.svg)](https://vuejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF.svg)](https://vitejs.dev/)
  [![Element Plus](https://img.shields.io/badge/Element%20Plus-2.13.1-409EFF.svg)](https://element-plus.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

  <p>
    <a href="#features">Features</a> •
    <a href="#quick-start">Quick Start</a> •
    <a href="#project-structure">Structure</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#scripts">Scripts</a>
  </p>
</div>

---

## ✨ Features

- ⚡ **Lightning Fast** - Powered by Vite for instant server start and blazing fast HMR
- 🎨 **Modern UI** - Beautiful components from Element Plus with customizable themes
- 📦 **Component Auto Import** - Automatic on-demand component and API imports
- 🔒 **TypeScript** - Full type safety with TypeScript support
- 🎯 **Vue 3 Composition API** - Modern, flexible, and maintainable code structure
- 📱 **Responsive Design** - Mobile-first approach with responsive layout
- 🔌 **State Management** - Pinia for intuitive state management
- 🛣️ **Vue Router** - Declarative routing with dynamic route configuration
- 🎭 **Theme Switching** - Built-in light/dark theme support
- 📊 **Data Visualization** - Charts and data display components
- 🔧 **Developer Experience** - ESLint, Prettier, and Commitizen for code quality
- 📝 **Rich Examples** - Comprehensive examples and interactive demos

## 🎯 Quick Start

### Prerequisites

Make sure you have the following installed:

- **Node.js** >= 16.x
- **pnpm** >= 8.x (recommended)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/liubaicai/vue3_ele_vite.git
cd vue3_ele_vite
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start development server**

```bash
pnpm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

## 📁 Project Structure

```
vue3_ele_vite/
├── public/              # Static assets
├── src/
│   ├── api/            # API service modules
│   ├── assets/         # Images, styles, fonts
│   ├── components/     # Reusable components
│   │   └── global/    # Global components
│   ├── composables/   # Vue composables
│   ├── pages/         # Page components
│   │   └── main/      # Main application
│   │       ├── router/   # Route configuration
│   │       └── views/    # View components
│   ├── plugins/       # Vue plugins
│   ├── stores/        # Pinia stores
│   ├── utils/         # Utility functions
│   └── types.d.ts     # TypeScript declarations
├── build/             # Build configuration
├── index.html         # Entry HTML file
├── vite.config.ts     # Vite configuration
└── tsconfig.json      # TypeScript configuration
```

## 🛠️ Tech Stack

### Core

- **[Vue 3](https://vuejs.org/)** (v3.5.26) - Progressive JavaScript framework
- **[Vite](https://vitejs.dev/)** (v7.3.1) - Next generation frontend tooling
- **[TypeScript](https://www.typescriptlang.org/)** (v5.9.3) - Typed JavaScript

### UI Framework

- **[Element Plus](https://element-plus.org/)** (v2.13.1) - Vue 3 component library

### State Management & Routing

- **[Pinia](https://pinia.vuejs.org/)** (v3.0.4) - Intuitive state management
- **[Vue Router](https://router.vuejs.org/)** (v4.6.4) - Official router for Vue.js

### Utilities

- **[Axios](https://axios-http.com/)** (v1.13.2) - Promise-based HTTP client
- **[Lodash](https://lodash.com/)** (v4.17.21) - Modern JavaScript utility library
- **[Day.js](https://day.js.org/)** (v1.11.19) - Fast date library
- **[NProgress](https://github.com/rstacruz/nprogress)** (v0.2.0) - Progress bar

### Development Tools

- **[ESLint](https://eslint.org/)** (v9.39.2) - Code linting
- **[Prettier](https://prettier.io/)** (v3.7.4) - Code formatting
- **[Sass](https://sass-lang.com/)** (v1.97.1) - CSS preprocessor
- **[Vitest](https://vitest.dev/)** (v4.0.16) - Unit testing framework
- **[Commitizen](https://github.com/commitizen/cz-cli)** (v4.3.1) - Standardized commits

### Build Plugins

- **unplugin-auto-import** - Auto import APIs
- **unplugin-vue-components** - Auto import components
- **vite-plugin-svg-icons** - SVG icon solution
- **rollup-plugin-visualizer** - Bundle size visualization

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run build:vite` | Build with type checking |
| `pnpm run preview` | Preview production build |
| `pnpm run type-check` | Run TypeScript type checking |
| `pnpm run lint` | Lint and fix code |
| `pnpm run commit` | Commit with Commitizen |

## 🎨 Features Showcase

### Interactive Components

- **Form Components** - Input, Select, Date Picker, Switch, Slider, and more
- **Data Display** - Table, Tree, Pagination with sorting and filtering
- **Feedback** - Message, Notification, Dialog, Drawer
- **Navigation** - Menu, Tabs, Breadcrumb
- **Layout** - Responsive grid system

### Theme Customization

The template includes built-in light and dark theme support. You can easily switch themes or customize colors to match your brand.

### State Management

Pinia stores provide a clean, type-safe way to manage application state with minimal boilerplate.

### Routing

Dynamic route configuration with lazy loading for optimal performance.

## 📝 Recommended IDE Setup

- **[VSCode](https://code.visualstudio.com/)** - Code editor
- **[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)** - Vue 3 language support
- **[TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)** - TypeScript support for Vue

### VSCode Extensions

```json
{
  "recommendations": [
    "Vue.volar",
    "Vue.vscode-typescript-vue-plugin",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss"
  ]
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes using Commitizen (`pnpm run commit`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) with Commitizen. Use `pnpm run commit` to ensure your commit messages follow the convention.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vue.js Team](https://github.com/vuejs) - For the amazing Vue 3 framework
- [Vite Team](https://github.com/vitejs) - For the blazing fast build tool
- [Element Plus Team](https://github.com/element-plus) - For the beautiful UI components

## 📮 Contact

- **Project Repository**: [https://github.com/liubaicai/vue3_ele_vite](https://github.com/liubaicai/vue3_ele_vite)
- **Issue Tracker**: [https://github.com/liubaicai/vue3_ele_vite/issues](https://github.com/liubaicai/vue3_ele_vite/issues)

---

<div align="center">
  Made with ❤️ by the Vue community
</div>
