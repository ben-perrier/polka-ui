# Polka
- A React single page app
- [transpiled from Typescript](https://eisenbergeffect.medium.com/an-esbuild-setup-for-typescript-3b24852479fe)
- [built with Esbuild](https://eisenbergeffect.medium.com/an-esbuild-setup-for-typescript-3b24852479fe)
- [deployed using git actions (TBC)](https://fly.io/docs/launch/continuous-deployment-with-github-actions/)
- [deployed using a docker image](https://www.youtube.com/watch?v=dfTco9hmXEM)

## Getting started

### Install
Install dependencies
```sh
npm i
```

### Start in dev or in production
Regenerates the build and starts the app, watching for file changes.
```sh
npm start
```

### Build
Creates a minified version of the build translpiled from TS
```sh
npm run build
```

### Analyse
Breaks down bundle packages and sizes
```sh
npm run analyze
```

