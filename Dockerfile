FROM node:latest

WORKDIR /api_rest

RUN git clone https://github.com/moiseschiaretto/teste_docker.git ./

RUN chmod -R +x /api_rest

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
