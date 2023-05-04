function crearElementoConTexto(elemento, texto) {
    const elementoCreado = document.createElement(elemento);
    const textoElemento = document.createTextNode(texto);
    elementoCreado.appendChild(textoElemento);
    return elementoCreado;
}

function crearOption(texto, valor) {
    const option = document.createElement('option');
    option.value = valor;
    option.appendChild(crearElementoConTexto('span', texto));
    return option;
}
