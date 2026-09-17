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

        stage('Testes Unitarios') {
            steps {
                bat 'npm run test:unit'
            }
        }

        stage('SonarQube') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    bat 'npx sonar-scanner -Dsonar.qualitygate.wait=true'
                }
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Relatorio Auditoria') {
            steps {
                bat '"C:/Users/jrego/AppData/Local/Python/pythoncore-3.14-64/python.exe" scripts/gerar_relatorio.py'
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'reports',
                    reportFiles: 'auditoria.html',
                    reportName: 'Relatorio de Auditoria (ISO/FDA)'
                ])
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'dist/**, reports/**', fingerprint: true
            echo 'Build aprovado'
        }
        failure {
            echo 'Build reprovado - ver logs'
        }
    }
}