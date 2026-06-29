// Fetch products using promises
function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch(error => {
            console.log(error);
        });
}

// Fetch products using async/await
async function fetchProductsAsync() {
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        const products = await response.json();

        displayProducts(products);

    } catch (error) {
        handleError(error);
    }
}

// Display the first five products
function displayProducts(products) {

    const container = document.getElementById("product-container");

    products.slice(0, 5).forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
            <h3>${product.fields.name}</h3>
            <p>$${product.fields.price / 100}</p>
        `;

        container.appendChild(card);

    });

}

// Handle fetch errors
function handleError(error) {
    console.log("An error occurred:", error.message);
}

// Call both functions
fetchProductsThen();
fetchProductsAsync();