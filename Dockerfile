
FROM node:lts-alpine AS builder
WORKDIR /app

# Install pnpm
RUN corepack enable pnpm

# Install only production dependencies first (caches better)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Copy source & build
COPY . .
RUN pnpm run build   # assumes a `build` script that outputs to ./dist

# ---------- Runtime ----------
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: expose default HTTP port
EXPOSE 80

# Use the default nginx entrypoint
CMD ["nginx", "-g", "daemon off;"]