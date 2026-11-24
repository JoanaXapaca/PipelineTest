# Developer Guide: Adding a New Technology to the Pipeline

**Version:** 1.0

## 1. Contract (Makefile)

The project must have a `Makefile` with the following targets:

| Target | Go Example | Vue Example | Kotlin Example |
|--------|------------|-------------|----------------|
| `install` | `go mod download` | `npm install` | `./gradlew dependencies` |
| `lint` | `golangci-lint run` | `npm run lint` | `./gradlew lint` |
| `type-check` | `go vet` | `vue-tsc` | `./gradlew compileDebugKotlin` |
| `test` | `go test` | `npm run test:unit` | `./gradlew testDebugUnitTest` |
| `audit` | `govulncheck ./...` | `npm audit` | `@echo "not applicable"` |
| `build` | `go build` | `npm run build` | `./gradlew assembleDebug` |
| `sonar` | `npx sonar-scanner` | `npx sonar-scanner` | `run_sonar.bat` |

## 2. Jenkinsfile
Create a `Jenkinsfile` with only two lines:
```groovy
@Library('connexall-pipeline') _
connexallPipeline()

\## 3. SonarQube Configuration
Create sonar-project.properties:

properties
sonar.projectKey=<project-name>
sonar.projectName=<Project Name>
sonar.projectVersion=1.0.0
sonar.sources=.
sonar.exclusions=<build-folders>,<test-files>
sonar.<language>.coverage.reportPaths=<coverage-file>

\## 4. ISO 13485 Documentation
Create the docs/ folder with the 6 mandatory documents:

design-development-plan.md (SOP 7.3.1)

requirements.md (SOP 7.3.2)

traceability-matrix.md (SOP 7.3.2 + 7.3.5)

qms-software-validation.md (SOP 4.1.6)

validation-plan.md (SOP 7.3.6)

design-file/README.md (SOP 7.3.10)

\## 5. Jenkins Job Configuration
Create a new Pipeline job.

Pipeline → Definition: Pipeline script from SCM.

SCM: Git.

Repository URL: the GitHub URL.

Credentials: GitJoana.

Branches to build: */main.

Script Path: Jenkinsfile.

Build Triggers: Poll SCM with H/5 * * * *.

\## 6. Verification
Run the pipeline. All stages must be green. If any stage fails, check the Console Output.
