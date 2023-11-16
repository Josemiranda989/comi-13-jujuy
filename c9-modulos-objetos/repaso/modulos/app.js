const operaciones = require('./funciones/funciones.js');

const pelis = require('./datos/datos.js');

const mayor = operaciones.getMayor(12,4);
//console.log(mayor);

//const array = [2,3,4,5];
const sumaArray = operaciones.sumatoria([2,3,20,5]);
//console.log(sumaArray);

//console.log(pelis);
for (let index = 0; index < pelis.length; index++) {
    // console.log(pelis[index].nombre); 
    // console.log(pelis[index].edad); 
    console.log(pelis[index]); 
}

const obj = {
    nombre:'jjj',
    edad: 23
}

pelis.push(obj);

for (let index = 0; index < pelis.length; index++) {
    // console.log(pelis[index].nombre); 
    // console.log(pelis[index].edad); 
    console.log(pelis[index]); 
}