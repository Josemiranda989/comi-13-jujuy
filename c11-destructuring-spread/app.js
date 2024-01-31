// Destructing
// Obj
let persona = {
    nombre: "Maxi",
    edad: 19,
    dni: 11356742,
    ubicacion: {
        calle:'Alberdi',
        numero: 200
    }
}

/* function informacion(nombre, dni){
    // return `El cliente ${nombre} tiene el dni ${dni}`
    console.log('El cliente ' + nombre + ' tiene el dni ' + dni)
} */

// informacion(persona.nombre, persona.dni)
let {nombre, dni: id, ubicacion: {calle}} = persona
// informacion(nombre, dni)

// console.log(persona.ubicacion.calle);
// console.log(calle);
console.log(id);

// Arrays
let premios = [ 100, 50,79, 99, 10];
let premiosAlf = ["A", "B", "C"];
let premiosRom = ["I", "II", "III"];
let [ , , primer, , segundo ] = premios

console.log(premios[2]);
console.log(primer, segundo);

let totalPremios = [ 'milanesa',  ...premiosRom, ...premios, ...premiosAlf]
console.log(totalPremios);

totalPremios.forEach(premio => console.log(premio))

let vocales = ['a', 'e', 'i', 'o', 'u'];
let [A, E, ...restoDeVocales] = vocales
console.log(restoDeVocales);