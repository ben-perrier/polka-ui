# Polka

- A React single page app
- [transpiled from Typescript](https://eisenbergeffect.medium.com/an-esbuild-setup-for-typescript-3b24852479fe)
- [built with Esbuild](https://eisenbergeffect.medium.com/an-esbuild-setup-for-typescript-3b24852479fe)
- [deployed on push using git actions](https://fly.io/docs/launch/continuous-deployment-with-github-actions/)
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

## Deploy to fly.io on push

This repo is set up to deploy the app directly to fly.io whenever code is pushed to the `main` branch.
This is done using github actions, see https://fly.io/docs/launch/continuous-deployment-with-github-actions/

### Check pipeline

See [github actions section on the repo](https://github.com/ben-perrier/polka-ui/actions/) to check on deployment status and re-run deployment.

### Watch and monitor app deployment

Watch your deployment at https://fly.io/apps/polka-ui/monitoring

## Docker image

The docker image is used to deploy the app to fly.io using github actions.
See ./DockerFile

### Build image

Builds an image named `polka` tagged `dev` in this folder `.`

```sh
docker build -t polka:dev .
```

### Run image

Runs the image and maps container port 4000 to machine port 4000

```sh
docker run -p 4000:4000 polka:dev
```

`Serving app at 0.0.0.0:4000`

Access app at http://localhost:4000 in browser

### Inspect image

Show all containers:

```sh
docker ps

CONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS         PORTS                    NAMES
d06f8c66e40a   polka:dev   "docker-entrypoint.s…"   7 minutes ago   Up 2 minutes   0.0.0.0:4000->4000/tcp   fervent_hertz
```

Get the container id and use it for:

- docker logs
- [docker inspect](https://docs.docker.com/reference/cli/docker/inspect/)

```sh
docker logs d06f8c66e40a
docker inspect d06f8c66e40a
```
