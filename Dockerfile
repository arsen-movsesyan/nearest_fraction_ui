FROM node:latest as node
WORKDIR /app
COPY . .

RUN npm install

RUN npm run build

#stage 2

FROM nginx:latest

COPY --from=node /app/dist/fnf_ui /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
