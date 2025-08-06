//1. Seleccionamos el botón
const boton = document.getElementById("miBoton");

//2. Le agregamos un event listener
boton.addEventListener("click", function(){
    //3. Esta función se ejecuta cuando el botón es clicado
    document.getElementById("mensaje").textContent = "¡Has hecho un clic!"
});