const contactoForm = document.getElementById('contactoForm');
const input = document.querySelector('#contactoForm input');

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
    const regex = new RegExp("[^\+[1-9]\d{1,14}$]");
    return regex.test(telefono);
}

export function validarMensaje(mensaje){
    if (isNaN(mensaje)) {
        return false;
    }
    const num = Number(mensaje);
    return num > 10 && num <= 100;
}

