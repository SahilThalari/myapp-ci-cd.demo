# Use Node.js LTS
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Run tests
CMD ["npm", "test"]
