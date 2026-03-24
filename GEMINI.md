# Anthony Ruiz Portfolio - Project Overview

A professional portfolio website for Anthony Ruiz, built with **Astro 5**, **React**, and **Tailwind CSS 4**. The site features a responsive design, dynamic project pages, a contact form with EmailJS integration, and bilingual support (English and Spanish).

## 🛠️ Main Technologies
- **Framework:** [Astro 5](https://astro.build/) (using React and Vercel integrations)
- **Frontend Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **UI Components:** [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), and custom components
- **Animations:** `tw-animate-css`
- **Carousel:** [Embla Carousel](https://www.embla-carousel.com/)
- **Form Handling:** [EmailJS](https://www.emailjs.com/)
- **Content Management:** Astro Content Collections (Markdown-based)
- **Deployment:** [Vercel](https://vercel.com/)

## 📂 Project Structure
- `src/pages/`: Contains the main routes.
  - `index.astro` / `es/index.astro`: Homepages for English and Spanish.
  - `[id].astro` / `es/[id].astro`: Dynamic routes for individual project details.
- `src/content.config.ts`: Defines the project collections schema and loaders.
- `src/data/projects/`: Markdown files (`.md`) containing project metadata and descriptions for both languages.
- `src/components/`:
  - `section/`: Large sections like `AboutMe`, `Projects`, `Contact`, etc.
  - `ui/`: Lower-level UI primitives (buttons, cards, carousels, drawers).
- `src/layouts/`: Base layouts for the site.
- `src/assets/`: Static assets like PDFs and images used in the source.
- `public/`: Publicly accessible static assets, including project screen captures.

## 🧞 Commands
All commands are run from the root of the project:

| Command | Action |
| :--- | :--- |
| `pnpm install` | Installs project dependencies |
| `pnpm dev` | Starts local development server at `localhost:4321` |
| `pnpm build` | Builds the production site to `./dist/` |
| `pnpm preview` | Previews the build locally |
| `pnpm astro ...` | Runs Astro CLI commands |

## 📝 Development Conventions
- **Component Strategy:** Use **Astro components** (`.astro`) for static sections and layouts. Use **React components** (`.tsx`) for interactive elements like forms, carousels, and mobile navigation.
- **Styling:** Primarily use **Tailwind CSS 4** utility classes. Global variables and base styles are located in `src/styles/global.css`.
- **Content:** Project data is managed via Markdown files in `src/data/projects/{en|es}`. New projects should follow the schema defined in `src/content.config.ts`.
- **Localization:** Pages under `src/pages/es/` handle the Spanish version. Ensure all content has an equivalent in both `en` and `es` data folders.
- **Icons:** Use `astro-icon` for static icons and `lucide-react` within React components.
