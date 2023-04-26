FROM node:16.14-alpine

WORKDIR /app-frontend

COPY package* ./

RUN npm install 

COPY . .

RUN chmod -R 777 /app-frontend

CMD ["npm", "start"]
