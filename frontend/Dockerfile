FROM node:16-alpine

WORKDIR /app

# Copy package files from current context (already inside frontend/)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]