# Software Testing Portfolio
This repository showcases my practical experience in software testing,
demonstrating a structured and process-oriented approach to manual testing,
test design, defect reporting, and basic test automation.

## Project Goal
The goal of this project is to demonstrate the application of basic test activities, including:
- Requirements analysis
- Test planning
- Test design using basic test design techniques
- Creation and execution of manual test cases
- Documentation of test results and defect reports
- Creation of a test closure report

The focus is on **clarity, structure and clean documentation**, not on completeness.

## Test Object
- **Name:** Sauce Demo
- **URL:** https://www.saucedemo.com
- **Description:**  
  Sauce Demo is a public demo web application commonly used for training and practice purposes in software testing.
  The application represents a simple online shop with login functionality, product overview, shopping cart and checkout process.

## Scope
Selected core functionalities of the application are tested, including:
- Login functionality
- Product overview
- Shopping cart
- Checkout process

Performance and security are **out of scope** for this project.

## Test Approach

### Manual Testing
- Manual testing was performed based on documented requirements using black-box test design techniques
- Basic test design techniques were applied (e.g. equivalence partitioning, boundary value analysis)
- Test execution results and defects were documented in Markdown format

### Test Automation
- End-to-end tests were implemented using **Playwright (JavaScript)**
- Tests follow the **Page Object Model (POM)** pattern
- Automation focuses on the main user flows:
  - Login
  - Product overview
  - Shopping cart
  - Checkout process

## Repository Structure
Test artifacts are organized according to the test process:
- `requirements/` – captured requirements for the test object
- `test-plan/` – overall test strategy and approach
- `test-design/` – test design techniques and specifications
- `test-cases/` – manual test cases
- `test-execution/` – executed test results
- `bug-reports/` – documented defects
- `test-closure/` – summary and closure report
- `automation/` – basic automation scripts

## Notes
This project is for demonstration purposes and does not represent a complete test coverage of the application.
