function hideFunction() {
  var x = document.getElementById("OrderDetails");
  var y = document.getElementById("OrderForm");

  if (x) {
    x.style.display = 'none';
    y.style.display = 'block';
    }
    pFunction();
    resetOrder();
}

function pFunction() {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
}
