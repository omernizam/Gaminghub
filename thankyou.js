document.addEventListener("DOMContentLoaded", function () {
    const name = localStorage.getItem("username");
    const date = localStorage.getItem("deliveryDate");

    if (name && date) {
      document.getElementById("thankMessage").textContent =
`Thank you, ${name}! Your order will arrive by ${date}.`;
    } else {
      document.getElementById("thankMessage").textContent =
        "Thank you for your order!";
    }
  });