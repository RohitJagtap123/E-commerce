# ------------------- Stage 1: Build Stage ------------------------------
FROM node:21 AS frontend-builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# ------------------- Stage 2: Final Stage ------------------------------
FROM node:21-slim

WORKDIR /app

COPY --from=frontend-builder /app .

COPY .env .env.local

EXPOSE 3000

CMD ["npm", "start"]