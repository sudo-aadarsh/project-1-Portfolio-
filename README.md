# ⚡ Aadarsh Jha — Developer Portfolio

[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-00f0ff.svg)](LICENSE)

A high-performance, reactive developer portfolio showcasing systems engineering, web apps, algorithms, and open-source projects. Built with **React 19**, **Vite**, **Tailwind CSS 4**, and **Framer Motion**.

🔗 **Live Demo:** [https://sudo-aadarsh.netlify.app/](https://sudo-aadarsh.netlify.app/)

---

## ✨ Features

- **Cyberpunk Terminal Boot Sequence:** Immersive Matrix rain effect, scanning lines, and glitch-revealed system initialization.
- **Offline & Mobile-Resilient Projects Showcase:**
  - Dynamically fetches repositories via GitHub API with automated client-side caching.
  - Built-in curated fallback catalog ensuring 100% uptime on mobile devices, offline environments, or when GitHub API rate limits are reached.
  - Context-aware photography matching for key projects.
- **Interactive Code Snippets:** Live typewriter-animated syntax cards highlighting full-stack and systems architectures.
- **Glassmorphic Cyberpunk Theme:** Neon Cyan glow effects, frosted glass surfaces, custom scrollbars, and fluid typography.
- **Fully Responsive & Accessible:** Optimized layout tested across mobile viewports, tablets, and desktop displays.
- **Functional Contact Gateway:** Direct email and Formspree integration with instant submission telemetry and error handling.

---

## 🛠️ Tech Stack

| Domain | Technologies |
|---|---|
| **Framework & UI** | [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/) |
| **Tooling & Bundler** | [Vite 8](https://vitejs.dev/), [PostCSS](https://postcss.org/) |
| **Motion & Animation** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/), [Lucide React](https://lucide.dev/) |
| **Linting & Quality** | [ESLint 10](https://eslint.org/) with Flat Config |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or newer recommended) and **npm** installed:

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sudo-aadarsh/project-1-Portfolio-.git
   cd project-1-Portfolio-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables (optional):**
   ```bash
   cp .env.example .env
   ```
   Add your Formspree form ID to `.env`:
   ```env
   VITE_FORMSPREE_ID=your_formspree_id_here
   ```

4. **Start local development server:**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) or check the printed network address to view on your mobile device.

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```text
├── public/                 # Static public assets (icons, resume, profile photo)
├── src/
│   ├── assets/             # Brand graphics and images
│   ├── components/
│   │   ├── Navbar.jsx      # Floating responsive navigation bar
│   │   ├── Hero.jsx        # Landing hero with animated binary scrambler
│   │   ├── CodeSnippet.jsx # Interactive syntax highlight cards
│   │   ├── About.jsx       # Biography and skills grid
│   │   ├── Projects.jsx    # Resilient projects grid with GitHub sync & cache
│   │   ├── Contact.jsx     # Formspree contact form and social channels
│   │   └── LoadingScreen.jsx # Terminal boot sequence & Matrix rain
│   ├── App.jsx             # Main layout & section orchestration
│   ├── index.css           # Global theme variables & Tailwind layer styling
│   └── main.jsx            # Application entry point
├── eslint.config.js        # ESLint flat configuration
├── vite.config.js          # Vite config with React, Tailwind, and host exposure
└── package.json            # Scripts and dependency specifications
```

---

## 📜 License

Distributed under the [MIT License](LICENSE).

Built with passion & precision by **[Aadarsh Jha](https://github.com/sudo-aadarsh)**.
