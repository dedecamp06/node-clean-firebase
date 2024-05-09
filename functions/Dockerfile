FROM node:18

WORKDIR /usr/src/app

RUN npm install -g firebase-tools

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000 8080 8085 5001 9000 9099 9199

CMD ["npm", "run", "start:dev"]
