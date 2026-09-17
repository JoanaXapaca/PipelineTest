# Pipeline Test

Projeto Vue de demonstração da pipeline CI/CD, usado como base para replicar noutras tecnologias.

## Pipeline

Executada no Jenkins, com os seguintes stages:

1. Checkout - clona o repositório Git
2. Install - `npm install --legacy-peer-deps`
3. Lint - `npm run lint` (Oxlint + ESLint)
4. Type-check - `npm run type-check` (vue-tsc)
5. Testes Unitários - `npm run test:unit` (Vitest + Istanbul)
6. SonarQube - `npx sonar-scanner -Dsonar.qualitygate.wait=true`
7. Build - `npm run build` (Vite)
8. Relatório de Auditoria - `python scripts/gerar_relatorio.py`

Trigger: Poll SCM a cada 5 minutos. Cada push na branch `main` dispara a pipeline.

## Correr localmente

Pré-requisitos: Node.js 22+ e npm 10+.

Instalação:

```bash
npm install --legacy-peer-deps

Comandos:
npm run dev	Servidor de desenvolvimento
npm run build	Build de produção
npm run preview	Pré-visualiza o build
npm run lint	Lint (Oxlint + ESLint)
npm run type-check	Valida os tipos TypeScript
npm run test:unit	Testes com cobertura

Antes de fazer push, correr:
npm run lint
npm run type-check
npm run test:unit
npm run build

Interpretar resultados
Jenkins:
Verde: pipeline passou
Vermelho: algum stage falhou; ver o Console Output

Artefactos: dist/ e reports/ arquivados em cada build

SonarQube:
Dashboard: http://localhost:9000/dashboard?id=pipeline-test
Quality Gate tem de estar Passed

Coverage é criado a partir de coverage/lcov.info


Camada	Tecnologia:
Framework -	Vue 3
Linguagem -	TypeScript
Build	- Vite
Testes	- Vitest + Istanbul
Lint	- Oxlint + ESLint
Type-check	- vue-tsc
CI/CD	Jenkins
Análise estática	- SonarQube

Estrutura:
pipeline-test/
├── Jenkinsfile
├── sonar-project.properties
├── vitest.config.ts
├── package.json
├── scripts/
│   └── gerar_relatorio.py
├── src/
│   ├── App.vue
│   ├── main.ts
│   └── __tests__/
│       └── App.spec.ts
├── coverage/
├── dist/     
└── reports/

Notas:
Usar --legacy-peer-deps por causa de um conflito entre oxlint e eslint-plugin-oxlint.
O provider de cobertura é Istanbul (o v8 tem um bug conhecido com ficheiros Vue que reporta 0%).
Em localhost, o SonarQube não consegue enviar webhooks. Por isso usa-se sonar.qualitygate.wait=true, que faz polling direto.

Guarda o ficheiro.
---
## 3. Commit e push
