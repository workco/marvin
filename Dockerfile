FROM node:latest

# We have native dependencies, we need extra tools

COPY package.json package.json
RUN npm install

# Add your source files
COPY . .
CMD ["npm","start"]
