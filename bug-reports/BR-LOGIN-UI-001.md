# BR-LOGIN-UI-001

**Title:** Error message text is partially cut off on login page

**Severity:** Medium  
**Priority:** Medium  
**Status:** Open  

---

## Description
When entering invalid login credentials, the error message is displayed in a container that is too small.  
As a result, the first and last line of the error message are partially cut off and not fully readable.

---

## Steps to Reproduce
1. Open the login page
2. Enter an invalid username or password
3. Click the login button

---

## Actual Result
The error message container is too small and the text is partially cut off.

---

## Expected Result
The full error message should be displayed clearly without any text being cut off.

---

## Environment
- OS: Windows 11 Version 24H2
- Browser: Google Chrome Version 143.0.7499.148

---

## Related Test Cases
- TC-LOGIN-002
- TC-LOGIN-003

---

## Related Requirement
- R1.2

---

## Attachments
- screenshot_login_error_cutoff.png


