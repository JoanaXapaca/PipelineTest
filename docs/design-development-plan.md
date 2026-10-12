Design and Development Plan

Project: Pipeline Test (Vue)

Standard: ISO 13485:2016 - SOP 7.3.1

Version: 1.0

Author: Joana Rego



1\. Objective

This document defines the design and development plan for the project, including phases, responsibilities, inputs, and outputs of each phase, as required by ISO 13485:2016 section 7.3.1.



2\. Life Cycle

The life cycle follows the IEC 62304 model, adapted to the scope of this project.



| Phase | Description | Responsible |

| 1. Planning | Requirements definition | Product Management |

| 2. Design | Architecture and specification | R\&D |

| 3. Implementation | Coding | R\&D |

| 4. Verification | Unit tests and static analysis | R\&D + QA |

| 5. Validation | E2E tests and acceptance | QA |

| 6. Release | Git tag and publication | R\&D |

| 7. Maintenance | Post-release support | Technical Support |



3\. Pipeline Stages

| Stage | Tool | ISO Phase |

| Checkout | Git | All |

| Install | npm install --legacy-peer-deps | Implementation |

| Lint | Oxlint + ESLint | Verification |

| Type-check | vue-tsc | Verification |

| Unit Tests | Vitest + Istanbul | Verification |

| E2E Tests | Vitest | Verification |

| SonarQube | SonarQube Community | Verification |

| Build | Vite | Release |

| Audit Report | Python | All |



4\. Entry and Exit Criteria

| Phase | Entry | Exit | Criterion |

| Implementation | Approved requirement | Committed code | Git push |

| Verification | Committed code | Tests passed + Quality Gate | Coverage >= 80%, 0 Issues |

| Release | Verification passed | Dist + Git tag | Quality Gate Passed |

| Maintenance | Bug report | Bug fix | New cycle |



5\. Responsibilities

| Role | Responsibility |

| R\&D | Implementation, unit tests, bug fixes |

| QA | Validation, E2E tests, Quality Gate review |

| Product Management | Requirements definition, release approval |

| Management Representative | Final approval |



&#x20;6. Tools Used

| Tool | Version | Purpose |

| Node.js | 26.8.2 | Runtime |

| Vue | 3.5 | Framework |

| TypeScript | 6.0 | Language |

| Vite | 8.3 | Build |

| Vitest | 4.1 | Tests |

| Istanbul | 4.1 | Coverage |

| Jenkins | LTS | CI/CD orchestration |

| SonarQube | Community 26.9 | Static analysis |

| SonarScanner CLI | 8.1.0.6389 | Scanner |

| git | 2.55 | Version control |



7\. Interface Management

| Interface | Responsible | How |

| R\&D <-> QA | Both | Pull Requests + Jenkins |

| QA <-> Product | QA lead | Management Review |

| Product <-> Customer | Sales | Jira |



8\. Plan Updates

This plan is reviewed at the start of each new feature, after each major release, or when there are significant changes to the QMS.



9\. References

\- ISO 13485:2016, section 7.3.1

\- Quality Manual GlobeStar v01.47

