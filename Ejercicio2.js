const btnRojo =
document.getElementByld("btnRojo");
const btnVerde =
document.getElementByld("btnVerde");
const btnAzul =
document.getElementByld("btnAzul");

btnRojo.addEventListener("click", function(){

   document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
});

btnVerde.addEventListener("click", function(){

   document.body.style.backgroundColor = "green";
    document.body.style.color = "black";
});

btnAzul.addEventListener("click", function(){

    document.body.style.backgroundColor = "blue";
    document.body.style.color = "yellow";
});