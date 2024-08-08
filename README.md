## Dokerfile

### Pré-requisitos para criar a imagem e o container com Docker Desktop:


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


### Jenkins

    1. Dependências para Instalar no Jenkins
    Gerenciar Jenkins >> Plugins >> Plugins Disponíveis
    Pesquisar por "nome" do Plugin >> Instalar
    Reiniciar o Jenkins
    1.1 Git
    1.2 Pipeline
    1.3 Docker Pipeline
    1.4 Docker Compose Build Step
    1.5 HTML Publisher


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


## Jenkins - Pipeline do Docker e do script do Jenkinsfile



