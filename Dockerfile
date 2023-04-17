# Build stage
FROM node:16-alpine as builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Run stage
FROM node:16-alpine as runner
WORKDIR /app

# COPY --from=builder /app/package.json .
# COPY --from=builder /app/yarn.lock .
COPY --from=builder /app/next.config.js .
# COPY --from=builder /app/postcss.config.js .
# COPY --from=builder /app/tailwind.config.js .
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/node_modules ./node_modules

# Port
EXPOSE 3000

# Command to start server
CMD ["yarn", "start"]
