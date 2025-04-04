const navbar = document.getElementById("navbar");

window.onscroll = () => {
    const scrollValue = window.scrollY;
    console.log(scrollValue);
    const valuescroll = 120;

    if (window.scrollY > valuescroll) {
        navbar.style.backgroundColor = "#6f4e37";
        navbar.style.transition = "0.5s";
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.transition = "0.5s";
    }
};

// 
// 

document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.getElementById("order-form");
    const cartButton = document.getElementById("cart-button");
    const cartSummary = document.getElementById("cart-summary");
    const cartItems = document.getElementById("cart-items");

    // Array to hold cart items
    let cart = [];

    // Event listener for form submission
    orderForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const coffee = document.getElementById("coffee").value;
        const quantity = parseInt(document.getElementById("quantity").value, 10);

        // Define prices
        const prices = {
            "Espresso": 3.00,
            "Cappuccino": 4.00,
            "Latte": 4.50,
            "Americano" :2.50,
            "Matcha-Latte" :5.00,
            "Hot-Chocolate" :3.50,
            "Espresso-Iced" :4.50,
            "Iced-Cappuccino" :3.50,
            "Iced-Latte" :3.50,
            "Strawberry-Soda" :4.00,
            "Iced-Americano" :3.50,
            "Chocolate" :5.00,
        };

        // Calculate total price
        const totalPrice = prices[coffee] * quantity;

        // Add to cart array
        cart.push({ name, coffee, quantity, totalPrice });

        // Reset form
        orderForm.reset();
        alert("Item added to cart!");
    });

    // Event listener for cart button
    cartButton.addEventListener("click", () => {
        cartSummary.classList.toggle("d-none");

        // Display cart items
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <h3>Order ${index + 1}</h3>
                <p><strong>Name:</strong> ${item.name}</p>
                <p><strong>Coffee:</strong> ${item.coffee}</p>
                <p><strong>Quantity:</strong> ${item.quantity}</p>
                <p><strong>Total Price:</strong> $${item.totalPrice.toFixed(2)}</p>
            </div>
        `).join("");
    });
});

