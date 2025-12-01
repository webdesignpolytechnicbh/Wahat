var form = document.getElementsByClassName("cart-form")[0];

var label = document.createElement("label");
label.textContent = "Your Order:";

var textarea = document.createElement("textarea");
textarea.rows = 6;
textarea.placeholder = "Write your full order here...";
textarea.required = true;

// Insert before the last form element (submit button)
form.insertBefore(label, form.lastElementChild);
form.insertBefore(textarea, form.lastElementChild);

// Form submit alert (unchanged)
form.onsubmit = function () {
  alert("Your order has been received!");
  return true;
};
