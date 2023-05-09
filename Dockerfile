FROM node:18.12-alpine as build

WORKDIR /app/

COPY ./package.json ./
RUN npm install

# COPY . .

# RUN npm run build


# FROM gcr.io/distroless/nodejs:14

# WORKDIR /app/

# COPY --from=build /app/.next ./.next
# COPY --from=build /app/package.json ./package.json

# CMD ["./node_modules/.bin/next", "start"]