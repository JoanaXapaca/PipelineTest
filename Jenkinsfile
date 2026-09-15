pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                bat 'npm install --legacy-peer-deps'
            }
        }

        stage('Lint') {
            steps {
                bat 'npm run lint'
            }
        }

        stage('Type-check') {
            steps {
                bat 'npm run type-check'
            }
        }

        stage('Testes Unitários') {
            steps {
                bat 'npm run test:unit -- --run'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'dist/**', fingerprint: true
            echo 'Build aprovado'
        }
        failure {
            echo 'Build reprovado — ver logs'
        }
    }
}
