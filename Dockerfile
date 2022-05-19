FROM node:14.17.0-alpine

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN "npm install"

COPY ./ ./

CMD ["node", "./bin/www"]
