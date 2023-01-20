const axios = require("axios");
require("dotenv").config();

class Product {
    // Private instance variable declerations
    #sku;
    #desc;
    #salesPrice;
    #purchasePrice;

    // Constructor of the Product with attribute definitions
    constructor(sku, desc, salesPrice, purchasePrice) {
        this.#sku = sku;
        this.#desc = desc;
        this.#salesPrice = salesPrice;
        this.#purchasePrice = purchasePrice;
    }

    // Getter functions for encapsulation
    getSKU() {
        return this.#sku;
    }
    getDescription() {
        return this.#desc;
    }
    getSalesPrice() {
        return this.#salesPrice;
    }
    getPurchasePrice() {
        return this.#purchasePrice;
    }

    // Setter functions for encapsulation
    setSKU(sku) {
        this.#sku = sku;
    }
    setDescription(desc) {
        this.#desc = desc;
    }
    setSalesPrice(salesPrice) {
        this.#salesPrice = salesPrice;
    }
    setPurchasePrice(purchasePrice) {
        this.#purchasePrice = purchasePrice;
    }

    // Inserting, updating product into system using ProductUpdate endpoint
    async update() {
        try {
            // HTTP request with POST method
            const response = await axios({
                method: "post",
                url: "https://api.megaventory.com/v2017a/Product/ProductUpdate",
                data: {
                    APIKEY: process.env.APIKEY,
                    mvProduct: {
                        ProductSKU: this.#sku,
                        ProductDescription: this.#desc,
                        ProductSellingPrice: this.#salesPrice,
                        ProductPurchasePrice: this.#purchasePrice,
                    },
                    mvRecordAction: "InsertOrUpdate",
                },
            });

            // Handling request errors
            const status = response.data.ResponseStatus;
            console.log(status);
            switch (status.ErrorCode) {
                // 0 -> Success
                case "0":
                    console.log(`The product with SKU [${this.#sku}] has been updated/inserted.`);
                    break;
                // 500 -> Error
                case "500":
                    console.log(status.Message);
                    break;
                default:
                    break;
            }
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = Product;
