FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /src

# Update and install necessary packages
RUN apk update && apk upgrade && apk add git openssh curl iputils

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the Vite development server port
EXPOSE 5173

# Set environment variable correctly
ENV ENV=development

# Start the development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
