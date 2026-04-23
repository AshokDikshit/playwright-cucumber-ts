# Playwright Cucumber TypeScript Test Framework

A comprehensive end-to-end testing framework combining Playwright with Cucumber for behavior-driven development (BDD) testing, written in TypeScript.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [Contributing](#contributing)

## 🎯 Overview

This project provides a robust testing framework that combines:
- **Playwright** - Modern web automation library for reliable end-to-end testing
- **Cucumber** - BDD framework for writing tests in natural language
- **TypeScript** - Type-safe development experience
- **HTML Reporting** - Beautiful test reports with detailed insights

## ✨ Features

- 🎭 **Cross-browser testing** with Playwright (Chromium, Firefox, Safari)
- 🥒 **BDD approach** using Cucumber with Gherkin syntax
- 📝 **TypeScript support** for better code quality and IDE experience
- 📊 **HTML reports** with detailed test results and screenshots
- 🔧 **Configurable test execution** with custom hooks and setup
- 🚀 **Easy to extend** and maintain test suite

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd playwright-bdd-web-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## 📁 Project Structure

```
playwright-bdd-web-test/
├── tests/
│   ├── features/
│   │   └── pwexample.feature          # Gherkin feature files
│   └── steps/
│       ├── base.hooks.ts              # Setup and teardown hooks
│       ├── pwexample.steps.ts         # Step definitions
│       ├── base.txt                   # Base configuration notes
│       └── steps.txt                  # Steps documentation
├── reports/                           # Generated test reports (auto-created)
├── cucumber.js                        # Cucumber configuration
├── html-reporter.js                   # HTML report generator
├── package.json                       # Project dependencies and scripts
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # Project documentation
```

## ⚙️ Configuration

### Cucumber Configuration (`cucumber.js`)

The framework is configured to:
- Load step definitions from `tests/steps/**/*.ts`
- Use TypeScript with `ts-node/register`
- Generate JSON reports for HTML conversion
- Execute feature files from `tests/features/**/*.feature`

### TypeScript Configuration (`tsconfig.json`)

Configured with:
- Modern ES modules support (`nodenext`)
- Strict type checking
- Source maps for debugging
- Declaration files generation

### Browser Configuration

The framework uses Chromium browser in non-headless mode by default. You can modify the browser settings in `tests/steps/base.hooks.ts`:

```typescript
browser = await chromium.launch({ headless: false });
```

## 📝 Writing Tests

### Feature Files

Write your test scenarios in Gherkin syntax in the `tests/features/` directory:

```gherkin
Feature: Access Playwright

  Scenario: Successful navigation on playwright portal
    Given the user navigates to "https://example.com"
    When the user enter "test@email.com" in "email"
    And the user click on Create Account
    Then verify page title has "Sign In"
```

### Step Definitions

Implement step definitions in TypeScript in the `tests/steps/` directory:

```typescript
import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { page } from "./base.hooks";

Given('the user navigates to {string}', async (url) => {
  await page.goto(url);
});
```

## 🏃‍♂️ Running Tests

### Execute Tests

```bash
# Run all tests
npm test

# Run tests with specific tags (if configured)
npx cucumber-js --tags "@smoke"
```

### Generate HTML Reports

```bash
# Generate HTML report after test execution
npm run report
```

The HTML report will be generated in the `reports/` directory and automatically opened in your default browser.

## 📊 Reporting

The framework generates comprehensive HTML reports with:

- **Test execution summary** with pass/fail statistics
- **Scenario details** with step-by-step execution
- **Screenshots** on failures (when configured)
- **Execution timestamps** for performance analysis
- **Bootstrap-themed** responsive design

### Report Configuration

Customize report settings in `html-reporter.js`:

```javascript
const options = {
  theme: "bootstrap",
  jsonFile: "reports/cucumber-report.json",
  output: "reports/cucumber-report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true
};
```

## 🔧 Customization

### Adding New Browsers

Modify `base.hooks.ts` to test with different browsers:

```typescript
// For Firefox
browser = await firefox.launch({ headless: false });

// For Safari (WebKit)
browser = await webkit.launch({ headless: false });
```

### Environment Configuration

Create environment-specific configurations by:
1. Adding environment variables
2. Creating configuration files for different environments
3. Modifying the hooks to load environment-specific settings

### Page Object Model

Consider implementing Page Object Model pattern for better maintainability:

```typescript
// pages/LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}
  
  async login(email: string, password: string) {
    await this.page.fill('[data-automation-id="email"]', email);
    await this.page.fill('[data-automation-id="password"]', password);
    await this.page.click('[role="button"]');
  }
}
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Write tests** for your changes
4. **Commit your changes** (`git commit -m 'Add amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

### Coding Standards

- Follow TypeScript best practices
- Write descriptive Gherkin scenarios
- Implement reusable step definitions
- Add appropriate error handling
- Include meaningful assertions

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Cucumber.js Documentation](https://cucumber.io/docs/cucumber/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Gherkin Syntax Reference](https://cucumber.io/docs/gherkin/)

## 📄 License

This project is licensed under the ISC License.

---

**Happy Testing! 🎭🥒**
