function crearElemento(nombreTag) {

    return document.createElement(nombreTag);

}



function crearElementoConTexto(nombreTag, texto) {

    var elemento = crearElemento(nombreTag);
    var textoElemento = document.createTextNode(texto);
    elemento.appendChild(textoElemento);
    return elemento;

}

function crearImagen (urlImagen) {

    var img = crearElemento("img");
    img.src = urlImagen;
    return img;

}

function adicionarHijo (padre, hijo) {

    padre.appendChild(hijo);

}

function adicionarBody(hijo) {

    adicionarHijo(document.body, hijo);

}