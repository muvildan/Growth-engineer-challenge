FROM node:16-alpine
RUN apk update

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY . ./

RUN ls -a

RUN npm install

EXPOSE 8080
CMD ["npm", "run", "tsc"]