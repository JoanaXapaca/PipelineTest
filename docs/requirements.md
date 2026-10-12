Requirements Specification



Project: Pipeline Test (Vue)

Standard: ISO 13485:2016 - SOP 7.3.2

Version: 1.0



1\. Functional Requirements

| ID | Requirement | Priority | Status |

| REQ-01 | The `App.vue` component renders a main heading | High | Implemented |

| REQ-02 | The `App.vue` component has a counter that starts at 0 | High | Implemented |

| REQ-03 | The increment button increases the counter by 1 | High | Implemented |

| REQ-04 | The reset button sets the counter back to 0 | High | Implemented |



2\. Non-Functional Requirements

| ID | Requirement | Metric | Status |

| NFR-01 | Test coverage >= 80% | SonarQube | 91.66% |

| NFR-02 | Quality Gate Passed | SonarQube | OK |

| NFR-03 | 0 Issues | SonarQube | OK |

| NFR-04 | 0 Vulnerabilities | SonarQube | OK |

| NFR-05 | Pipeline time < 5 min | Jenkins | OK |

| NFR-06 | Lint without errors | Oxlint + ESLint | 0 issues |

| NFR-07 | Accessibility WCAG 2.1 AA | to validate in E2E | Pending |



3\. Regulatory Requirements

| ID | Requirement | Standard | Status |

| REG-01 | Test traceability | ISO 13485 sec. 7.3.5 | OK |

| REG-02 | Mandatory Quality Gate | FDA (SaMD) | OK |

| REG-03 | Audit records | ISO 13485 sec. 4.2.5 | OK |

| REG-04 | Version control | ISO 13485 sec. 4.2.4 | OK |

| REG-05 | Static analysis | OWASP Top 10 | Partial |



4\. Security Requirements

| ID | Requirement | OWASP Category | Status |

| SEC-01 | No injections | A03 | Community does not detect |

| SEC-02 | No hardcoded credentials | A02 | OK |

| SEC-03 | Updated dependencies | A06 | 6 vulnerabilities in devDependencies |



5\. Out of Scope

Data persistence, network communication, user authentication.



6\. References

\- ISO 13485:2016 sec. 7.3.2

\- Quality Manual GlobeStar v01.47

\- OWASP Top 10 (2021)

