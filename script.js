document.getElementsByTagName("tr")[1].onclick = function () {
  alert("Chicken Sandwich added to cart");
};
  
  document.getElementsByTagName("tr")[2].onclick = function () {
  alert("Beef Sandwich added to cart");
};
  
  document.getElementsByTagName("tr")[4].onclick = function () {
  alert("Orange Juice added to cart");
};
  
  document.getElementsByTagName("tr")[5].onclick = function () {
  alert("Apple Juice added to cart");
};

  document.getElementsByTagName("tr")[7].onclick = function () {
  alert("Margherita Pizza added to cart");
};
  
  document.getElementsByTagName("tr")[8].onclick = function () {
  alert("Pepperoni Pizza added to cart");
};
  
  document.getElementsByTagName("tr")[10].onclick = function () {
  alert("Pen added to cart");
};

  document.getElementsByTagName("tr")[11].onclick = function () {
  alert("Notebook added to cart");
};
  
  document.getElementsByTagName("tr")[12].onclick = function () {
  alert("Highlighter added to cart");
};
  
  document.getElementsByClassName("cart-form")[0].onsubmit = function () {
  alert("Your order has been submitted!");
  return false;
};
