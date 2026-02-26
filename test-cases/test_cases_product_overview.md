# Test Cases – Product Overview

## TC-PROD-001
**Title:** Display product list after login  
**Related Requirement:** R2.1  
**Precondition:** User is logged in and on the product overview page  

**Steps:**
1. Navigate to the product overview page after successful login

**Expected Result:**  
All available products are displayed in a list/grid format.

---

## TC-PROD-002
**Title:** Verify product information is displayed  
**Related Requirement:** R2.2  
**Precondition:** User is on the product overview page  

**Test Data:**  
- No special test data required

**Steps:**
1. Look at the list of products
2. Check each product displayed

**Expected Result:**  
Each product shows:  
- Product name  
- Product price  
- Product image  
- Add-to-cart button

---

## TC-PROD-003
**Title:** Sort products by name (A to Z)  
**Related Requirement:** R2.3  
**Precondition:** User is logged in and product overview page is displayed  

**Steps:**
1. Open the sort dropdown
2. Select "Name (A to Z)"

**Expected Result:**  
Products are displayed in alphabetical order from A to Z.

---

## TC-PROD-004
**Title:** Sort products by name (Z to A)  
**Related Requirement:** R2.3  
**Precondition:** User is logged in and product overview page is displayed  

**Steps:**
1. Open the sort dropdown
2. Select "Name (Z to A)"

**Expected Result:**  
Products are displayed in reverse alphabetical order from Z to A.

---

## TC-PROD-005
**Title:** Sort products by price (low to high)  
**Related Requirement:** R2.3  
**Precondition:** User is logged in and product overview page is displayed  

**Steps:**
1. Open the sort dropdown
2. Select "Price (low to high)"

**Expected Result:**  
Products are displayed in ascending order by price.

---

## TC-PROD-006
**Title:** Sort products by price (high to low)  
**Related Requirement:** R2.3  
**Precondition:** User is logged in and product overview page is displayed  

**Steps:**
1. Open the sort dropdown
2. Select "Price (high to low)"

**Expected Result:**  
Products are displayed in descending order by price.
