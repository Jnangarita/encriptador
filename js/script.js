const txtArea = document.getElementById("txt");
const showTxt = document.getElementById("showTxt");

function btnEncriptar(){
    const txtEncriptado = encriptar(txtArea.value);// encripta el mensaje
    showTxt.value = txtEncriptado;// envia el mensaje encriptado al textArea correspondiente
    txtArea.value = "";// limpia el textArea
    showTxt.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const txtDesencriptado = desencriptar(txtArea.value);
    showTxt.value = txtDesencriptado;
    txtArea.value = "";
    showTxt.style.backgroundImage = "none";
}

function btnCopy(){
    copy(showTxt.value);
}

function encriptar(cadena){
    let key = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    cadena = cadena.toLowerCase();
    for(let i = 0; i < key.length; i++){
        if(cadena.includes(key[i][0])){
            cadena = cadena.replaceAll(key[i][0], key[i][1]);
        }
    }
    return cadena;
}

function desencriptar(cadena){
    let key = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    cadena = cadena.toLowerCase();
    for(let i = 0; i < key.length; i++){
        if(cadena.includes(key[i][1])){
            cadena = cadena.replaceAll(key[i][1], key[i][0]);
        }
    }
    return cadena;
}

function copy(text){
    const tempInput = document.createElement("input");//crea el elemento de entrada que se utilizara para copiar el texto
    tempInput.value = text;// asigna el valor del argumento text al atributo value del elemento de entrada
    document.body.appendChild(tempInput);//agrega el elemento de entrada al cuerpo del documento para poder seleccionar su contenido
    tempInput.select();// selecciona el contenido del elemento de entrada
    document.execCommand("copy");// copia el texto seleccionado al portapapeles del sistema operativo
    document.body.removeChild(tempInput);//elimina el elemento de entrada del cuerpo del documento. Evita que queden elementos innecesarios despues de copiar el texto
}