\# Risk Analysis (ISO 14971)



\*\*Project:\*\* Pipeline Test (Vue)

\*\*Standard:\*\* ISO 14971:2019

\*\*Version:\*\* 1.0



\## 1. Risk Matrix



| Probability / Severity | Low | Medium | High |

|------------------------|-----|--------|------|

| \*\*High\*\*               | M   | H      | H    |

| \*\*Medium\*\*             | L   | M      | H    |

| \*\*Low\*\*                | L   | L      | M    |



\## 2. Identified Risks



| ID | Risk | Probability | Severity | Level | Mitigation |

|----|------|-------------|----------|-------|------------|

| R-01 | Pipeline allows buggy code to reach production | Low | High | M | Mandatory Quality Gate (SonarQube) + unit tests with 80% coverage |

| R-02 | Vulnerable dependencies (OWASP A06) | Medium | High | H | `npm audit` and `govulncheck` stages in the pipeline |

| R-03 | Credential leak (GitHub/SonarQube tokens) | Low | High | M | Credentials stored in Jenkins, never in Git |

| R-04 | Corrupted audit report | Low | Medium | L | SHA256 hash of artifacts recorded in the report |

| R-05 | Jenkins service failure | Medium | Medium | M | Service auto-restart configured (`onfailure action="restart"`) |



\## 3. Residual Risks



After mitigation, all risks are reduced to acceptable levels (Low or Medium). No unacceptable risks remain.



\## 4. References



\- ISO 14971:2019

\- ISO 13485:2016 sec. 7.1

\- Quality Manual GlobeStar v01.47

