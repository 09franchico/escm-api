FROM node:16.14.0-alpine

WORKDIR /app

COPY ./yarn.lock .

RUN yarn

RUN yarn cache clean --force

COPY . .

RUN yarn build

EXPOSE 5000

CMD [ "yarn", "start:prod"]
