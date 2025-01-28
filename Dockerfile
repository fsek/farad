FROM node:20 AS vite

WORKDIR /app

COPY ./package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=vite /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
