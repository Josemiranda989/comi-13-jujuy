/**
 * definir un objeto literal
 */

const persona = {
  //clave: valor
  //propiedad: valodeprop
  nombre: "Juan pedro",
  edad: 35,
  hobbies: ["Futbol", "Caminar", "Series"],
  direccion: {
    calle: "algo",
    nro: 123,
  },
  trabaja: true,
  estudia: true,

  getNombre: function () {
    return this.nombre;
  },

  mostrarDatos: function () {
    console.log(
      "Mi dirección es: ",
      this.direccion.calle,
      " Nro: ",
      this.direccion.nro,
      "Mi nombre es: ",
      this.nombre
    );
    //console.log('Mi nombre es: ',this.nombre);
  },
};

//console.log(persona.nombre);
//console.log(persona.hobbies[1]);
//console.log(persona.direccion.calle);
//console.log(persona.getNombre());
//persona.mostrarDatos();

//cosntructores de clase
const dot = {
  coordX: 20,
  coordY: 5,
  getX: function () {
    return this.coordX;
  },
  getY: function () {
    return this.coordY;
  },
};

function Dot(cx, cy) {
  this.coordX = cx;
  this.coordy = cy;
}

const dot1 = new Dot(12, 2);
const dot2 = new Dot(12, 7);
const dot3 = new Dot(25, 2);

console.log("Dot1: ", dot1);
console.log("Dot2: ", dot2);
console.log("Dot3: ", dot3);
