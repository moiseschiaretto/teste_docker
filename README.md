## Docker Desktop >> Image and Container

### Dockerfile - Pré-requisitos para criar a imagem e o container com Docker Desktop.

    1. Docker Desktop instalado na máquina
    2. Docker Desktop aberto na máquina
    3. Arquivo "Dockerfile" com os comandos para gerar a imagem e container do projeto
    4. Terminal / PowerShell da IDE VSCode executar os comandos abaixo:
    5. Criar a imagem [docker build -t test_img .]
    6. Criar o container e executar o projeto [docker run -it --name container test_img]
    7. Exibe o log de execução do projeto [docker logs container]
    8. Exibe a imagem criada [docker images]
    9. Exibe todas as imagens e containers criados [docker ps -a]
    10. Visualizar também no software "Docker Desktop", painel à esquerda com as opções [Containers] e [Images]


### Conteúdo do arquivo do "Dockerfile"

```

FROM node:latest

WORKDIR /api_rest

RUN git clone https://github.com/moiseschiaretto/teste_docker.git ./

RUN chmod -R +x /api_rest

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

```



| Docker - Buil of Image   | Docker Desktop - Image   | Docker - Conatiner / Execution | Docker - Conatiner / Execution | List All Images and Conatiners | Docker Desktop - Conatiner |
|--------------------------|--------------------------|--------------------------------|--------------------------------|--------------------------------|----------------------------|
| <img width="681" alt="01_BUILD_IMG_Docker_Desktop" src="https://github.com/user-attachments/assets/a52a1279-f871-48f5-b7aa-e1760fb42885"> | <img width="678" alt="02_IMG_Docker_Desktop" src="https://github.com/user-attachments/assets/68b2f12c-325b-4522-bca4-c6b68a94ef24"> | <img width="679" alt="03_Criando_Executando_Container_Docker_Desktop" src="https://github.com/user-attachments/assets/d3ddeeb4-708f-48f4-9ac3-ffc35ab88d97"> | <img width="679" alt="04_Criando_Executando_Container_Docker_Desktop" src="https://github.com/user-attachments/assets/452008bf-389a-4b85-a27c-644265f8e1b9"> | <img width="679" alt="05_Listar_IMG_Container_Docker_Desktop" src="https://github.com/user-attachments/assets/111efb25-b717-44df-bfc8-1d91bfa4947c"> | <img width="676" alt="06_Container_Docker_Desktop" src="https://github.com/user-attachments/assets/102df72c-87c4-4405-9517-ddd88b377563"> |
<br>

## Jenkins >> Plugins >> Job >> Pipeline Script >> Pipeline Execution

