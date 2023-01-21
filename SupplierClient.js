const axios = require("axios");
require("dotenv").config();

// Supplier client builder implementation
class SupplierClientBuilder {
    // Private instance variable declerations
    #name;
    #mail;
    #shippingAddress;
    #phone;

    // Builder functions
    setName(name) {
        this.#name = name;
        return this;
    }
    setMail(mail) {
        this.#mail = mail;
        return this;
    }
    setShippingAddress(shippingAddress) {
        this.#shippingAddress = shippingAddress;
        return this;
    }
    setPhone(phone) {
        this.#phone = phone;
        return this;
    }

    // Inserting, updating supplier client into the system using SupplierClientUpdate endpoint
    async insert() {
        try {
            // HTTP request with POST method
            const response = await axios({
                method: "post",
                url: "https://api.megaventory.com/v2017a/SupplierClient/SupplierClientUpdate",
                data: {
                    APIKEY: process.env.APIKEY,
                    mvSupplierClient: {
                        SupplierClientType: "Client",
                        SupplierClientName: this.#name,
                        SupplierClientEmail: this.#mail,
                        SupplierClientShippingAddress1: this.#shippingAddress,
                        SupplierClientPhone1: this.#phone,
                    },
                    mvRecordAction: "Insert",
                },
            });

            // Handling request errors
            const status = response.data.ResponseStatus;
            switch (status.ErrorCode) {
                // 0 -> Success
                case "0":
                    console.log(`The supplier client [${this.#name}] has been updated/inserted.`);
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

module.exports = SupplierClientBuilder;
