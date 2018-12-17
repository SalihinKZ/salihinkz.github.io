
function deleteCart(name){
  var del1=document.getElementById('senarai');
  var del2=document.getElementById('bilangan');
  var del3=document.getElementById('harga');
  var del4 = document.getElementById('total');

  var q = document.getElementById('total').innerHTML;
  var w = document.getElementById('el2').innerHTML;
  var answer = parseFloat(q) - parseFloat(w);

  var b = document.getElementById('el1');
  var c = document.getElementById('el2');
  var d = document.getElementById('el3');

  var a = document.getElementById('el1').innerHTML;
  
  del1.removeChild(b);
  del2.removeChild(d);
  del3.removeChild(c);
  del4.textContent = answer.toFixed(2);
}
