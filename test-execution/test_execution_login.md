# Test Execution – Login

**Test Object:** SauceDemo  
**Test Type:** Manual Functional Testing
**Test Environment:**
- OS: Windows 11 Version 24H2
- Browser: Google Chrome Version 143.0.7499.148

**Tester:** Pbeier 
**Test Date:** 22.12.2025

---

## Test Execution Results

| Test Case ID | Description                             | Status             | Execution Notes                                               |
| ------------ | --------------------------------------- | ------------------ | ----------------------------------------------------- |
| TC-LOGIN-001 | Successful login with valid credentials | Passed             | -                                                     |
| TC-LOGIN-002 | Login fails with invalid password       | Passed with defect | BR-LOGIN-UI-001 – Error message text is partially cut off on login page |
| TC-LOGIN-003 | Login fails with invalid username       | Passed with defect | BR-LOGIN-UI-001 – Error message text is partially cut off on login page |
| TC-LOGIN-004 | Login fails with empty username         | Passed             | Validation error shown                                |
| TC-LOGIN-005 | Login fails with empty password         | Passed             | Validation error shown                                |
| TC-LOGIN-006 | Login fails with empty credentials      | Passed             | Validation error shown                                |
| TC-LOGIN-007 | Login fails with locked out user        | Passed             | Locked user error message displayed                   |
