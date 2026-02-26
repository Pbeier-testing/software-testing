# Test Design – Equivalence Partitioning

## Objective
Use equivalence partitioning to reduce the number of test cases while maintaining adequate test coverage.

---

## 1. Login – Username & Password

### Input Fields
- Username
- Password

### Equivalence Classes

#### Username
| Class ID | Description                         | Valid / Invalid |
|--------|-------------------------------------|-----------------|
| U1     | Valid existing username             | Valid           |
| U2     | Non-existing username               | Invalid         |
| U3     | Empty username                      | Invalid         |

#### Password
| Class ID | Description                         | Valid / Invalid |
|--------|-------------------------------------|-----------------|
| P1     | Valid password                      | Valid           |
| P2     | Invalid password                    | Invalid         |
| P3     | Empty password                      | Invalid         |

### Covered Test Cases
- TC-LOGIN-001 → U1 + P1
- TC-LOGIN-002 → U1 + P2
- TC-LOGIN-003 → U2 + P1
- TC-LOGIN-004 → U3 + P1
- TC-LOGIN-005 → U1 + P3

---

## 2. Checkout – User Information

### Input Fields
- First Name
- Last Name
- Postal Code

### Equivalence Classes

| Field       | Valid Class                     | Invalid Class           |
|------------|----------------------------------|-------------------------|
| First Name | Non-empty text                  | Empty                   |
| Last Name  | Non-empty text                  | Empty                   |
| Postal Code| Numeric value                   | Empty                   |

### Covered Test Cases
- TC-CHECKOUT-001 → All valid
- TC-CHECKOUT-004 → Invalid First Name
- TC-CHECKOUT-005 → Invalid Last Name
- TC-CHECKOUT-006 → Invalid Postal Code
