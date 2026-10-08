QMS Software Validation



Norma: ISO 13485:2016 - SOP 4.1.6

Responsável: Joana Rego



1\. Software Validado

| Software | Versão | Propósito | Validação |

|----------|--------|-----------|-----------|

| Jenkins | LTS | Orquestração CI/CD | Testado em cada build |

| SonarQube Community | 26.9 | Análise estática | Quality Gate configurado |

| SonarScanner CLI | 8.1.0.6389 | Scanner | Testado localmente |

| Git | 2.55 | Controlo de versões | Usado em produção |

| Node.js | 26.8.2 | Runtime JS | Usado em produção |

| Vue | 3.5 | Framework frontend | Testes unitários |

| TypeScript | 6.0 | Linguagem | Type-check |

| Vite | 8.3 | Build | Build validado |

| Vitest | 4.1 | Testes | 13 testes passados |

| Istanbul | 4.1 | Cobertura | 91.66% |

| Python | 3.14 | Scripts de relatório | Validação manual |



2\. Integridade

| Software | Verificação de integridade |

|----------|---------------------------|

| Jenkins | Autenticação via credenciais |

| SonarQube | Token via ficheiro local |

| Git | HTTPS + token |

| npm | package-lock.json |



3\. Riscos

| Risco | Mitigação |

|-------|-----------|

| SonarQube Community não deteta injeções | Ferramentas complementares |

| Scanner 6.x com bug | Usar scanner 8.1.0 |

| Dependências desatualizadas | Verificação periódica |



4\. Referências



\- ISO 13485:2016 sec. 4.1.6

\- Quality Manual GlobeStar v01.47

