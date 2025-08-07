import validarNombre from "./contacto.js";
import { validarApellido,validarEmail, validarTelefono, validarMensaje } from "./contacto.js";

const exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
const exampleFormControlInput2 = document.getElementById("exampleFormControlInput2");
const exampleFormControlInput3 = document.getElementById("exampleFormControlInput3");
const exampleFormControlInput4 = document.getElementById("exampleFormControlInput4");
const exampleFormControlTextarea5 = document.getElementById("exampleFormControlTextarea5");

const boton = document.getElementById("boton");


boton.addEventListener("click", function(event){
    event.preventDefault();
  
    alertResultado.innerHTML = ""; 
    alertResultado.innerHTML += "Revisa tu nombre: " + validarNombre(exampleFormControlInput1.value) + "</br>";
    alertResultado.innerHTML += "Revisa tu nombre: " + validarApellido(exampleFormControlInput2.value) + "</br>";
    alertResultado.innerHTML += "Revisa tu Email: " + validarEmail(exampleFormControlInput3.value) + "</br>";
    alertResultado.innerHTML += "Revisa tu Telefono: " + validarTelefono(exampleFormControlInput4.value) + "</br>";
    alertResultado.innerHTML += "Mensaje no valido: " + validarMensaje(exampleFormControlTextarea5.value) + "</br>";
});


