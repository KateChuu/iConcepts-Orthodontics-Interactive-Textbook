# IC-src

This repository contains the source code of the iConcepts application, maintained by IC-RedBack.

Please sign up for an account to access our website:
[iConcepts Website](https://iconceptsorthodontics.vercel.app/)

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [IC-src](#ic-src)
  - [Main Technologies](#main-technologies)
  - [Design Architecture](#design-architecture)
  - [Directory Structure](#directory-structure)
  - [Usage](#usage)
    - [For End Users](#for-end-users)
    - [For Developers](#for-developers)
  - [Requirements](#requirements)
    - [Prettier](#prettier)
    - [Dependencies](#dependencies)
  - [Workflow](#workflow)
  - [Deployment Manuals](#deployment-manuals)
  - [Additional Resources](#additional-resources)
  - [Contributiors](#contributiors)

<!-- TOC end -->

## Main Technologies

| Area           | Tech Stack                                                                                                 | Description                                                                                                                                | 
|----------------|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Language       | [TypeScript](https://www.typescriptlang.org/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | TypeScript is used for type safety and scalability, while JavaScript ensures compatibility and flexibility in front-end development.       |
| Framework      | [React](https://reactjs.org/), [Next.js](https://nextjs.org/)                                              | React provides a component-based UI structure, and Next.js enhances it with server-side rendering, routing, and performance optimisation.  |
| Styling        | [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/)                                  | Tailwind offers a utility-first CSS approach for rapid UI development, while PostCSS enables advanced CSS transformations and plugins.     |
| Authentication | [Clerk](https://clerk.dev/)                                                                                | The application integrates Clerk for user authentication and management, enhancing security and user experience.                           |
| Deployment     | [Vercel](https://vercel.com/)                                                                              | The source code is hosted on Vercel, providing a fast and scalable web application without the need for a backend.                         |
| Cloud Storage  | [Cloudinary](https://cloudinary.com/)                                                                      | Images and videos are transferred and stored on a third-party cloud service to improve performance by reducing the amount of data loaded.  |
| Video Analytics      | [Cloudinary Video Dashboard](https://cloudinary.com/documentation/assets_onboarding_dashboard_reports_tutorial?utm_source=chatgpt.com) | Helps monitor active users, their countries, video clicks, watch time, and more to understand user engagement.                             |
| Chapter Analytics      | [Vercel Analytics](https://vercel.com/docs/analytics/using-web-analytics)                                   | Tracks page views, bounce rate, and user behavior by chapter click data for frontend performance and usage insights.                       |

## Design Architecture
The system architecture of the *IConcept Orthodontics* website is built on a modern serverless stack. The frontend is developed using **Next.js** and styled with **Tailwind CSS**, and it is deployed via **Vercel**. User authentication is handled by **Clerk**, while media assets are managed and stored using **Cloudinary**. Users interact with the application through their browser, and all services are seamlessly integrated into the Vercel deployment.

<img width="950" alt="image" src="https://github.com/user-attachments/assets/70a0cdcb-d54e-4496-be73-fccb7f4ff498" />


## Directory Structure

```plaintext
.

├── backend/            // backend code
├── frontend/           // frontend code
│   ├── public          // Next.js icons or logos
│   ├── src             // Next.js source code
├── README.md           // frontend configuration
└── .DS_Store

```

## Usage

### For End Users

1. Open <https://iconceptsorthodontics.vercel.app/>.
2. Register an account or sign-in the demo account (ID: sangmoonh / Password: sangmoonh).

### For Developers

1. Install software following [Requirements](#requirements).
2. Activate the frontend in the terminal.

```sh
cd IC-src/frontend
npm run dev
# yarn dev  # alternatives
# pnpm dev
# bun dev
```

3. Visit `http://localhost:3000` in the browser to see the frontend page.

> [!WARNING]
>
> This project uses [LastPass](https://lastpass.com/) for password management. Do not hardcode passwords in the codebase or expose them to external stakeholders. Please contact management staff if you require relevant access.

## Requirements


### Prettier

This extension ensures a consistent style for frontend coding files.

1. Install [Prettier on VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
2. Use Prettier to format files. You can also configure "Format on Save."


### Dependencies

Install dependencies for JavaScript (Node.js 20.x).

```sh
cd IC-src/frontend
npm install
```
## Workflow
See [README.md](https://github.com/FEIT-COMP90082-2025-SM1/IC-RedBack/blob/main/README.md#styles--conventions) in the parent folder for styles and conventions.

## Deployment Manuals
### Deployment via Vercel
This project is connected to **Vercel** through **GitHub integration**. Each push to the `main` branch of the origin repository will trigger a new deployment automatically via Vercel’s built-in **CI/CD pipeline**.

**Repository:**
[https://github.com/icredback/iConcepts-Orthodontics](https://github.com/icredback/iConcepts-Orthodontics)


### Automatic Deployment (CI/CD)
1. Ensure your changes are pushed to the `main` branch.
2. Vercel will automatically deploy the latest version using its CI/CD workflow.
3. You can monitor build status and live deployments directly on your [Vercel Dashboard](https://vercel.com/).

### Environment Variables
Environment variables must be configured in your Vercel project settings:
> **Vercel → Project Settings → Environment Variables**

**Important Guidelines:**
* **Do NOT commit credentials** or sensitive information to Git.
* Add `.env`, `.env.local`, and similar files to `.gitignore`.
* Only expose variables using the `NEXT_PUBLIC_` prefix if they need to be available on the client side (e.g., in the browser).
* Cloudinary API **keys should not be exposed**; only use public delivery URLs (e.g., `https://res.cloudinary.com/...`).

### Security Notes
* Do **not hardcode passwords** or secrets in the codebase.
* The project uses [LastPass](https://lastpass.com/) for secure password sharing.
  Contact the management team if access is needed.

### Additional Notes
* This project is a **front-end-only** educational platform.
* There is **no custom backend** or database configured.
* User authentication is handled via [Clerk](https://clerk.dev/).
* All media content (images/videos) is hosted and optimized via [Cloudinary](https://cloudinary.com/).
 
## Additional Resources

- [Learn Next.js](https://nextjs.org/learn)
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
- [Vercel Deployment With GitHub Actions](https://youtu.be/FHVaWZjWec4)

## Contributiors

- Product Owner : Po-Yun Hsiao (Harold) 
- Scrum Master : Sangmoon Han 
- Quality Assurance Lead :  Man-Hua Chu (Kate)
- Deployment Lead : Soyeon Park
- Architecture Lead : Yu-Tse Ling (Zona) 
