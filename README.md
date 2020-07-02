# js-app-playground

Goal: build a playground project (spa-like app with random features) with React ([Next.js](https://nextjs.org/)) at the frontend and Node.js at the backend
and then rewrite frontend with [Svelte](https://svelte.dev/) or other framework.

It means using stuff and writing frontend code as less coupled to React as possible to be able to reuse it later.

And another goal is just to try to use or implemenent a lot of different stuff on the way and having fun.

Frontend:

```
yarn front dev
#or
yarn front:start:dev
```

Backend:

```
yarn back start:dev
#or yarn back:start:dev
```

App uses commitizen to create commit messages following to conventional commits spec.
`yarn commit` command starts a nice CLI to create commit with "conventional" description.
Also app uses yarn workspaces:

- to add a common package: `yarn add <package-name> -W`
- to add a workspace-specific package: `yarn workspace <ws-name> add <package-name>`, current workspaces also have aliases, so its possible to, for e.g., `yarn front add some-package`
