const Product = require("./Product.js");

// Product insertion operation
(function () {
    const product = new Product("1112256", "Nike shoes", 99.99, 44.99);
    product.update();
})();
