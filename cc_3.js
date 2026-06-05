let customers = [
    {
        name: "John Smith",
        email: "john@email.com",
        purchases: ["Laptop", "Mouse"]
    },
    {
        name: "Sarah Johnson",
        email: "sarah@email.com",
        purchases: ["Keyboard"]
    },
    {
        name: "Mike Brown",
        email: "mike@email.com",
        purchases: ["Monitor", "Headphones"]
    }
];
customers.push({
    name: "Emma Davis",
    email: "emma@email.com",
    purchases: ["Tablet"]
});
customers.shift();
customers[0].email = "sarah.johnson@email.com";
customers[1].purchases.push("Webcam");
customers.forEach(customer => {
    console.log(
        `Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`
    );
});
