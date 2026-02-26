# Test Execution – Checkout

**Test Object:** SauceDemo  
**Test Type:** Manual Functional Testing
**Test Environment:**
- OS: Windows 11 Version 24H2
- Browser: Google Chrome Version 143.0.7499.148

**Tester:** Pbeier 
**Test Date:** 22.12.2025

---

## Test Execution Results

| Test Case ID    | Description                               | Status | Execution Notes                                                               |
| --------------- | ----------------------------------------- | ------ | ----------------------------------------------------------------------------- |
| TC-CHECKOUT-001 | Enter valid checkout information          | Passed | User proceeded to the overview page without errors.                           |
| TC-CHECKOUT-002 | Complete checkout with valid information  | Passed | Checkout completed successfully; user redirected to confirmation page.        |
| TC-CHECKOUT-003 | Display order confirmation after checkout | Passed | Order confirmation message displayed correctly ("Thank you for your order!"). |
| TC-CHECKOUT-004 | Checkout fails with empty first name      | Passed | Error message displayed indicating first name is required.                    |
| TC-CHECKOUT-005 | Checkout fails with empty last name       | Passed | Error message displayed indicating last name is required.                     |
| TC-CHECKOUT-006 | Checkout fails with empty postal code     | Passed | Error message displayed indicating postal code is required.                   |