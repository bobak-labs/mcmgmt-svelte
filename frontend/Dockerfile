# Stage 1: Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:18-alpine

WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.svelte-kit ./build
COPY package.json package-lock.json ./

# Install production dependencies
RUN npm install --production

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "build/index.js"]
