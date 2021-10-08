
function validar()
{
    var userNameInput = document.formRegistro.usu;
    var passwordInput = document.formRegistro.tContr;
    var correoInput = document.formRegistro.tCorreo;
    var swError = false;

    console.log(userNameInput.value+" - "+passwordInput.value+" - "+correoInput.value);
    var formatEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if(userNameInput.value.length < 8){
        //alert("El nombre de usuario debe tener minimo 8 caracteres.");
        document.getElementById("errorUsername").innerHTML="El nombre de usuario debe tener minimo 8 caracteres.";
        userNameInput.focus();
        //document.getElementById("botonEnviar").disabled=true;
        swError = true;
    }else{
        document.getElementById("errorUsername").innerHTML="";

    }
    if(!correoInput.value.match(formatEmail)){
        //alert("Escriba un correo valido.");
        document.getElementById("errorCorreo").innerHTML="Escriba un correo valido.";
        correoInput.focus();
        swError = true;
    }else{
        document.getElementById("errorCorreo").innerHTML="";

    }
    if(passwordInput.value.length < 8){
        //alert("La contraseña debe tener minimo 8 caracteres.");
        document.getElementById("errorPassword").innerHTML="La contraseña debe tener minimo 8 caracteres.";
        passwordInput.focus();
        swError = true;
    }else{
        document.getElementById("errorPassword").innerHTML="";

    }/*
    if(!term){
        document.getElementById("errorTerminos").innerHTML="Acepte los terminos";
        swError = true; 
    }else{
        document.getElementById("errorTerminos").innerHTML="";

    }*/

    if(swError){
        return false;
    }else{
        return true;
    }
    


}

function verClave()
{
    console.log('mostrar clave');

    var passwordInput = document.formRegistro.tContr;
    passwordInput.type="text";
}

function ocultarClave()
{
    console.log('ocultar');

    var passwordInput = document.formRegistro.tContr;
    passwordInput.type="password";
}

