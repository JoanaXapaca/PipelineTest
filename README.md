# Pipeline Test — Projeto Vue

Projeto de demonstração da pipeline CI/CD da empresa, usado como base para replicar noutras tecnologias (Kotlin, Go, Delphi).

##  Pipeline CI/CD

A pipeline é executada no Jenkins e é composta pelos seguintes stages:

1. **Checkout** — clona o repositório Git
2. **Install** — instala as dependências (`npm install --legacy-peer-deps`)
3. **Lint** — corre o Oxlint e o ESLint
4. **Type-check** — valida os tipos TypeScript (`vue-tsc`)
5. **Testes Unitários** — corre os testes com Vitest e gera cobertura com Istanbul
6. **SonarQube** — análise estática + Quality Gate
7. **Build** — gera os artefactos finais (`vite build`)
8. **Post Actions** — arquiva os artefactos

Trigger: `Poll SCM` a cada 5 minutos. Cada `git push` na branch `main` dispara a pipeline automaticamente.

## Como correr localmente

### Pré-requisitos

- Node.js 22+ ou 24+
- npm 10+

### Instalação

```bash
npm install --legacy-peer-deps
