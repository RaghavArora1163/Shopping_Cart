const ShoppingCart = require("../src/cart");

jest.mock("../src/priceApi", () => ({
    getProductPrice: jest.fn((productName) => {
        const prices = { cornflakes: 2.52 };
        return Promise.resolve(prices[productName] || 0);
    }),
}));

describe("Shopping Cart", () => {
    let cart;

    beforeEach(() => {
        cart = new ShoppingCart();
    });

    test("should add products correctly", async () => {
        await cart.addProduct("cornflakes", 1);
        expect(cart.getSubtotal()).toBe(2.52);
    });

    test("should calculate tax correctly", async () => {
        await cart.addProduct("cornflakes", 1);
        expect(cart.getTax()).toBe(0.32);
    });

    test("should calculate total correctly", async () => {
        await cart.addProduct("cornflakes", 1);
        expect(cart.getTotal()).toBe(2.84);
    });
});