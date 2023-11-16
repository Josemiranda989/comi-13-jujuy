let peliculas = require("./peliculas");
let fs = require("fs");

//const arrayTipos = ["accion","drama","suspenso","comedia"]
//const rutaArchivo = fs.readFileSync(__dirname + "/mensaje.txt","utf-8")
//console.log(rutaArchivo);


let pelicula1 = new peliculas.PeliculasFavoritas(2,10,3,230,50,peliculas.peliculasFavoritas.genere[2])
let pelicula2 = new peliculas.PeliculasFavoritas(3,15,13,20,60,peliculas.peliculasFavoritas.genere[3])
let pelicula3 = new peliculas.PeliculasFavoritas(4,19,2,290,10,peliculas.peliculasFavoritas.genere[0])

let arrayDePeliculas = [pelicula1,pelicula2,pelicula3]

function recorrerPeliculas(arrayDePeliculas){

    for (i=0; i < arrayDePeliculas.length ; i++){
        console.log("mi pelicula nro "+ (i + 1) + " preferida es la del id: " + arrayDePeliculas[i].id)
    }

}

recorrerPeliculas(arrayDePeliculas);








