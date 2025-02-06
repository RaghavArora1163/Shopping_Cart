const ShoppingCart = require("./cart");

(async () => {
    const cart = new ShoppingCart();

    await cart.addProduct("cornflakes", 1);
    await cart.addProduct("cornflakes", 1);
    await cart.addProduct("weetabix", 1);

    cart.printCart();
})();
