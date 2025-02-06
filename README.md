# Shopping Cart Assignment

## Overview
This project implements a simple shopping cart using JavaScript. The cart retrieves product prices from a mock Price API and calculates:
- **Subtotal**: Sum of all product prices in the cart.
- **Tax**: 12.5% of the subtotal.
- **Total Payable**: Subtotal + Tax.

This solution follows best practices, including unit testing, modular design, and clear documentation.

---

## 🚀 Submission Details
This repository contains the completed implementation for the shopping cart assignment.  
- **Programming Language:** JavaScript (Node.js)
- **Testing Framework:** Jest
- **Package Manager:** npm

---

## 📌 Project Setup

### 1️⃣ Clone the Repository
```sh
git clone <your-repository-url>
cd shopping-cart-assignment-main
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Price API
```sh
npm run serve-products
```
This starts the API at `http://localhost:3001/`.
Verify it’s running by visiting:

```bash
http://localhost:3001/products/cornflakes
```
Expected response:

```json
{ "price": 2.52 }
```

### 4️⃣ Run the Application
To execute the shopping cart logic:

```sh
node src/index.js
```

### 5️⃣ Run Tests
To verify the implementation:

```sh
npm test
```
Expected output:

```java
PASS  test/cart.test.js
✓ should add products correctly (XX ms)
✓ should calculate tax correctly (XX ms)
✓ should calculate total correctly (XX ms)
```

---

## 📌 Assumptions
- **Product Price Availability**: If a product's price cannot be retrieved from the Price API, it will be treated as unavailable, and an error will be logged.
- **Rounding**: Tax and total calculations are rounded to two decimal places.
- **Positive Quantities**: Products can only be added with positive quantities; negative or zero quantities are ignored.
- **API Dependency**: The cart relies on the Price API to fetch prices. If the API is down or unreachable, product addition will fail.

---

## 📌 Trade-offs
- **Simplicity Over Robustness**: This implementation prioritizes clarity and correctness over handling edge cases like network failures or concurrency.
- **No Persistent Storage**: The shopping cart exists in memory and will reset on each execution.
- **Mocked API Responses in Tests**: Unit tests mock the API to avoid dependency on the live service.

---

## 📌 How to Test the Solution

### ✅ Automated Testing
Run unit tests:
```sh
npm test
```
Expected output:
```java
PASS  test/cart.test.js
✓ should add products correctly (XX ms)
✓ should calculate tax correctly (XX ms)
✓ should calculate total correctly (XX ms)
```

### ✅ Manual Testing
#### Step 1: Start the Price API
```sh
npm run serve-products
```

#### Step 2: Add Products & Calculate Totals
Modify `src/index.js` to include:

```javascript
const ShoppingCart = require("./cart");

(async () => {
    const cart = new ShoppingCart();

    await cart.addProduct("cornflakes", 2);
    await cart.addProduct("weetabix", 1);

    console.log("Cart State:", cart.getCartState());
})();
```
Run the script:
```sh
node src/index.js
```

Expected Output:
```yaml
Cart State: {
  items: { cornflakes: { quantity: 2, price: 2.52 }, weetabix: { quantity: 1, price: 9.98 } },
  subtotal: 15.02,
  tax: 1.88,
  total: 16.90
}
```

---

## 📌 Code Structure
```bash
shopping-cart-assignment/
│── src/
│   ├── cart.js        # Shopping cart logic
│   ├── priceApi.js    # Price API integration
│   ├── index.js       # Example script to test cart functionality
│── test/
│   ├── cart.test.js   # Jest test cases for shopping cart
│── package.json       # Project dependencies & scripts
│── README.md          # Documentation
```

---

## 📌 Submission Instructions
This project has been fully implemented and tested. The repository is public and can be reviewed.

To access the submission:

- **Repository URL**: [Insert your GitHub repository link here]
- **How to Run**: Follow the setup instructions above.
