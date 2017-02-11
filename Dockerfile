FROM node:6-alpine

# We have native dependencies, we need extra tools
RUN apk add --no-cache make gcc g++ python curl  

COPY package.json package.json  
RUN npm install

# Add your source files
COPY . .  
CMD ["npm","start"]  

