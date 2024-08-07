FROM node:latest

WORKDIR /api_rest

RUN git clone https://github.com/usuario/repositorio.git .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
