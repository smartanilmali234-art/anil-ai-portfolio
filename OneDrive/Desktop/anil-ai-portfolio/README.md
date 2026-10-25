# Anil Mali — AI/ML Portfolio

A responsive React portfolio with a terminal-inspired interface, education timeline, career journey, skills, featured projects, learning log, certifications, contact links, portrait, and downloadable resume.

## 1. Install the tools

- Install Node.js 22 LTS (npm is included).
- Install Git.
- Sign in to GitHub and create a repository named `anil-ai-portfolio`.

## 2. Open and run the project

Open this folder in Visual Studio Code. In its integrated terminal, run:

```sh
npm install
npm run dev
```

Open the local address printed by Vite (usually `http://localhost:5173`). Stop the server with `Ctrl+C`.

To make a production build and preview it locally:

```sh
npm run build
npm run preview
```

## 3. Personalize your portfolio

- Edit profile details, career journey, education, skills, project descriptions, learning topics, and certifications in `src/data.js`.
- Add each project's actual public repository URL to that project's `url` field. A project only shows a source button when a URL is present.
- Replace `public/Anil_Mali_Portrait.jpeg` with your portrait, keeping the same filename, or update its reference in `src/components/Hero.jsx`.
- Replace `public/Anil_Mali_Resume.pdf` with your current PDF resume, keeping the same filename, or update `resumePath` in `src/data.js`.
- Project screenshots belong in `public/projects/`; reference them from `src/data.js` with paths relative to `public` (for example, `projects/example.png`).
- Adjust the page title and description in `index.html` and the appearance in `src/index.css`.
- The terminal in `src/components/Terminal.jsx` only navigates this portfolio; it does not execute operating-system commands.

## 4. Put the code on GitHub

In the project folder, initialize Git if needed, add the files, make a first commit, and push the `main` branch to your GitHub repository. Do not add passwords, API keys, or private environment files to the repository.

## 5. Deploy with GitHub Pages

This project repository is expected to be named `anil-ai-portfolio`. Its matching Vite base path is configured in `vite.config.js`.

1. Push the project to the `main` branch. The workflow at `.github/workflows/deploy.yml` builds the site and deploys it on every push to `main`.
2. In GitHub, open the repository's **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
3. Open the repository's **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish successfully.
4. Open the published Pages URL shown by the workflow or in **Settings → Pages**.

If you use a different repository name, change `base` in `vite.config.js` to `/<repository-name>/` before pushing. For a user site repository named `smartanilmali234-art.github.io`, use `/` instead.

## Project structure

```text
public/                 Static images, favicon, resume, and project screenshots
src/App.jsx              Page layout, navigation, sections, and portfolio terminal
src/components/          Reusable portfolio sections
src/data.js              Editable profile and portfolio content
src/index.css            Responsive theme, layout, and animations
src/main.jsx             React entry point
vite.config.js           Vite and GitHub Pages base path
.github/workflows/       Automatic GitHub Pages deployment
```

## Main commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Create the production site in `dist/` |
| `npm run preview` | Preview the production build locally |

## License

Portfolio content and personal assets belong to Anil Mali. Contact the owner before reusing them.
