# Capstone Project

A React-based web application featuring sections for heroes, planets, video, facts, and contact — built with Vite and organized using a feature-based architecture.

---

## Project Structure

```
capstone-project/
│
├── src/
│   ├── features/
│   │   ├── hero/
│   │   │   ├── HeroSection.jsx
│   │   │   └── hero.css
│   │   │
│   │   ├── planets/
│   │   │   ├── api/
│   │   │   │   └── planetApi.js
│   │   │   ├── hooks/
│   │   │   │   └── usePlanets.js
│   │   │   ├── pages/
│   │   │   │   └── PlanetPage.jsx
│   │   │   ├── services/
│   │   │   │   └── planetService.js
│   │   │   └── utils/
│   │   │       └── formatDistance.js
│   │   │
│   │   ├── video/
│   │   │   └── VideoSection.jsx
│   │   │
│   │   ├── facts/
│   │   │   └── FactsSection.jsx
│   │   │
│   │   └── contact/
│   │       ├── ContactSection.jsx
│   │       ├── validation.js
│   │       └── contactService.js
│   │
│   ├── hooks/
│   │   ├── useScrollToSection.js
│   │   └── useFetch.js
│   │
│   ├── services/
│   │   └── axios.js
│   │
│   ├── utils/
│   │   ├── scrollToElement.js
│   │   └── validators.js
│   │
│   ├── constants/
│   │   └── routes.js
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

---

## Folder Breakdown

### `features/`
Self-contained feature modules. Each feature owns its own components, logic, and utilities.

- **`hero/`** — Hero section component and its styles.
- **`planets/`** — Full-featured planets module:
  - `api/` — Raw API call functions (e.g., fetch from a planets API).
  - `hooks/` — Custom React hooks (e.g., `usePlanets` for data fetching logic).
  - `pages/` — The planet detail/listing page component.
  - `services/` — Business logic layer between the API and the UI.
  - `utils/` — Feature-specific helpers (e.g., formatting distance values).
- **`video/`** — Video section component.
- **`facts/`** — Facts section component.
- **`contact/`** — Contact section, form validation logic, and contact submission service.

### `hooks/`
Shared custom React hooks used across multiple features.

- `useScrollToSection.js` — Handles smooth scrolling to a page section.
- `useFetch.js` — Generic data fetching hook.

### `services/`
Global service configuration.

- `axios.js` — Axios instance with base URL, headers, and interceptors.

### `utils/`
Shared utility functions used throughout the app.

- `scrollToElement.js` — DOM helper for scrolling to elements.
- `validators.js` — Common validation logic (e.g., email, required fields).

### `constants/`
App-wide constant values.

- `routes.js` — Route path definitions.

### `pages/`
Top-level page components rendered by the router.

- `Home.jsx` — The main home page, composing feature sections together.

### Root files

- `App.jsx` — Root component; sets up routing and global providers.
- `main.jsx` — Entry point; renders `App` into the DOM.
- `.env` — Environment variables (e.g., API base URL). **Not committed to version control.**
- `vite.config.js` — Vite build configuration.

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/capstone-project.git
cd capstone-project
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://your-api-url.com
```

### Running the App

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

---

## Tech Stack

- **React** — UI library
- **Vite** — Build tool and dev server
- **Axios** — HTTP client
- **React Router** — Client-side routing
