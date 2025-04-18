function renderCart(cartItems) {
    const tbody = document.querySelector("#cart-table tbody");
    const grandTotal = document.getElementById("grand-total");
    tbody.innerHTML = "";

    let total = 0;
    cartItems.forEach(item => {
      const row = document.createElement("tr");
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>$${itemTotal.toFixed(2)}</td>
      `;

      tbody.appendChild(row);
    });

    grandTotal.textContent = `$${total.toFixed(2)}`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    renderCart(cart);

    document.getElementById("save-fav").addEventListener("click", function () {
      localStorage.setItem("favouriteOrder", JSON.stringify(cart));
      alert("Current order saved as favourite.");
    });

    document.getElementById("load-fav").addEventListener("click", function () {
      const favourite = JSON.parse(localStorage.getItem("favouriteOrder"));
      if (favourite) {
        localStorage.setItem("cart", JSON.stringify(favourite));
        cart = favourite;
        renderCart(cart);
        alert("Favourite order applied to cart.");
      } else {
        alert("No favourite order saved.");
      }
    });

    document.getElementById("clear-cart").addEventListener("click", function () {
      if (confirm("Are you sure you want to clear the cart?")) {
        localStorage.removeItem("cart");
        cart = [];
        renderCart(cart);
      }
    });

    function Back()
    {
        const backBtn = document.getElementById("backbutton");

        backBtn.addEventListener("click", function(){
            window.location.href = "shops.html";
        })
    }
    Back();
  });