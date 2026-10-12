Traceability Matrix



Project: Pipeline Test (Vue)

Standard: ISO 13485:2016 — SOP 7.3.2 + 7.3.5



Requirement -> Test Matrix

| Requirement | Description | Test | File | Status |

| REQ-01 | Main heading renders | mounts renders properly | src/\_\_tests\_\_/App.spec.ts | OK |

| REQ-02 | Counter starts at 0 | starts with count 0 | src/\_\_tests\_\_/App.spec.ts | OK |

| REQ-03 | Button increments counter | increments count when button is clicked | src/\_\_tests\_\_/App.spec.ts | OK |

| REQ-04 | Reset button resets counter | resets count to 0 | src/\_\_tests\_\_/App.spec.ts | OK |

| NFR-01 | Coverage >= 80% | npm run test:unit | Pipeline | 91.66% |

| NFR-02 | Quality Gate | SonarQube | Pipeline | OK |

| REG-01 | Traceability | HTML report | gerar\_relatorio.py | OK |

| REG-03 | Audit records | archiveArtifacts | Jenkinsfile | OK |



E2E Tests

| ID | Test | File | Status |

| E2E-01 | Application mounts without errors | src/\_\_tests\_\_/e2e.spec.ts | OK |

| E2E-02 | Main heading is rendered | src/\_\_tests\_\_/e2e.spec.ts | OK |

| E2E-03 | Counter starts at 0 and increments | src/\_\_tests\_\_/e2e.spec.ts | OK |



References

\- ISO 13485:2016 sec. 7.3.2 (Inputs) and sec. 7.3.5 (Verification)

\- Quality Manual GlobeStar v01.47

