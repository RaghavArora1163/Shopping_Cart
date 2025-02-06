const { getProductPrice } = require("./priceApi");

class ShoppingCart {
    constructor() {
        this.cart = {};
    }

    /**
     * Adds a product to the cart.
     * @param {string} productName - Product name.
     * @param {number} quantity - Quantity to add.
     */
    async addProduct(productName, quantity) {
        if (quantity <= 0) throw new Error("Quantity must be greater than zero");
        
        const price = await getProductPrice(productName);

        if (!this.cart[productName]) {
            this.cart[productName] = { quantity: 0, price };
        }
        this.cart[productName].quantity += quantity;
    }

    /**
     * Calculates the subtotal (sum of product prices).
     * @returns {number}
     */
    getSubtotal() {
        return Object.values(this.cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    /**
     * Calculates tax (12.5% of subtotal).
     * @returns {number}
     */
    getTax() {
        return Math.round(this.getSubtotal() * 0.125 * 100) / 100; // Rounded to 2 decimal places
    }

    /**
     * Calculates the total amount payable.
     * @returns {number}
     */
    getTotal() {
        return this.getSubtotal() + this.getTax();
    }

    /**
     * Prints the cart summary.
     */
    printCart() {
        console.log("Cart Summary:");
        for (const [product, { quantity, price }] of Object.entries(this.cart)) {
            console.log(`- ${quantity} x ${product} @ ${price.toFixed(2)} each`);
        }
        console.log(`Subtotal: ${this.getSubtotal().toFixed(2)}`);
        console.log(`Tax: ${this.getTax().toFixed(2)}`);
        console.log(`Total: ${this.getTotal().toFixed(2)}`);
    }
}

module.exports = ShoppingCart;
