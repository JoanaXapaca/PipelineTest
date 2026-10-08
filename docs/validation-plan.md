Design Validation Plan



Projeto: Pipeline Test (Vue)

Norma: ISO 13485:2016 - SOP 7.3.6



1\. Objetivo

Validar que o software cumpre os requisitos do utilizador em ambiente simulado.



2\. Ambiente de Validação

| Item | Descrição |

| Runtime | Node.js 26.8.2 |

| Framework | Vue 3.5 + TypeScript |

| Utilizador | Desenvolvedor / QA |

| Cenário | Execução dos testes E2E |



3\. Testes E2E

| ID | Teste | Cenário | Critério de Aceitação |

| E2E-01 | Montagem | mount(App) | A aplicação monta sem erros |

| E2E-02 | Renderização | wrapper.find('h1') | Heading renderiza com texto |

| E2E-03 | Interação | button.trigger('click') | Contador incrementa |



4\. Limitações

A validação em ambiente clínico real não é aplicável a este projeto de teste de pipeline. O produto real ConnexALL é validado no cliente.

