FROM node:lts-alpine AS builder
WORKDIR /app

# Install pnpm
RUN corepack enable pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install ALL dependencies (including dev) for building
RUN pnpm install --frozen-lockfile

# Copy source & build
COPY . .
RUN pnpm run build

# ---------- Runtime ----------
FROM nginx:stable-alpine

# Create custom nginx config for port 3002
RUN echo 'server { \
    listen 3002; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 3002
CMD ["nginx", "-g", "daemon off;"]