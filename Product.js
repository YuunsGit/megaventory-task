const axios = require("axios");
require("dotenv").config();

// Product builder implementation
class ProductBuilder {
    // Private instance variable declerations
    #sku;
    #desc;
    #salesPrice;
    #purchasePrice;

    // Builder functions
    setSKU(sku) {
        this.#sku = sku;
        return this;
    }
    setDescription(desc) {
        this.#desc = desc;
        return this;
    }
    setSalesPrice(salesPrice) {
        this.#salesPrice = salesPrice;
        return this;
    }
    setPurchasePrice(purchasePrice) {
        this.#purchasePrice = purchasePrice;
        return this;
    }

    // Inserting, updating product into the system using ProductUpdate endpoint
    async insert() {
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

module.exports = ProductBuilder;
