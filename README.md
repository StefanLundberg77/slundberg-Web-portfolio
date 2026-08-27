# Stefan Lundberg — Developer Portfolio

A modern, responsive portfolio website built with **React**, **TypeScript**, and **Vite**. Showcasing work within game development, AI systems (RAG architecture), and fullstack software engineering.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS with CSS custom properties (Modern Dark Theme & Glassmorphism)
- **Forms**: [Web3Forms API](https://web3forms.com/) for contact messaging

---

## ✨ Key Features

- **Bilingual Support**: Built-in instant switching between Swedish (SV) and English (EN) using a lightweight React Context implementation.
- **Interactive Project Showcases**:
  - **LIA 2 (Fullstack & AI @ Orbislinks)**: Career portal, B2P2P MVP, feedback RAG analyzer, and web scraping.
  - **LIA 1 (Game Dev @ Northhack Media)**: Unity/C# network synchronization, projectile systems, and thread safety.
  - **No Final Run**: Game direction, mechanics design, and project leadership.
  - **Multimodal RAG for POS Systems**: Interactive architectural comparison (Local Open Source vs. Azure Enterprise Cloud).
  - **PNS**: Web-based POS system with FastAPI and SQLite.
- **Interactive Competence Modal**: Category-filtered breakdown of skills, frameworks, tools, and methodologies.
- **Contact Form**: Functional, secure client-side form dispatching emails via Web3Forms.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/StefanLundberg77/slundberg-portfolio.git
   cd slundberg-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Add your Web3Forms access key in `.env`:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
slundberg-portfolio/
├── public/              # Static public assets
├── src/
│   ├── assets/          # Images, screenshots, and visual media
│   ├── components/      # Modular React UI components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── context/         # React Context for Language/Localization
│   ├── translations.ts  # Swedish and English content definitions
│   ├── App.tsx          # Root application component
│   └── main.tsx         # Application entry point
├── .env.example         # Environment template
└── vite.config.ts       # Vite build configuration
```

---

## 📄 License & Copyright

Copyright © 2026 **Stefan Lundberg**. All rights reserved.

The source code in this repository is made publicly available for portfolio evaluation and code review purposes only. The design, branding, textual content, and custom visual assets may not be reproduced, copied, distributed, or repurposed for commercial or personal production use without prior written permission.
