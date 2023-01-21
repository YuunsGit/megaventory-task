const axios = require("axios");
require("dotenv").config();

// Inventory location builder implementation
class InventoryLocationBuilder {
    // Private instance variable declerations
    #name;
    #abbr;
    #address;

    // Builder functions
    setName(name) {
        this.#name = name;
        return this;
    }
    setAbbreviation(abbr) {
        this.#abbr = abbr;
        return this;
    }
    setAddress(address) {
        this.#address = address;
        return this;
    }

    // Inserting, updating inventory location into the system using InventoryLocationUpdate endpoint
    async insert() {
        try {
            // HTTP request with POST method
            const response = await axios({
                method: "post",
                url: "https://api.megaventory.com/v2017a/InventoryLocation/InventoryLocationUpdate",
                data: {
                    APIKEY: process.env.APIKEY,
                    mvInventoryLocation: {
                        InventoryLocationName: this.#name,
                        InventoryLocationAbbreviation: this.#abbr,
                        InventoryLocationAddress: this.#address,
                    },
                    mvRecordAction: "InsertOrUpdate",
                },
            });

            // Handling request errors
            const status = response.data.ResponseStatus;
            switch (status.ErrorCode) {
                // 0 -> Success
                case "0":
                    console.log(`The inventory location [${this.#abbr}] has been updated/inserted.`);
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

module.exports = InventoryLocationBuilder;
