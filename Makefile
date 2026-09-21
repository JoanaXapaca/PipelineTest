.PHONY: install lint type-check test build sonar clean

install:
	npm install --legacy-peer-deps

lint:
	npm run lint

type-check:
	npm run type-check

test:
	npm run test:unit

build:
	npm run build

sonar:
	npx sonar-scanner -Dsonar.qualitygate.wait=true

clean:
	rm -rf node_modules dist coverage reports
