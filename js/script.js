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