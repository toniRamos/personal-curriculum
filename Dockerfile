# Etapa base
FROM node:24-alpine AS base
WORKDIR /app

# Dependencias
FROM base AS deps
COPY package*.json ./
RUN npm ci --only=production --silent

# Dev (con hot reload)
FROM base AS dev
COPY package*.json ./
RUN npm install --silent
COPY . .
EXPOSE 4321
CMD ["npm","run","dev"]

# Build
FROM base AS build
COPY package*.json ./
RUN npm ci --only=production --silent
COPY . .
RUN npm run build

# Serve estático (opcional, si usas adaptador estático)
FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
