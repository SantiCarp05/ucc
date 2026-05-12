function guardarDNI(){

    let dni = document.getElementById("dni").value;
    let email = document.getElementById("email").value;

    localStorage.setItem("dni", dni);
    localStorage.setItem("email", email);

    alert("Inscripción realizada correctamente. El usuario y la contraseña serán el DNI ingresado.");

    window.location.href = "iniciosesion.html";
}
function iniciarSesion(){

    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    let dni_guardado = localStorage.getItem("dni");
    let email_guardado = localStorage.getItem("email");

    if(usuario == dni_guardado && contraseña == dni_guardado){

        alert("Inicio de sesión correcto.\nBienvenido.\nSe enviará información al correo: " + email_guardado);
        window.location.href = "pagina_ucc.html"; 

    } else {

        alert("Usuario o contraseña incorrectos");
    }
}