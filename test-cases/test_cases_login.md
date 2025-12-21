# Test Cases – Login

## TC-LOGIN-001
**Title:** Successful login with valid credentials  
**Related Requirement:** R1.1  
**Precondition:** User is on the login page  

**Test Data:**
- Username: standard_user
- Password: secret_sauce

**Steps:**
1. Enter username
2. Enter password
3. Click login

**Expected Result:**  
User is successfully logged in and redirected to the product overview page.

---

## TC-LOGIN-002
**Title:** Login fails with invalid password  
**Related Requirement:** R1.2  
**Precondition:** User is on the login page  

**Test Data:**
- Username: standard_user
- Password: wrong_password

**Steps:**
1. Enter username
2. Enter password
3. Click login

**Expected Result:**  
An error message indicating invalid credentials is displayed and login is not successful.
