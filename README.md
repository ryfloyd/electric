## Introduction

This project was thrown together to showcase some of my abilities to get projects up quickly and with "production" quality.

To me, production quality means:
1. Does it solve the problem at hand? Are we reinventing the wheel?
2. Security is paroumount. Don't leak secrets. Use industry standard auth/encryption.
3. How performant does it need to be?
4. How maintainable is it?
5. Are there unit tests?
6. DevX, is it easy to work on?
7. Observability. Is it monitorable? Who gets pinged when it goes down?

## Dev Env

1. Install asdf
1. Use Nodejs latest
1. `yarn`
1. `yarn dev`
1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deployed on Github pages

1. In "settings" on the gitub repo, select "Pages", select "Github Actions"
2. Change the workflow and search for "Next.js", this opens the github editor...commit the file
3. Wait for the action to run. Will output the URL
4. Add `basePath: '/electric'` to next.config.mjs since that's what I called the workflow base path. This will allow the images to load.
