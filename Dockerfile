# ==========================================
# Base image
# ==========================================
FROM node:20-alpine AS base
# Vô hiệu hoá telemetry của Next.js (làm giảm thời gian build)
ENV NEXT_TELEMETRY_DISABLED=1

# ==========================================
# Stage 1: Install dependencies
# ==========================================
FROM base AS deps
# Thư viện dùng chung cần cho alpine Linux để Next.js compiler chạy mượt
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
# Cài đặt tốc độ cao, bỏ qua kiểm tra audit và fund reporting
RUN npm ci --no-audit --no-fund

# ==========================================
# Stage 2: Build the application
# ==========================================
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build args
ARG NEXT_PUBLIC_API_URL=http://3.27.207.13:8081
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN npm run build

# ==========================================
# Stage 3: Production runner (ảnh cuối cực kỳ nhẹ)
# ==========================================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8082
ENV HOSTNAME="0.0.0.0"

# Thiết lập user không có quyền root (Secure hơn)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Chỉ copy những output đã được optimize từ Next.js Standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 8082

CMD ["node", "server.js"]
