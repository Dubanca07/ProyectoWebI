function consumirAPI() {

    console.log("jsajhaj");

    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";
    var url = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;
    var tablaMarvel = document.getElementById("tablaMarvel");

    fetch(url)
    .then(response => response.json())
    .then(json => {

        for (item of json.data.results) {

            var fila = tablaMarvel.insertRow();

            var identificadorColumna = fila.insertCell(0);
            var nombreColumna = fila.insertCell(1);
            var descripcionColumna = fila.insertCell(2);
            var imagenColumna = fila.insertCell(3);

            identificadorColumna.innerHTML = item.id;
            nombreColumna.innerHTML = item.name;
            descripcionColumna.innerHTML = item.description;
            // console.log(item.id);
            // console.log(item.name);
            // console.log(item.description);

            var urlImagen = item.thumbnail.path+ "." + item.thumbnail.extension;

            var imagen = crearImagen(urlImagen)

            adicionarHijo(imagenColumna, imagen)

            console.log(urlImagen);
        }


        // console.log(json.copyright);
        // console.log(json.status);
        // console.log(json.data.total);

    });

}