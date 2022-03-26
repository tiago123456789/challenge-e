FROM node:14.16.1

COPY package.json package-lock.json /app/

WORKDIR /app/

COPY . . 

RUN npm i 

EXPOSE 3000

CMD ["npm", "run", "start:dev"]