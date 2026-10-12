Design Validation Plan



Project: Pipeline Test (Vue)

Standard: ISO 13485:2016 - SOP 7.3.6



1\. Objective

Validate that the software meets user requirements in a simulated environment. The real clinical environment is out of scope.



2\. Validation Environment

| Item | Description |

| Operating system | Windows 11 |

| Runtime | Node.js 26.8.2 |

| Framework | Vue 3.5 + TypeScript |

| User | Developer / QA |

| Scenario | Run E2E tests |



3\. E2E Tests

| ID | Test | Scenario | Acceptance Criterion |

| E2E-01 | Mount | mount(App) | Application mounts without errors |

| E2E-02 | Render | wrapper.find('h1') | Heading renders with text |

| E2E-03 | Interaction | button.trigger('click') | Counter increments |



4\. Limitations

Validation in a real clinical environment is not applicable to this pipeline test project. The real product, ConnexALL, is validated at the customer site.

