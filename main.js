var print ="";
for (var i = 1; i <=1337; i++)
  print+=(i%2==1 ? i : "<br>");
document.getElementById("text").innerHTML = print;
