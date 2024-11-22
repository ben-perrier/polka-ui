# syntax = docker/dockerfile:1

FROM node:20-alpine

# Create /app directory in the image
WORKDIR /app

# Copy package and package.lock.json to the /app directory
COPY package*.json .
# TODO: Add ts config file if needed

RUN npm install

# copy from source to destination, except whats in dockerignore
COPY . .

#CMD [ "npm","run","inspect" ]

CMD [ "npm","start" ]


EXPOSE 4000