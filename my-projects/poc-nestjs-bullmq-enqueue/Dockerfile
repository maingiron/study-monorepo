# ---------- Stage 1: build ----------
FROM node:22-alpine AS builder
WORKDIR /app

# Instala dependências (inclui dev, necessárias para o build)
COPY package*.json ./
RUN npm ci

# Compila o TypeScript para dist/
COPY tsconfig*.json nest-cli.json ./
COPY src ./src
RUN npm run build

# ---------- Stage 2: runtime ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Apenas dependências de produção
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Artefato compilado
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/main.js"]
