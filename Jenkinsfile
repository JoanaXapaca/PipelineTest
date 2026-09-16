pipeline {
    agent any

    tools {
        nodejs 'NodeJS 26.8.2'
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
                bat 'npm run test:unit'
            }
        }

        stage('SonarQube'){
            steps {
                withSonarQubeEnv('SonarQube') {
                    bat 'npx sonar-scanner -Dsonar.qualitygate.wait=true'
                }
                //timeout(time: 5, unit:'MINUTES') {
                    //waitForQualityGate abortPipeline: true
                //}
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
