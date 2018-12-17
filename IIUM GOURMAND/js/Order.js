var counter = 0;
function addCart1( name, pr, nl){
  var food;
  food = '\n' + document.getElementById(name).innerHTML;

  var val= document.getElementById(nl).value;
  var price = document.getElementById(pr).innerHTML;
  var totPrice = document.getElementById("total").innerHTML;
  var p1 = parseFloat(totPrice);
  var p2 = parseFloat(price);


    var para = document.createElement("p");
    para.id = 'el1';
    var id = para.id;
    var t = document.createTextNode(food);
    para.appendChild(t);
    document.getElementById("senarai").appendChild(para);

    var y =p2*val;

    var para2 = document.createElement("P");
    para2.id = 'el2';
    var t2 = document.createTextNode(y);
    para2.appendChild(t2);
    document.getElementById("harga").appendChild(para2);

    var para3 = document.createElement("P");
    para3.id = 'el3';
    var t3 = document.createTextNode(val);
    para3.appendChild(t3);

    var ans = p1 + y;

  document.getElementById("bilangan").appendChild(para3);
  var tot = document.getElementById("total");
  tot.textContent = ans.toFixed(2);

  counter++;
}
