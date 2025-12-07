var form = document.getElementsByClassName("cart-form")[0];

form.onsubmit = function () {
  alert("Your order has been received!");
  return true; // allow form submission
};
<script>
document.getElementById("sandwich-price-header").onclick = function() {
    alert("All prices are subject to VAT");
};
</script>
