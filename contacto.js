// const contactoForm = document.getElementById('contactoForm');
// const input = document.querySelector('#contactoForm input');
const textoMensaje = document.getElementById("mensaje");

export default function validarNombre(nombre){
    const regex = new RegExp("[a-zA-Z0-9_\s]");
    return regex.test(nombre);
}

export function validarApellido(apellido){
    const regex = new RegExp("[a-zA-Z0-9_\s]");
    return regex.test(apellido);
}

export  function validarEmail(email){
    const regex = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
    return regex.test(email);
}

export function validarTelefono(telefono){
    const regex = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
    return regex.test(telefono);
}


export function validarMensaje() {
    if (textoMensaje.value.trim() === "") {
        alert("Por favor escribe un mensaje.");
        return false;
    }
    return true;
}

