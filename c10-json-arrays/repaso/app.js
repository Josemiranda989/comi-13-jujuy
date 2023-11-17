const fs = require('fs')
// Leer archivo json con modulo Fs
let autosJSON = fs.readFileSync('./autos.json', 'utf-8')
// Convertimos de JSON a JS
let autosJS = JSON.parse(autosJSON)
// Convertimos de JS a JSON
// let autosJSON2 = JSON.stringify(autosJS[0])
// console.log(autosJSON2);

/* Metodos 2.0 Arrays */
/* autosJS.forEach(function (auto, index) { //foreach
    console.log(`${index + 1} - ${auto.brand} y el precio es $${auto.price}`);
    // console.log(i+1 + " - " + auto.brand);
}); */

/* let precios = autosJS.map(function(auto){ // Map
    return { 
        price: auto.price * 1.1,
        brand: auto.brand,
    }
}) 
console.log(precios);
*/

/* let masCostosos = autosJS.filter(function(auto){
    return auto.price > 50
})
console.log(masCostosos); */

// let masViejo = autosJS.find(function(auto){
//     return auto.year < 1993
// })
// console.log(masViejo);

/* let valorInicial = 10
let capital = autosJS.reduce(function (acumulador, auto) {
    console.log(acumulador);
    console.log(auto.price);
    console.log('😎😎😎😎');

    return acumulador + auto.price

}, valorInicial)
console.log(capital); */

let frase = "ABCD"

let nuevaFrase = autosJS.reduce(function(acum, auto){
    return acum + auto.model + "***"
}, "")

console.log(nuevaFrase);




