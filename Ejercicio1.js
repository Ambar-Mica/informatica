let contador = 10;
let boton = document.getElementById("btndisminuir");
let numero = document.getElementById("conteo");

boton.addEventListener("click", function(){
    if (contador > 0) {
        contador--;
        numero.rextContent = contador;
    } else {
        alert("El contador ya está en ceero. No se puede disminuir más.");
    }
});