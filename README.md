# Capstone Project

A React + Vite web application built with a component-first structure and feature-based UI sections for planets, videos, facts, contacts, and footer content.

---

## Project Structure

```
CAPSTONE-PROJECT-14/
├── public/
│   └── _redirects
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   ├── Components/
│   │   ├── Extra-Button/
│   │   │   ├── Button.css
│   │   │   └── Button.jsx
│   │   ├── SectionHeader/
│   │   │   ├── SectionHeader.css
│   │   │   └── SectionHeader.jsx
│   │   └── utils/
│   │       ├── PlanetImages.jsx
│   │       └── ScrollSection.jsx
│   ├── Features/
│   │   ├── Contacts/
│   │   │   ├── ContactForm.css
│   │   │   └── ContactForm.jsx
│   │   ├── Facts/
│   │   │   ├── FactsSection.css
│   │   │   └── FactsSection.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Headers/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   ├── Planets/
│   │   │   ├── PlanetSection.css
│   │   │   └── PlanetSection.jsx
│   │   └── Videos/
│   │       ├── VideoSection.css
│   │       └── VideoSection.jsx
│   └── App.css
│   ├── App.jsx
│   ├── main.jsx
    |── utils/
│       ├── PlanetImages.jsx
│       └── ScrollSection.jsx
|
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## Folder Breakdown

### `src/Components/`
Reusable UI components and section-level widgets.

- `Extra-Button/` — Button component and styles.
- `SectionHeader/` — Section header component and styles.
- `utils/` — Shared component helpers like images and scroll behavior.

### `src/Features/`
Feature sections for the main page.

- `Contacts/` — Contact form layout and styles.
- `Facts/` — Facts section component.
- `Footer/` — Footer area component.
- `Headers/` — Header component and styles.
- `Planets/` — Planets section component.
- `Videos/` — Video section component.

### `src/`
Top-level app files.

- `App.jsx` — Main application component.
- `App.css` — Global styles.
- `main.jsx` — React entry point.

### `public/`
Static assets served by Vite.

- `_redirects` — Redirect rules for hosting.

### Root files

- `eslint.config.js` — ESLint configuration.
- `index.html` — HTML app shell.
- `package.json` — Dependencies and npm scripts.
- `README.md` — Project documentation.
- `vite.config.js` — Vite configuration.

---

## Reports

### Project Overview
This is the capstone project for group 14 which has been hosted on netlify with this link "https://capstone-project-14.netlify.app/". 

### Feature Status
We had issues with the endpoint for rendering images and submitting form which made us to inolve backup images in the planet sections and also used proxy in the form submission sections.
### Names, Github link, and contributions of member.
* Igba Simon (Group lead), Link : "https://github.com/simonigba/CAPSTONE", Contribution: I worked as the group lead, I worked on the image, video sections, and I lead in the building the components(Button and header), and the form section.
* Agbaje Abdulwasiu O (Assistant Lead), Link: "https://github.com/Olakiitan20", Contribution: He worked on the header and footer sections in collaboration with others contribution.
* Edward isaac, Link: "https://github.com/Edwardisaac4", Contribution: Worked on the table sections.
* keke Otis, Link: "https://github.com/kekeotis", Contribution: He fixed the back up images since the Api images was breaking and not returning well.
* Irene Iruoma, Link: "https://github.com/IreneIruoma", Contribution: Fixed the responsiveness of the header section.
* Wali David, Link: "https://github.com/walidavid", "No project contribution but added his name.


---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
npm install
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

## Notes

- Add new report content under the `Reports` section above.
- Keep this README updated when adding or reorganizing components.
