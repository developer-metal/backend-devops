FROM node:22.0.0-alpine

# Create app directory

WORKDIR /app

ENV PORT=3001
# Install app dependencies
COPY package*.json ./


RUN npm ci

COPY . .

RUN npm run build


EXPOSE 3001


CMD ["npm", "run", "dev"]