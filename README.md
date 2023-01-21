# Hi, Megaventory staff 👋🏼
This is the repository for Megaventory back-end developer internship attendance task.

## JavaScript
I've used JavaScript which is a multi-paradigm language. That's why OOP principles can be implemented using JavaScript.
The app is built on Node.js runtime environment.

## Packages Used (npm)
- [Axios](https://www.npmjs.com/package/axios)
>   I'm using Axios to create HTTP requests for API integration.
- [Dotenv](https://www.npmjs.com/package/dotenv)
>   I'm using Dotenv to use environment variables such as API key. It's required to secure the API key inside .env file.

## Builders
I've used Builder design pattern. All entities implemented using Builders.

### Product Builder:
```javascript
new ProductBuilder()
    .setSKU("1112256")
    .setDescription("Nike shoes")
    .setSalesPrice(99.99)
    .setPurchasePrice(44.99)
    .insert();
```

### Client Builder:
```javascript
new SupplierClientBuilder()
    .setName("babis")
    .setMail("babis@exampletest.com")
    .setShippingAddress("Example 8, Athens")
    .setPhone("1235698967")
    .insert();
```

### Inventory Location Builder:
```javascript
new InventoryLocationBuilder()
    .setName("Test Project Location")
    .setAbbreviation("Test")
    .setAddress("Example 20, Athens")
    .insert();
```

### Tax Builder:
```javascript
new TaxBuilder()
    .setName("VAT")
    .setDescription("VAT GR")
    .setValue(24)
    .insert();
```

### Discount Builder:
```javascript
new DiscountBuilder()
    .setName("Loyalty")
    .setDescription("Loyalty Customer Discount")
    .setValue(50)
    .insert();
```

### Insertion to System
The insertion/updating operation can be done using `#insert()` function.
