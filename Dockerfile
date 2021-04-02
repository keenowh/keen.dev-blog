FROM node:12-alpine as build
WORKDIR /app
COPY . ./

RUN yarn install
RUN node_modules/.bin/gatsby build

FROM nginx

COPY --from=0 /app/public /usr/share/nginx/html