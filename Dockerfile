# Use official Node.js 18 image as base
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy all source files to container
COPY . .

# Expose port (same as your app uses)
EXPOSE 4000

# Run the app
CMD ["nodemon", "server.js"]
