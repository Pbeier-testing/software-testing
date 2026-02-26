# Playwright Test Automation

## Overview

This folder contains automated end-to-end tests for the SauceDemo web application using Playwright and JavaScript.

The automation covers the main functional areas of the application:

* Login
* Product overview
* Shopping cart
* Checkout process

The tests are implemented using the Page Object Model (POM) to ensure maintainability, readability, and scalability.

---

## Technology Stack

* Playwright
* JavaScript (Node.js)
* Page Object Model (POM)

---

## Project Structure

```
automation/
│
├── pages/                 # Page Object classes
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/                 # Test specifications
│   ├── login.spec.js
│   ├── products.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
│
├── playwright.config.js   # Playwright configuration
├── package.json
└── README.md
```

---

## Prerequisites

The following must be installed:

* Node.js 
* npm (comes with Node.js)

Check installation:

```
node -v
npm -v
```

---

## Installation

Clone the repository:

```
git clone https://github.com/Pbeier-testing/software-testing.git
```

Navigate to the automation folder:

```
cd software-testing/automation
```

Install dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install
```

---

## Running Tests

Run all tests:

```
npx playwright test
```

Run tests in headed mode (visible browser):

```
npx playwright test --headed
```

Run tests in a specific browser:

```
npx playwright test --project=chromium
```

Run a specific test file:

```
npx playwright test tests/login.spec.js
```

---

## Test Reports

After running tests, Playwright generates an HTML report.

Open the report:

```
npx playwright show-report
```

The report includes:

* Test results
* Execution time
* Error details
* Trace files

---

## Test Design Approach

The automation uses the Page Object Model (POM):

* Separates test logic from UI interaction
* Improves maintainability
* Reduces code duplication
* Makes tests easier to read and extend

Folder structure:

* pages/ → contains UI interaction logic
* tests/ → contains test scenarios and assertions

---

## Scope of Automation

The automated tests cover:

Login:

* Valid login
* Invalid login

Products:

* Product sorting

Cart:

* Add product
* Remove product
* Verify cart badge

Checkout:

* Enter user information
* Complete checkout
* Verify confirmation

---

## How to Extend the Tests

To add new tests:

1. Create or update a Page Object in `pages/`
2. Create a new test file in `tests/`
3. Run tests using:

```
npx playwright test
```

---

## Purpose

This automation project demonstrates practical skills in:

* Test automation with Playwright
* Test framework structure
* Page Object Model implementation
* Automated UI testing

