QMS Software Validation



Standard: ISO 13485:2016 — SOP 4.1.6

Responsible: Joana Rego



1\. Validated Software

| Software | Version | Purpose | Validation |

| Jenkins | LTS | CI/CD orchestration | Tested on every build |

| SonarQube Community | 26.9 | Static analysis | Quality Gate configured |

| SonarScanner CLI | 8.1.0.6389 | Scanner | Tested locally |

| Git | 2.55 | Version control | Used in production |

| Node.js | 26.8.2 | Runtime JS | Used in production |

| Vue | 3.5 | Frontend framework | Unit tests |

| TypeScript | 6.0 | Language | Type-check |

| Vite | 8.3 | Build | Build validated |

| Vitest | 4.1 | Tests | 13 tests passing |

| Istanbul | 4.1 | Coverage | 91.66% |

| Python | 3.14 | Report scripts | Manual validation |



2\. Integrity

| Software | Integrity check |

| Jenkins | Authentication via credentials |

| SonarQube | Token read from local file |

| Git | HTTPS + token |

| npm | package-lock.json verifies dependencies |



3\. Risks

| Risk | Mitigation |

| SonarQube Community does not detect injections | Complementary tools |

| Scanner 6.x has known bug | Use scanner 8.1.0 |

| Outdated dependencies | Periodic review |

| 6 npm vulnerabilities (5 high, 1 critical) | Documented; dev dependencies only |



4\. References

\- ISO 13485:2016 sec. 4.1.6

\- Quality Manual GlobeStar v01.47

