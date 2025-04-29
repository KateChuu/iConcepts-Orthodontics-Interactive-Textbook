<!-- @format -->

# iConcepts Textbook

Project iConcepts is aimed at developing an interactive textbook in orthodontics that enables medical students to learn at their own pace.

## Additional Note

This project was initially developed by the previous group for the subject, and now Team RedBack both works on the codebase and maintains the project. All development work is committed directly to the [repository](https://github.com/FEIT-COMP90082-2025-SM1/IC-RedBack/tree/main/src). Please refer to the information in the shared repository for setting up and running the project. The code in the shared repo is integrated as Git submodules. This team repository will be responsible for documentation updates.
Project milestones and issues can be checked to the [Issues](https://github.com/orgs/FEIT-COMP90082-2025-SM1/projects/33/views/1)

## Project Contacts

-   Client: Dr. Shazia Naser-ud-Din: `shazia.naseruddin@unimelb.edu.au`
-   Supervisor: Jim Hsiao: `jim.hsiao@unimelb.edu.au`

## Project Structure

```         
.
├── .DS_Store
├── .prettierrc
├── README.md               // project intro and workflow
├── package.json
├── package-lock.json
├── .github/workflow        // code review configuration
├── docs/                   // documentation
│   └──                     // (resources folder not visible in image)
├── node_modules/           // dependencies
├── src/                    // source code folder
│   ├── backend/            // backend code
│   ├── frontend/           // frontend code
|   ├── README.md           // frontend confihuration
|   └── .DS_Store

```

## Styles & Conventions

The repository enforces some rules for the team:

### Style

Code style is enforced by `eslint` and `prettier`. Each time before you commit your code, please run:

``` bash
npm run lint
```

### File Name Convention

-   Since `Next.js` imposes [file-based routing](https://nextjs.org/docs/pages/building-your-application/routing), file names/paths should follow Next.js rules.
-   React components should always have the `.tsx` extension to avoid compilation errors.

### Branch Name Conventions

The new name of the branch should follow the style `<type>/<short-name>`, where types can be:

-   `feat`: for new features or user stories
-   `fix`: for bug fixes
-   `perf`: for performance improvements

Please **do not** name your branch with your name (e.g., `feat/alex`).

### Commit Rules

-   Please merge your branch to `code-review`, **DO NOT** merge your branches directly into `main`.
-   Raise a Pull Request before merging into `code-review`.
-   At the end of each sprint, we will raise a PR to merge `code-review` into `main`, since the code on `main` should always be working.

## Additional Resources

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
