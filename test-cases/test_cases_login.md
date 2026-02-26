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

---

## TC-LOGIN-003
**Title:** Login fails with invalid username  
**Related Requirement:** R1.2  
**Precondition:** User is on the login page  

**Test Data:**
- Username: wrong_user
- Password: secret_sauce

**Steps:**
1. Enter username
2. Enter password
3. Click login

**Expected Result:**  
An error message indicating invalid credentials is displayed and login is not successful.

---

## TC-LOGIN-004
**Title:** Login fails with empty username  
**Related Requirement:** R1.2  
**Precondition:** User is on the login page  

**Test Data:**
- Username: (empty)
- Password: secret_sauce

**Steps:**
1. Leave username field empty
2. Enter password
3. Click login

**Expected Result:**  
An error message indicating invalid credentials is displayed and login is not successful.

---

## TC-LOGIN-005
**Title:** Login fails with empty password  
**Related Requirement:** R1.2  
**Precondition:** User is on the login page  

**Test Data:**
- Username: standard_user
- Password: (empty)

**Steps:**
1. Enter username
2. Leave password field empty
3. Click login

**Expected Result:**  
An error message indicating invalid credentials is displayed and login is not successful.

---

## TC-LOGIN-006
**Title:** Login fails with empty username and password 
**Related Requirement:** R1.2  
**Precondition:** User is on the login page  

**Test Data:**
- Username: (empty)
- Password: (empty)

**Steps:**
1. Leave username field empty
2. Leave password field empty
3. Click login
   
**Expected Result:**  
An error message indicating invalid credentials is displayed and login is not successful.

---

## TC-LOGIN-007
**Title:** Login fails with locked out user  
**Related Requirement:** R1.3  
**Precondition:** User is on the login page  

**Test Data:**
- Username: locked_out_user
- Password: secret_sauce

**Steps:**
1. Enter username
2. Enter password
3. Click login

**Expected Result:**  
An error message indicating a locked account is displayed and login is not successful.