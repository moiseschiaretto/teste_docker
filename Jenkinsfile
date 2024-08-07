pipeline {
    // agent any
    agent {
        docker {
            // Usar a imagem Docker criada
            // docker images
            image 'node:latest/sha256:ae684dece32c4d1eadb3753555312b247afb559ce80ae5e0be0bdbea89cdcd82'
            // Opcional: define um rótulo para o agente
            label 'docker'
        }
    }
}

    // parameters {
    //     string(name: 'BRANCH_TEST', defaultValue: 'NNNN-Criar-um-job-para-executar-a-automacao-dos-testes-de-api', description: '')
    // }
 
    // stages {
    //     stage('Preparar ambiente') {
    //         steps {
    //             script {
    //                 docker.image('node:20').inside {
    //                     sh 'npm install dotenv jest jest-html-reporter supertest'
    //                 }
    //             }
    //         }
    //     }
    //     stage('Executar testes') {
    //         when {
    //             expression {
    //                 return params.BRANCH_TEST == 'NNNN-Criar-um-job-para-executar-a-automacao-dos-testes-de-api'
    //             }
    //         }
    //         steps {
    //             script {
    //                 sh 'npx jest test.js'
    //             }
    //         }
    //     }
    // }

