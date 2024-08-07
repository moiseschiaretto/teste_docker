FROM node:latest

WORKDIR /api_rest

RUN git clone https://github.com/moiseschiaretto/teste_docker.git ./

RUN chown -R node:node /api_rest

USER node

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
