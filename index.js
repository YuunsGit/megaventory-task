const ProductBuilder = require("./Product");
const SupplierClientBuilder = require("./SupplierClient");
const InventoryLocationBuilder = require("./InventoryLocation");
const TaxBuilder = require("./Tax");
const DiscountBuilder = require("./Discount");

// Product insertion operation
(function () {
    new ProductBuilder()
        .setSKU("1112256")
        .setDescription("Nike shoes")
        .setSalesPrice(99.99)
        .setPurchasePrice(44.99)
        .insert();

    new SupplierClientBuilder()
        .setName("babis")
        .setMail("babis@exampletest.com")
        .setShippingAddress("Example 8, Athens")
        .setPhone("1235698967")
        .insert();

    new InventoryLocationBuilder()
        .setName("Test Project Location")
        .setAbbreviation("Test")
        .setAddress("Example 20, Athens")
        .insert();

    new TaxBuilder().setName("VAT").setDescription("VAT GR").setValue(24).insert();

    new DiscountBuilder().setName("Loyalty").setDescription("Loyalty Customer Discount").setValue(50).insert();
})();
