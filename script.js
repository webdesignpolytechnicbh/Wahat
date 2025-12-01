var form = document.getElementsByClassName("cart-form")[0];

form.onsubmit = function () {
  alert("Your order has been received!");
  return true; // allow form submission
};
