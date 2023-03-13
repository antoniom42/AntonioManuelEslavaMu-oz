function validar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var mail = document.getElementById("mail").value;
    var pin = document.getElementById("pin").value;
    var rpin = document.getElementById("rpin").value;
    var cond = document.getElementById('cond');
    var validmail =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var dig=/^[0-9]+$/;

    if (nombre=="") {
        document.getElementById("vnombre").innerHTML= "Este campo es obligatorio";
    } else {
        document.getElementById("vnombre").innerHTML= "";
    }

    if (apellido=="") {
        document.getElementById("vapellido").innerHTML= "Este campo es obligatorio";
    } else {
        document.getElementById("vapellido").innerHTML= "";
    }

    if (mail=="") {
        document.getElementById("vmail").innerHTML= "Este campo es obligatorio";
    } else  if (validmail.test(mail)){
        document.getElementById("vmail").innerHTML= ""; 
        } else {
            document.getElementById("vmail").innerHTML= "El formato no es válido";
        }
    
    if (pin=="") {
        document.getElementById("vpin").innerHTML= "Este campo es obligatorio";
    } else {
        if (pin.length<8){
            document.getElementById("vpin").innerHTML= "Las contraseñas deben tener mínimo 8 dígitos";
        } else { if (dig.test(pin)) {
                    document.getElementById("vpin").innerHTML= "";
        } else {  document.getElementById("vpin").innerHTML= "Este campo solo admite dígitos";
            }
        }
    }

    if (rpin=="") {
        document.getElementById("vrpin").innerHTML= "Este campo es obligatorio";
    } else {
        if (pin==rpin){
            document.getElementById("vrpin").innerHTML= "";
        } else {
            document.getElementById("vrpin").innerHTML= "Deben coincidir las contraseñas";
        }
    }

    if(cond.checked) {
        document.getElementById("vcond").innerHTML= "";
      } else {
        document.getElementById("vcond").innerHTML= "Debes aceptar las condiciones del formulario"; }
}
