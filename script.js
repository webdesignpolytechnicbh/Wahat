var form = document.getElementsByClassName("cart-form")[0];

form.onsubmit = function () {
  alert("Your order has been received!");
  return true; // allow form submission
};
document.getElementById("tdsandwich").onclick = function () {
  alert("All prices are subject to VAT");
};
