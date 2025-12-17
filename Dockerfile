# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose API port
EXPOSE 8080

# Start server
CMD ["node", "src/server.js"]
