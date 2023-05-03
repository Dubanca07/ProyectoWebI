function consumirAPI() {

    var url = "https://restcountries.com/v3.1/independent?status=true";
    var tablaActividad = document.getElementById("tablaActividad");

    fetch(url)
    .then(response => response.json())
    .then(json => {
        
        for (item of json) {

            var fila = tablaActividad.insertRow();

            var Nombredelpais = fila.insertCell(0);
            var Nombreoficial = fila.insertCell(1);
            var Capital = fila.insertCell(2);
            var Moneda = fila.insertCell(3);
            var Idiomas = fila.insertCell(4);
            var Bandera = fila.insertCell(5);
            var Escudosdearmas = fila.insertCell(6);
            var Poblacion = fila.insertCell(7);

            
      

            Nombredelpais.innerHTML = item.name.common;
            Nombreoficial.innerHTML = item.name.official;
            Capital.innerHTML = item.capital;
            Moneda.innerHTML = Object.entries(item.currencies).map(([key, value]) => `${key}: ${value}`).join('<br>');

            Idiomas.innerHTML = item.languages.gh;
            Bandera.innerHTML = "<img src='" + item.flags.png + "'>";
            Escudosdearmas.innerHTML = item.description;
            Poblacion.innerHTML = item.description;

            
            // console.log(item.id);
            // console.log(item.name.common);
            // console.log(item.description);

            /* var urlImagen = item.thumbnail.path+ "." + item.thumbnail.extension;

            var imagen = crearImagen(urlImagen)

            adicionarHijo(imagenColumna, imagen)

            console.log(urlImagen); */
        }


        // console.log(json.copyright);
        // console.log(json.status);
        // console.log(json.data.total);

    });

}