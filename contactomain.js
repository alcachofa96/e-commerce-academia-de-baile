import validarNombre from "./contacto.js";
import { validarApellido, validarEmail, validarTelefono, validarMensaje } from "./contacto.js";

const form = document.getElementById("contactoForm");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");

boton.addEventListener("click", function(event){
    event.preventDefault();
    alertResultado.innerHTML = "Revisa tu nombre: " + validarNombre(nombre.value) + "</br>";
    alertResultado.innerHTML += "Revisa tu apellido: " + validarApellido(apellido.value) + "</br>";
    alertResultado.innerHTML += "Revisa tu Email: " + validarEmail(email.value) + "</br>";
    alertResultado.innerHTML += "Revisa tu Telefono: " + validarTelefono(telefono.value) + "</br>";
    alertResultado.innerHTML += "Mensaje no valido: " + validarMensaje(mensaje.value) + "</br>";
});


// EMAIL JS------

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío por defecto

if (validarFormularioCompleto()) {
// Enviar con EmailJS
    emailjs.sendForm("service_c04p4z4", "template_hjtdd87", form)
    .then(
        function (response) {
        console.log(
            "Correo enviado con éxito",
            response.status,
            response.text
          );
          alert("✅ Formulario enviado correctamente.");
          form.reset();
          limpiarErrores();
        },
        function (error) {
          console.error("Error al enviar el correo", error);
          alert(
            "❌ Ocurrió un error al enviar el formulario. Intenta más tarde."
          );
        }
      );

} else {
    console.log("El formulario no es válido. Por favor, corrige los errores.");
  }
});


