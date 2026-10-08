.PHONY: install lint type-check test test-e2e build sonar clean

install:
	npm install --legacy-peer-deps

lint:
	npm run lint

type-check:
	npm run type-check

test:
	npm run test:unit

test-e2e:
	npm run test:e2e

build:
	npm run build

sonar:
	C:\\SonarScanner-8.1.0\\sonar-scanner-8.1.0.6389-windows-x64\\bin\\sonar-scanner.bat -Dsonar.token=%SONAR_TOKEN% -Dsonar.host.url=http://127.0.0.1:9000 -Dsonar.qualitygate.wait=true

clean:
	rm -rf node_modules dist coverage reports .scannerwork