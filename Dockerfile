FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# Copy the static files to Nginx's serving directory
COPY --from=build /app/out /usr/share/nginx/html

# Nginx default port is 80
EXPOSE 80

# Use the Nginx start command, NOT npm start
CMD ["nginx", "-g", "daemon off;"]