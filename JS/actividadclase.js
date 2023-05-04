let datosPaises;

function poblarDatosPaises() {

    var url = "https://restcountries.com/v3.1/independent?status=true";

    fetch(url)
        .then(response => response.json())
        .then(data => {

            datosPaises = data;
            var selectPaises = document.createElement('select');
            data.forEach(pais => {

                var nombreComun = pais.name.common;
                var nombreOficial = pais.name.official;
                var option = crearOption(nombreComun, nombreOficial);
                selectPaises.appendChild(option);

            });

            selectPaises.addEventListener('change', mostrarDatosPais);
            document.body.appendChild(selectPaises);

        })

        .catch(error => console.error(error));

}

window.onload = poblarDatosPaises;


function mostrarDatosPais() {
    
    var selectPaises = document.querySelector('select');
    var paisSeleccionado = datosPaises.find(pais => pais.name.official === selectPaises.value);

    var tabla = document.createElement('table');
    var lista = document.createElement('ul');

    var nombreComun = crearElementoConTexto('td', paisSeleccionado.name.common);
    var nombreComunEtiqueta = crearElementoConTexto('td', 'Nombre común: ');

    var nombreOficial = crearElementoConTexto('td', paisSeleccionado.name.official);
    var nombreOficialEtiqueta = crearElementoConTexto('td', 'Nombre oficial: ');

    var capitales = crearElementoConTexto('td', paisSeleccionado.capital.join(', '));
    var capitalesEtiqueta = crearElementoConTexto('td', 'Capital: ');

    var monedas = crearElementoConTexto('td', Object.values(paisSeleccionado.currencies).map(c => c.name).join(', '));
    var monedasEtiqueta = crearElementoConTexto('td', 'Moneda(s): ');

    var idiomas = crearElementoConTexto('td', Object.values(paisSeleccionado.languages).join(', '));
    var idiomasEtiqueta = crearElementoConTexto('td', 'Idioma(s): ');

    var poblacion = crearElementoConTexto('td', paisSeleccionado.population.toLocaleString());
    var poblacionEtiqueta = crearElementoConTexto('td', 'Población: ');

    tabla.appendChild(crearElementoConTexto('tr', '').appendChild(nombreComunEtiqueta).parentNode.appendChild(nombreComun).parentNode);
    tabla.appendChild(crearElementoConTexto('tr', '').appendChild(nombreOficialEtiqueta).parentNode.appendChild(nombreOficial).parentNode);
    tabla.appendChild(crearElementoConTexto('tr', '').appendChild(capitalesEtiqueta).parentNode.appendChild(capitales).parentNode);
    tabla.appendChild(crearElementoConTexto('tr', '').appendChild(monedasEtiqueta).parentNode.appendChild(monedas).parentNode);
    tabla.appendChild(crearElementoConTexto('tr', '').appendChild(idiomasEtiqueta).parentNode.appendChild(idiomas).parentNode);
    tabla.appendChild(crearElementoConTexto('tr', '').appendChild(poblacionEtiqueta).parentNode.appendChild(poblacion).parentNode);

    document.body.appendChild(tabla);

    if (paisSeleccionado.flags && paisSeleccionado.flags.svg) {
        var imagen = new Image();
        imagen.src = paisSeleccionado.flags.svg;
        document.body.appendChild(crearElementoConTexto('p', 'Bandera: '));
        document.body.appendChild(imagen);
    }

    if (paisSeleccionado.coatOfArms && paisSeleccionado.coatOfArms.svg) {
        var imagen = new Image();
        imagen.src = paisSeleccionado.coatOfArms.svg;
        document.body.appendChild(crearElementoConTexto('p', 'Escudo de arma: '))
        document.body.appendChild(imagen);
    }


}

