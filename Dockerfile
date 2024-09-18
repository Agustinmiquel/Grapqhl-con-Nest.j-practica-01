FROM node:alpine as development

WORKDIR /usr/src/todo

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]