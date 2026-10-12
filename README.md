# Pipeline Test

Vue demonstration project for the CI/CD pipeline, used as a base to replicate across other technologies.

## Pipeline

Runs on Jenkins, with the following stages:

1. Checkout — clones the Git repository
2. Install — `npm install --legacy-peer-deps`
3. Lint — `npm run lint` (Oxlint + ESLint)
4. Type-check — `npm run type-check` (vue-tsc)
5. Unit Tests — `npm run test:unit` (Vitest + Istanbul)
6. E2E Tests — `npm run test:e2e`
7. SonarQube — `sonar-scanner -Dsonar.qualitygate.wait=true`
8. Build — `npm run build` (Vite)
9. Audit Report — `python scripts/gerar_relatorio.py`

Trigger: Poll SCM every 5 minutes. Every push to the `main` branch triggers the pipeline.

## Running locally

Requirements: Node.js 22+ and npm 10+.

Installation:

```bash
npm install --legacy-peer-deps

Commands:

Command	What it does
npm run dev	Development server
npm run build	Production build
npm run preview	Preview the build
npm run lint	Lint (Oxlint + ESLint)
npm run type-check	TypeScript type-check
npm run test:unit	Unit tests with coverage
npm run test:e2e	E2E tests

Before pushing, run:
npm run lint
npm run type-check
npm run test:unit
npm run build

Interpreting results
Jenkins:

Green: pipeline passed

Red: some stage failed; check Console Output

Artifacts: dist/ and reports/ archived on each build

SonarQube:

Dashboard: http://localhost:9000/dashboard?id=pipeline-test

Quality Gate must be Passed

Coverage is read from coverage/lcov.info

Stack
Layer	Technology
Framework	Vue 3
Language	TypeScript
Build	Vite
Tests	Vitest + Istanbul
Lint	Oxlint + ESLint
Type-check	vue-tsc
CI/CD	Jenkins
Static analysis	SonarQube

Structure:
pipeline-test/
├── Jenkinsfile
├── Makefile
├── sonar-project.properties
├── vitest.config.ts
├── package.json
├── scripts/
│   └── gerar_relatorio.py
├── src/
│   ├── App.vue
│   ├── main.ts
│   └── __tests__/
│       ├── App.spec.ts
│       └── e2e.spec.ts
├── docs/
│   ├── design-development-plan.md
│   ├── requirements.md
│   ├── traceability-matrix.md
│   ├── qms-software-validation.md
│   ├── validation-plan.md
│   └── design-file/
│       └── README.md
├── coverage/    (generated)
├── dist/        (generated)
└── reports/     (generated)

Notes
--legacy-peer-deps is needed because of a conflict between oxlint and eslint-plugin-oxlint.

Coverage provider is Istanbul (v8 has a known bug with Vue files reporting 0%).

SonarQube runs on http://127.0.0.1:9000 (IPv4, to avoid WSL relay conflicts on Windows).

The Sonar token is read from C:\Users\jrego\sonar-token.txt.

Quality Gate is enforced with sonar.qualitygate.wait=true (no webhook needed in localhost).