# CV Generator

**Live:** [https://cv.lastivka.xyz](https://cv.lastivka.xyz/)

A simple, client-side CV generator built with Vue 3 and Vite. No backend, no database — all data is stored in the browser's `localStorage`.

## Features

- **3 templates**: Classic, Modern, Minimal
- **Multi-language**: Czech (CS) and English (EN)
- **Live preview** with A4 page break indicators
- **PDF export** via browser print (`Ctrl+P`)
- **Photo upload** (stored as Base64 in localStorage)
- **Auto-save** — all form data persists in the browser

## Tech Stack

- [Vue 3](https://vuejs.org/) (Composition API, SFC)
- [Vite](https://vitejs.dev/) (build tool)
- [vue-i18n](https://vue-i18n.intlify.dev/) (internationalization)

## Development

### Prerequisites

- Node.js >= 18
- yarn (or npm)

### Install & Run

```bash
yarn install
yarn dev
```

The dev server starts at `http://localhost:5173` by default.

### Build for Production

```bash
yarn build
```

Static files are output to the `dist/` directory.

### Preview Production Build

```bash
yarn preview
```

## Docker

### Quick Start

```bash
docker compose up -d
```

The app will be available at `http://localhost:8080`.

### Configuration

You can change the exposed port via the `PORT` environment variable:

```bash
PORT=3000 docker compose up -d
```

### Build & Run Manually

```bash
docker build -t cv-generator .
docker run -d -p 8080:80 cv-generator
```

## Project Structure

```
src/
├── assets/css/          # Global styles + template styles
├── components/
│   ├── form/            # Form input components
│   ├── templates/       # CV template components (Classic, Modern, Minimal)
│   ├── FormPanel.vue    # Left panel with form
│   ├── PreviewPanel.vue # Right panel with live preview
│   └── LanguageSwitcher.vue
├── composables/         # Reusable composition functions
├── i18n/                # Translation files (cs.json, en.json)
├── store.js             # Reactive store with localStorage persistence
├── main.js              # App entry point
└── App.vue              # Root component
```

## License

MIT
