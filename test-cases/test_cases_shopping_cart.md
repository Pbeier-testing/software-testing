# Test Cases – Shopping Cart

## TC-CART-001
**Title:** Add a product to the shopping cart  
**Related Requirement:** R3.1  
**Precondition:** User is logged in and on the product overview page  

**Test Data:**  
- Product: any available product (z. B. "Sauce Labs Backpack")

**Steps:**
1. Locate the product on the product overview page
2. Click the "Add to cart" button

**Expected Result:**  
The product is added to the shopping cart, and the cart icon shows the correct quantity.

---

## TC-CART-002
**Title:** Remove a product from the shopping cart  
**Related Requirement:** R3.2  
**Precondition:** User has at least one product in the shopping cart  

**Test Data:**  
- Product: any product currently in the cart

**Steps:**
1. Open the shopping cart
2. Click the "Remove" button for the selected product

**Expected Result:**  
The product is removed from the shopping cart, and the cart icon updates correctly.

---

## TC-CART-003
**Title:** Verify shopping cart contents  
**Related Requirement:** R3.3  
**Precondition:** User has added multiple products to the cart  

**Test Data:**  
- Products: 2–3 products from the product overview page

**Steps:**
1. Open the shopping cart
2. Check the list of products and their quantities

**Expected Result:**  
The shopping cart displays all added products with correct names, quantities, and prices.
