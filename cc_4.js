// Product inventory array
let products = [
    {
        name: "Laptop",
        category: "electronics",
        price: 1000,
        inventory: 10
    },
    {
        name: "T-Shirt",
        category: "apparel",
        price: 25,
        inventory: 30
    },
    {
        name: "Milk",
        category: "groceries",
        price: 4,
        inventory: 50
    },
    {
        name: "Detergent",
        category: "household",
        price: 12,
        inventory: 20
    },
    {
        name: "Book",
        category: "other",
        price: 15,
        inventory: 40
    }
];

// Apply category discounts
for (let product of products) {

    switch (product.category) {

        case "electronics":
            product.price = product.price * 0.80;
            break;

        case "apparel":
            product.price = product.price * 0.85;
            break;

        case "groceries":
        case "household":
            product.price = product.price * 0.90;
            break;

        default:
            break;
    }

    console.log(product.name + " discounted price: $" + product.price);
}

// Customer type
let customerType = "student";

let extraDiscount = 0;

if (customerType === "student") {
    extraDiscount = 0.05;
}
else if (customerType === "senior") {
    extraDiscount = 0.07;
}
else {
    extraDiscount = 0;
}

console.log("Customer Discount: " + (extraDiscount * 100) + "%");

// Simulate checkout process
for (let customer = 1; customer <= 3; customer++) {

    let totalCost = 0;

    for (let product of products) {

        if (product.inventory > 0) {

            totalCost += product.price;

            product.inventory--;
        }
    }

    totalCost = totalCost * (1 - extraDiscount);

    console.log("Customer #" + customer);
    console.log("Total Cost: $" + totalCost.toFixed(2));
}

// Display key/value pairs for first product
console.log("FOR...IN LOOP");

for (let key in products[0]) {

    console.log(key + ": " + products[0][key]);

}

// Display all products using Object.entries()
console.log("OBJECT.ENTRIES AND DESTRUCTURING");

for (let product of products) {

    for (let [key, value] of Object.entries(product)) {

        console.log(`${key}: ${value}`);

    }

    console.log("----------------");
}