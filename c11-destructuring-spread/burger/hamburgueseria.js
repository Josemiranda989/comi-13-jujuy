const fs = require("fs");
const path = require("path");

// console.log(__dirname + '/datos.json');
// console.log(path.join(__dirname, 'datos.json'));

if(fs.existsSync(path.join(__dirname, "menu.json"))){
    const menuJSON = fs.readFileSync(path.join(__dirname, "menu.json"), "utf-8");
    const menuJS = JSON.parse(menuJSON);
    // console.table(menuJS);

    let { nombre } = menuJS[0];
    console.log("La hamburguesa elegida es", nombre);

    menuJS.push({
      nombre: "vegetariana",
      id: 3,
      precio: 2000,
      descuento: 10,
    });
    // console.table(menuJS);

    const nuevoMenu = JSON.stringify(menuJS, null, " ");
    fs.writeFileSync(path.join(__dirname, "menu.json"), nuevoMenu);
    console.log('Se agrego una hamburguesa');
} else {
    console.log('El archivo que intentas leer y escribir no existe');
}