### Jenkins - Pré-requisitos criar uma conta no Jenkins e instalar o Jenkins na máquina.

    1. Acessar o link do Jenkins no navegador Web, por exemplo [http://localhost:1010/login]
    1.1 Efetuar o "login" no Jenkins
    1.2 Dependências para Instalar no Jenkins
    Gerenciar Jenkins >> Plugins >> Plugins Disponíveis
    Pesquisar por "nome" do Plugin >> Instalar
    Reiniciar o Jenkins
    1.3 Git
    1.4 Pipeline
    1.5 Docker Pipeline
    1.6 Docker Compose Build Step
    1.7 HTML Publisher


| Jenkins Access Login | Jenkins Setup Plugins | Jenkins Setup Plugins | Jenkins Created Job | Jenkins Created Job | Pipeline of Jenkins | Jenkins Job Execution | Jenkins Job Execution |
|----------------------|-----------------------|-----------------------|---------------------|---------------------|---------------------|-----------------------|-----------------------|
| <img width="675" alt="01_Jenkins_Access_Login" src="https://github.com/user-attachments/assets/60f6270e-2a6a-4fe3-bab7-39dfac3a5fa4"> | <img width="678" alt="02_Jenkins_Setup_Plugins" src="https://github.com/user-attachments/assets/e044d71d-6077-464c-a3ba-a52109b7c76b"> | <img width="677" alt="03_Jenkins_Setup_Plugins" src="https://github.com/user-attachments/assets/59dd2c8a-3deb-4cce-8dfb-9d0fd1bd7d6a"> | <img width="677" alt="04_Jenkins_Created_Jobs" src="https://github.com/user-attachments/assets/0edc5c6a-9b99-469a-9010-67733e6cc50f"> | <img width="678" alt="05_Jenkins_Created_Jobs" src="https://github.com/user-attachments/assets/acfb2b05-f6b1-49ce-a3cb-deedb6b94801"> | <img width="671" alt="06_Pipeline_Jenkins" src="https://github.com/user-attachments/assets/159e58f5-4e99-45a3-a0d8-45de6b4601e1"> | <img width="670" alt="07_Jenkins_Job_Execution" src="https://github.com/user-attachments/assets/41e4dc51-3153-4565-a9c7-4b61f7fab31f"> | <img width="680" alt="08_Jenkins_Job_Execution" src="https://github.com/user-attachments/assets/bfef2c69-52d7-4685-a1ff-58e472913fba"> |
<br>

    2. Criar o Job (Nova tarefa)
    2.1 Preencher o campo "Entre com um nome de item"
    API_OrcApenasDanosPintMult
    2.2 Selecionar a opção "Pipeline"
    2.3 Clicar no botão "Tudo certo"
    2.4 Configurar
    Preencher o campo "Descrição"
    API_OrcApenasDanosPintMult
    Em "Pipeline" selecionar no campo "Definition" a opção ["Pipeline script"]
    Copiar e Colar o script no campo "Script"
    Selecionar a opção "Use Groovy Sandbox"
    Clicar no botão "Salvar"


    3. Em Painel de Controle > API_OrcApenasDanosPintMult
    3.1 Estando no Job criado, clicar no Painel à esquerda na opção [Construir agora]
    Esta opção [Construir agora] executa o script de execução do projeto
    No Painel à esquerda clicar no Frame ["Histórico de construções Tendência"]
    No script em execução
    3.2 No Novo Painel à esquerda acessar uma das opções:
    Console Output
    My Reports
    Pipeline Overview
    Pipeline Console
    Stages
    3.3 Para visualizar o arquivo "report.html" gerado da execução da "Pipeline", acessar:
    C:\Windows\Temp\report
    Arquivo com o nome "report.html"".


## Jenkins - Job Execution and Pipeline do Docker (Image and Container) e do script do Jenkinsfile


| Job - Script Jenkinsfile | Pipeline Step Docker  | Pipeline Docker  | Pipeline Docker 	| Job Execution  | Report.html  [C:\Windows\Temp\report] |
|--------------------------|-----------------------|------------------|---------------------|----------------|---------------------------------------|
| <img width="671" alt="01_Pipeline_Jenkins" src="https://github.com/user-attachments/assets/8d9be41f-db05-4711-8ae3-c8c49804c2e0"> | <img width="671" alt="02_Pipeline_Jenkins" src="https://github.com/user-attachments/assets/e77294e7-6797-4064-b34e-d56014a8652e"> | <img width="675" alt="03_Pipeline_Jenkins" src="https://github.com/user-attachments/assets/0f43912c-daa9-4793-906d-c8a53e55a12a"> | <img width="675" alt="04_Pipeline_Jenkins" src="https://github.com/user-attachments/assets/d19b60cc-2953-4365-a63c-db1d16541709"> | <img width="674" alt="05_Pipeline_Jenkins" src="https://github.com/user-attachments/assets/82a6788c-185f-4c98-be31-9c0e28d2443c"> | <img width="671" alt="06_Pipeline_Jenkins_Report_HTML" src="https://github.com/user-attachments/assets/b06a9cb8-e9cd-4278-bf1e-8d40d8d22ff9"> |
<br>

### Conteúdo do arquivo do "Jenkinsfile"

```

pipeline {
    agent any
    stages {
        stage('Baixar Dockerfile') {
            steps {
                script {
                    // Baixa o Dockerfile do GitHub usando PowerShell
                    powershell '''
                    Invoke-WebRequest -Uri "https://raw.githubusercontent.com/moiseschiaretto/teste_docker/main/Dockerfile" -OutFile "Dockerfile"
                    '''
                }
            }
        }
        stage('Construir Imagem Docker') {
            steps {
                script {
                    // Construa a imagem Docker usando PowerShell
                    powershell '''
                    docker build -t test_img:latest .
                    '''
                }
            }
        }
        stage('Executar Contêiner Docker') {
            steps {
                script {
                    // Executa o contêiner Docker usando PowerShell
                    powershell '''
                    docker run -d --name container test_img:latest

                    docker logs container
                    
                    '''
                    sleep(time: 30, unit: 'SECONDS')
                }
            }
        }
        stage('Copiar Relatório do Contêiner') {
            steps {
                script {
                    // Copia o arquivo de relatório do contêiner para o host
                    powershell '''
                    docker cp container:/api_rest/test-report/report.html C:\\Windows\\Temp\\\\report\\report.html
                    '''
                }
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'C:\\Windows\\Temp\\report',
                    reportFiles: 'report.html',
                    reportName: 'My Reports',
                    reportTitles: 'The Report'
                ])
            }
        }
        
    }
}


```
<br>

## Importante: arquivo do "Jenkinsfile"

### Sistema Operacional Windows utilizar o comando: "powershell"

### Sistema Operacional Linux utilizar o comando: "sh"





