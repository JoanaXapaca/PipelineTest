Design and Development Plan



Projeto: Pipeline Test (Vue)

Norma: ISO 13485:2016 - SOP 7.3.1

Versão: 1.0

Autor: Joana Rego



&#x20;1. Objetivo

Este documento define o plano de design e desenvolvimento do projeto, incluindo etapas, responsabilidades, entradas e saídas de cada fase, conforme exigido pela ISO 13485:2016 secção 7.3.1.



2\. Ciclo de Vida

O ciclo de vida segue o modelo IEC 62304, adaptado para o âmbito deste projeto.

| Fase | Descrição | Responsável |

|------|-----------|-------------|

| 1. Planeamento | Definição de requisitos | Product Management |

| 2. Design | Arquitetura e especificação | R\&D |

| 3. Implementação | Codificação | R\&D |

| 4. Verificação | Testes unitários e análise estática | R\&D + QA |

| 5. Validação | Testes E2E e aceitação | QA |

| 6. Release | Tag Git e publicação | R\&D |

| 7. Manutenção | Suporte pós-release | Technical Support |



3\. Etapas da Pipeline

| Stage | Ferramenta | Fase ISO |

|-------|------------|----------|

| Checkout | Git | Todas |

| Install | npm install --legacy-peer-deps | Implementação |

| Lint | Oxlint + ESLint | Verificação |

| Type-check | vue-tsc | Verificação |

| Testes Unitários | Vitest + Istanbul | Verificação |

| Testes E2E | Vitest | Verificação |

| SonarQube | SonarQube Community | Verificação |

| Build | Vite | Release |

| Relatório Auditoria | Python | Todas |



4\. Critérios de Entrada e Saída

| Fase | Entrada | Saída | Critério |

|------|---------|-------|----------|

| Implementação | Requisito aprovado | Código commitado | Git push |

| Verificação | Código commitado | Testes passados + Quality Gate | Cobertura >= 80%, 0 Issues |

| Release | Verificação passada | Dist + Tag Git | Quality Gate Passed |

| Manutenção | Report de bug | Bug fix | Novo ciclo |



5\. Responsabilidades

| Papel | Responsabilidade |

|-------|-----------------|

| R\&D | Implementação, testes unitários, correção de bugs |

| QA | Validação, testes E2E, revisão de Quality Gate |

| Product Management | Definição de requisitos, aprovação de release |

| Management Representative | Aprovação final|



6\. Ferramentas Utilizadas

| Ferramenta | Versão | Propósito |

|-----------|--------|-----------|

| Node.js | 26.8.2 | Runtime |

| Vue | 3.5 | Framework |

| TypeScript | 6.0 | Linguagem |

| Vite | 8.3 | Build |

| Vitest | 4.1 | Testes |

| Istanbul | 4.1 | Cobertura |

| Jenkins | LTS | Orquestração CI/CD |

| SonarQube | Community 26.9 | Análise estática |

| git | 2.55 | Controlo de versões |



7\. Gestão de Interfaces

| Interface | Responsável | Como |

|-----------|-------------|------|

| R\&D <-> QA | Ambos | Pull Requests + Jenkins |

| QA <-> Product | QA lead | Management Review |

| Product <-> Cliente | Sales | Jira |



8\. Atualização do Plano

Este plano é revisto no início de cada nova feature, após cada release major, ou quando há mudanças significativas no QMS.



9\. Referências

ISO 13485:2016, secção 7.3.1

Quality Manual GlobeStar v01.47

