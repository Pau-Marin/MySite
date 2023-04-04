# Build stage
FROM node:16-alpine as builder
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Run stage
FROM node:16-alpine as runner
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/yarn.lock .
COPY --from=builder /usr/src/app/next.config.js .
COPY --from=builder /usr/src/app/postcss.config.js .
COPY --from=builder /usr/src/app/tailwind.config.js .
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.next ./.next

# Command to start server
CMD ["yarn", "start"]

# Port
EXPOSE 3000