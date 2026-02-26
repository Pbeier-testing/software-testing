# Test Cases – Checkout

## TC-CHECKOUT-001
**Title:** Enter valid checkout information  
**Related Requirement:** R4.1  
**Precondition:** User has at least one product in the shopping cart and is on the checkout page  

**Test Data:**  
- First Name: Max 
- Last Name: Mustermann  
- Postal Code: 12345

**Steps:**
1. Enter First Name
2. Enter Last Name
3. Enter Postal Code
4. Click "Continue"

**Expected Result:**  
User proceeds to the next checkout step (overview page) without errors.

---

## TC-CHECKOUT-002
**Title:** Complete checkout with valid information  
**Related Requirement:** R4.3  
**Precondition:** User is on the checkout overview page  

**Test Data:**  
- Products in cart: any

**Steps:**
1. Review products and total price
2. Click "Finish"

**Expected Result:**  
Checkout process completes successfully, and user is redirected to the confirmation page.

---

## TC-CHECKOUT-003
**Title:** Display order confirmation after checkout  
**Related Requirement:** R4.4  
**Precondition:** User has completed checkout  

**Test Data:**  
- Products purchased: any

**Steps:**
1. Observe the checkout complete page

**Expected Result:**  
An order confirmation message is displayed. (e.g., "Thank you for your order!")

---

## TC-CHECKOUT-004
**Title:** Checkout fails with empty first name  
**Related Requirement:** R4.2  
**Precondition:** User has at least one product in the shopping cart and is on the checkout information page  

**Test Data:**
- First Name: (empty)
- Last Name: Mustermann
- Postal Code: 12345

**Steps:**
1. Leave first name field empty
2. Enter last name
3. Enter postal code
4. Click "Continue"

**Expected Result:**  
An error message is displayed indicating that the first name is required.

---

## TC-CHECKOUT-005
**Title:** Checkout fails with empty last name  
**Related Requirement:** R4.2  
**Precondition:** User has at least one product in the shopping cart and is on the checkout information page  

**Test Data:**
- First Name: Max
- Last Name: (empty)
- Postal Code: 12345

**Steps:**
1. Enter first name
2. Leave last name field empty
3. Enter postal code
4. Click "Continue"

**Expected Result:**  
An error message is displayed indicating that the last name is required.

---

## TC-CHECKOUT-006
**Title:** Checkout fails with empty postal code  
**Related Requirement:** R4.2  
**Precondition:** User has at least one product in the shopping cart and is on the checkout information page  

**Test Data:**
- First Name: Max
- Last Name: Mustermann
- Postal Code: (empty)

**Steps:**
1. Enter first name
2. Enter last name
3. Leave postal code field empty
4. Click "Continue"

**Expected Result:**  
An error message is displayed indicating that the postal code is required.
