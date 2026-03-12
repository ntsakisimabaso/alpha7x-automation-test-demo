# alpha7x-automation-test-demo

A QA automation demo project using Playwright, with CI/CD via Azure Pipelines running on a self-hosted macOS agent.

## Features

- UI automation tests against [saucedemo.com](https://www.saucedemo.com)
- API tests against [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
- HTML test reports published as pipeline artifacts
- Azure Pipelines CI/CD (self-hosted agent: `Default` pool)

## Prerequisites

- Node.js 20.x
- npm

## Run Tests Locally

```sh
npm install
npx playwright install
npx playwright test
```

View the HTML report after a run:

```sh
npx playwright show-report
```

## CI/CD

The pipeline (`azure-pipelines.yml`) triggers on pushes to `main` and:

1. Installs Node.js 20.x
2. Installs dependencies via `npm ci`
3. Installs Playwright browsers
4. Runs all tests with the HTML reporter
5. Publishes the report as a `Playwright-Results` artifact

### Self-hosted Agent Setup (macOS)

1. Download the ARM64 agent from Azure DevOps
2. Extract and remove quarantine:
   ```sh
   tar xzf vsts-agent-osx-arm64-*.tar.gz
   xattr -r -d com.apple.quarantine .
   find bin -name "*.dylib" -exec codesign --force --sign - {} \;
   ```
3. Configure and run:
   ```sh
   ./config.sh   # register to the Default pool
   ./run.sh
   ```
