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
                    docker cp container:/api_rest/test-report/report.html C:\\Windows\\Temp\\report.html
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
                    reportDir: 'C:\\Windows\\Temp',
                    reportFiles: 'relatorio.html',
                    reportName: 'My Reports',
                    reportTitles: 'The Report'
                ])
            }
        }
        
    }
}
