Traceability Matrix



Projeto: Pipeline Test (Vue)

Norma: ISO 13485:2016 - SOP 7.3.2 + 7.3.5



Matriz Requisito -> Teste



| Requisito | Descrição | Teste | Ficheiro | Estado |

|-----------|-----------|-------|----------|--------|

| REQ-01 | Heading principal renderiza | mounts renders properly | src/\_\_tests\_\_/App.spec.ts | OK |

| REQ-02 | Contador começa em 0 | starts with count 0 | src/\_\_tests\_\_/App.spec.ts | OK |

| REQ-03 | Botão incrementa contador | increments count when button is clicked | src/\_\_tests\_\_/App.spec.ts | OK |

| REQ-04 | Botão reset reinicia contador | resets count to 0 | src/\_\_tests\_\_/App.spec.ts | OK |

| NFR-01 | Cobertura >= 80% | npm run test:unit | Pipeline | 91.66% |

| NFR-02 | Quality Gate | SonarQube | Pipeline | OK |

| REG-01 | Rastreabilidade | Relatório HTML | gerar\_relatorio.py | OK |

| REG-03 | Registos de auditoria | archiveArtifacts | Jenkinsfile | OK |



Testes E2E



| ID | Teste | Ficheiro | Estado |

|----|-------|----------|--------|

| E2E-01 | A aplicação monta sem erros | src/\_\_tests\_\_/e2e.spec.ts | OK |

| E2E-02 | Heading principal é renderizado | src/\_\_tests\_\_/e2e.spec.ts | OK |

| E2E-03 | Contador começa em 0 e incrementa | src/\_\_tests\_\_/e2e.spec.ts | OK |



Referências



\- ISO 13485:2016 sec. 7.3.2 (Inputs) e sec. 7.3.5 (Verification)

\- Quality Manual GlobeStar v01.47

