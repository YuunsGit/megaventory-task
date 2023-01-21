const axios = require("axios");
require("dotenv").config();

// Discount builder implementation
class DiscountBuilder {
    // Private instance variable declerations
    #name;
    #desc;
    #value;

    // Builder functions
    setName(name) {
        this.#name = name;
        return this;
    }
    setDescription(desc) {
        this.#desc = desc;
        return this;
    }
    setValue(value) {
        this.#value = value;
        return this;
    }

    // Inserting, updating discount into the system using DiscountUpdate endpoint
    async insert() {
        try {
            // HTTP request with POST method
            const response = await axios({
                method: "post",
                url: "https://api.megaventory.com/v2017a/Discount/DiscountUpdate",
                data: {
                    APIKEY: process.env.APIKEY,
                    mvDiscount: {
                        DiscountName: this.#name,
                        DiscountDescription: this.#desc,
                        DiscountValue: this.#value,
                    },
                    mvRecordAction: "InsertOrUpdate",
                },
            });

            // Handling request errors
            const status = response.data.ResponseStatus;
            switch (status.ErrorCode) {
                // 0 -> Success
                case "0":
                    console.log(`The discount [${this.#name}] has been updated/inserted.`);
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

module.exports = DiscountBuilder;
