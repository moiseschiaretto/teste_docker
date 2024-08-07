# Usar a imagem oficial do Node.js como base
# latest = utiliza a última versão do Node.js
FROM node:latest

# Pasta de trabalho no container
WORKDIR /api_rest

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto informada no arquivo package.json
# dotenv jest jest-html-reporter supertest pdf-parse unidecode
RUN npm install

# Copiar o restante do código-fonte para a pasta de trabalho
COPY . .

# Exponha a porta que o app irá rodar
EXPOSE 3000

# Comando para iniciar o aplicativo ("start" é o nome do script criado do arquivo package.json)
CMD [ "npm", "start" ]
