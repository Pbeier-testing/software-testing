# Test Design – Boundary Value Analysis

## Objective
Identify boundary conditions for input fields to ensure proper validation.

---

## Field: Postal Code

### Assumption
Postal Code expects numeric input.

### Boundary Values

| Case ID | Description              | Input Value |
|-------|--------------------------|-------------|
| B1    | Minimum valid length     | 1           |
| B2    | Typical valid value      | 12345       |
| B3    | Empty value              | (empty)     |

### Related Test Cases
- TC-CHECKOUT-001 → Valid postal code
- TC-CHECKOUT-006 → Empty postal code
