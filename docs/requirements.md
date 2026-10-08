Requirements Specification



Projeto: Pipeline Test (Vue)

Norma: ISO 13485:2016 - SOP 7.3.2

Versão: 1.0



1\. Requisitos Funcionais

| ID | Requisito | Prioridade | Estado |

|----|-----------|-----------|--------|

| REQ-01 | O componente App.vue renderiza um heading principal | Alta | Implementado |

| REQ-02 | O componente App.vue tem um contador que começa em 0 | Alta | Implementado |

| REQ-03 | O botão de incremento aumenta o contador em 1 | Alta | Implementado |

| REQ-04 | O botão de reset coloca o contador a 0 | Alta | Implementado |





2\. Requisitos Não Funcionais

| ID | Requisito | Métrica | Estado |

|----|-----------|---------|--------|

| NFR-01 | Cobertura de testes >= 80% | SonarQube | 95% |

| NFR-02 | Quality Gate Passed | SonarQube | OK |

| NFR-03 | 0 Issues | SonarQube | OK |

| NFR-04 | 0 Vulnerabilities | SonarQube | OK |

| NFR-05 | Tempo de pipeline < 5 min | Jenkins | \~1.5 min |

| NFR-06 | Lint sem erros | Oxlint + ESLint | 0 issues |

| NFR-07 | Acessibilidade WCAG 2.1 AA | a validar E2E | Pendente |



3\. Requisitos Regulamentares

| ID | Requisito | Norma | Estado |

|----|-----------|-------|--------|

| REG-01 | Rastreabilidade de testes | ISO 13485 sec. 7.3.5 | OK |

| REG-02 | Quality Gate obrigatório | FDA (SaMD) | OK |

| REG-03 | Registos de auditoria | ISO 13485 sec. 4.2.5 | OK |

| REG-04 | Controlo de versões | ISO 13485 sec. 4.2.4 | OK |

| REG-05 | Análise estática | OWASP Top 10 | Parcial |



4\. Requisitos de Segurança

Requisito | Categoria OWASP | Estado |

\----------|----------------|--------|

Sem injeções | A03 | Community não deteta |

Sem credenciais hardcoded | A02 | OK |

Dependências atualizadas | A06 | Não verificado |



5\. Fora do Âmbito

Persistência de dados, comunicação em rede, autenticação de utilizadores.



6\. Referências

ISO 13485:2016 sec. 7.3.2

Quality Manual GlobeStar v01.47

OWASP Top 10 (2021)

