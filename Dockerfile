# ---------- Builder ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Install only production dependencies first (caches better)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source & build
COPY . .
RUN npm run build   # assumes a `build` script that outputs to ./dist

# ---------- Runtime ----------
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: expose default HTTP port
EXPOSE 80

# Use the default nginx entrypoint
CMD ["nginx", "-g", "daemon off;"]