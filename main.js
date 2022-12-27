let textArea = document.querySelector('#textArea-ed');
let btnEncriptar = document.querySelector('#btn-encrypt');
let btnDesencriptar = document.querySelector('#btn-decrypt');
let btnCopiar = document.querySelector('#btn-copy');
let mostrarMensaje = document.querySelector('#message-ed');
let illustrationFlat = document.querySelector('.illustration-flat');
let mensajeTitulo = document.querySelector('.no-message-t');
let mensajeDescripcion = document.querySelector('.no-message-d');

btnEncriptar.addEventListener('click', encriptarMensaje);
btnDesencriptar.addEventListener('click', desencriptarMensaje);
btnCopiar.addEventListener('click', copiarMensaje);

        
let isLowerCase = /^[a-z\s]+$/g;
let esNumero;

function esMayuscula(letra) {
    return letra === letra.toUpperCase();
}

function encriptarMensaje() {
    let valorDelTextarea = textArea.value;
    let palabra = textArea.value;
    esNumero = Number(textArea.value);
    let mensajeEncriptado = "";
    let posicionActual;

    for(let i = 0; i < valorDelTextarea.length; i++) {
        posicionActual = valorDelTextarea.charAt(i);

        if(posicionActual === "a") {
            posicionActual = "ai";
        } else if(posicionActual === "e") {
            posicionActual = "enter";
        } else if(posicionActual === "i") {
            posicionActual = "imes";
        } else if(posicionActual === "o") {
            posicionActual = "ober";
        } else if(posicionActual === "u") {
            posicionActual = "ufat";
        } else if(textArea.value.trim() === "") {
            alert("Solo hay espacios");
            textArea.value = "";
            return;
        }

        mensajeEncriptado += posicionActual;
    }

    if(palabra.match(isLowerCase)) {
        btnCopiar.classList.add('active');
        mostrarMensaje.classList.add('active');
        illustrationFlat.classList.add('inactive');
        mensajeTitulo.classList.add('inactive');
        mensajeDescripcion.classList.add('inactive');
        mostrarMensaje.value = mensajeEncriptado.trim();
    } 
    else if(esNumero) {
        alert("No debe contener números");
        textArea.value = "";
        return;
    }
    else if(palabra.length === 0) {
        alert("El campo está vacío")
        textArea.value = "";
    }
    else if(!palabra.match(isLowerCase) && palabra.length > 0) {
        alert("Utiliza solamente letras en minúsculas");
        textArea.value = "";
    }
}

function desencriptarMensaje() {
    let mensajeTextArea = textArea.value;
    let palabra = textArea.value;
    let mensaje = mensajeTextArea;
    // let posicionActual;

    // for(let i = 0; i < mensajeTextArea.length; i++) {
    //     posicionActual = mensajeTextArea.charAt(i);
    // }

    let remplazo = mensaje.replaceAll('ai', 'a');
    mensaje = remplazo;

    remplazo = mensaje.replaceAll('enter', 'e');
    mensaje = remplazo;

    remplazo = mensaje.replaceAll('imes', 'i');
    mensaje = remplazo;

    remplazo = mensaje.replaceAll('ober', 'o');
    mensaje = remplazo;

    remplazo = mensaje.replaceAll('ufat', 'u');
    mensaje = remplazo;

    if(palabra.match(isLowerCase)) {
        btnCopiar.classList.add('active');
        mostrarMensaje.classList.add('active');
        mensajeTitulo.classList.add('inactive');
        illustrationFlat.classList.add('inactive');
        mensajeDescripcion.classList.add('inactive');
        mostrarMensaje.value = mensaje.trim();
        textArea.value = "";
    }
    else if(esNumero) {
        alert("No debe contener números");
        textArea.value = "";
        return;
    }
    else if(palabra.length === 0) {
        alert("El campo está vacío");
    }
    else if(!palabra.match(isLowerCase) && palabra.length > 0) {
        alert("Utiliza solamente letras en minúsculas");
        textArea.value = "";
    }
}

function copiarMensaje() {
    let copiarTexto = mostrarMensaje;
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 1000);

    navigator.clipboard.writeText(copiarTexto.value).then(() =>{
        alert("Copiado exitosamente");
    })
    .catch(() => {
        alert("Algo salió mal");
    });
}
