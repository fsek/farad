FROM node:20-alpine

# To get fresh apk
RUN apk update && apk upgrade

#iputils is for ping
RUN apk add git openssh curl iputils

# Expose the Vite development server port
EXPOSE 5173

ENV ENV = development

# Start the development server
CMD ["npm", "run", "dev", "--", "--host", "127.0.0.1"]


#RUN npm install -D prettier prettier-plugin-tailwindcss


