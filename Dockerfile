# Use Node.js 22 Alpine as the base image
FROM node:22-alpine

# Install dependencies for sharp
RUN apk add --no-cache vips-dev fftw-dev build-base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your project
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 10000 (Render's default)
EXPOSE 10000

# Start the app
CMD ["npm", "start"]