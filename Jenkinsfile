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
                    // Executa o contêiner Docker usando PowerShell e monta um volume para persistir relatórios
                    powershell '''
                    docker run -d --name container -v C:\\Windows\\Temp\\report:/api_rest/test-report test_img:latest
                    '''
                    sleep(time: 30, unit: 'SECONDS')  // Aguarda os testes terminarem
                }
            }
        }
        stage('Executar Testes') {
            steps {
                script {
                    // Executa todos os testes dentro do contêiner
                    powershell '''
                    docker exec container powershell -Command "npm run test1"
                    '''
                }
            }
        }
        stage('Copiar Relatórios do Contêiner') {
            steps {
                script {
                    // Copia os arquivos de relatório do contêiner para o diretório de trabalho no Windows
                    powershell '''
                    docker cp container:/api_rest/test-report C:\\Windows\\Temp\\report
                    '''
                }
            }
        }
        stage('Publicar Relatórios HTML') {
            steps {
                script {
                    // Publica todos os relatórios HTML gerados
                    powershell '''
                    $reportFiles = Get-ChildItem -Path "C:\\Windows\\Temp\\report" -Filter *.html
                    foreach ($file in $reportFiles) {
                        $fileName = $file.Name
                        echo "Publicando $fileName"
                        publishHTML(target: [
                            allowMissing: false,
                            alwaysLinkToLastBuild: true,
                            keepAll: true,
                            reportDir: 'C:\\Windows\\Temp\\report',
                            reportFiles: $fileName,
                            reportName: 'Test Report',
                            reportTitles: $fileName
                        ])
                    }
                    '''
                }
            }
        }
    }
    post {
        always {
            // Remove o contêiner após a execução dos testes
            script {
                powershell '''
                docker rm -f container || true
                '''
            }
        }
    }
}
