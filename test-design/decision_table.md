# Test Design – Decision Table

## Objective
Validate checkout behavior based on mandatory input fields.

---

## Conditions

| Condition ID | Description                 |
|-------------|-----------------------------|
| C1          | First name entered          |
| C2          | Last name entered           |
| C3          | Postal code entered         |

## Actions

| Action ID | Description                        |
|----------|------------------------------------|
| A1       | Proceed to checkout overview       |
| A2       | Display error message              |

---

## Decision Table

| Rule | C1 | C2 | C3 | Action |
|-----|----|----|----|--------|
| R1  | Y  | Y  | Y  | A1     |
| R2  | N  | Y  | Y  | A2     |
| R3  | Y  | N  | Y  | A2     |
| R4  | Y  | Y  | N  | A2     |

### Related Test Cases
- TC-CHECKOUT-001 → R1
- TC-CHECKOUT-004 → R2
- TC-CHECKOUT-005 → R3
- TC-CHECKOUT-006 → R4
