
document.addEventListener("DOMContentLoaded", setupCart);

cart();
function setupCart() {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(function (button) 
  {
    button.addEventListener("click", function (event) {
      const card = event.target.closest(".product-card");
      const name = card.getAttribute("data-name");
      const price = parseFloat(card.getAttribute("data-price"));

      addToCart(name, price);
    });
  });
}
function cart(){
    const cartBtn = document.getElementById("cartBtn");

    cartBtn.addEventListener("click", function(){
        window.location.href="cart.html";
    })
}


function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: name, price: price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  showNotification(name + " added to cart");
}


function showNotification(message) {
  alert(message);
}



