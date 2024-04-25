/* eslint-disable react/prop-types */
import TarjetaHelado from "./TarjetaHelado";
import "./SaboresDeHelado.css";

export default function SaboresDeHelado(props) {
  const sabores = [
    {
      id: 1,
      nombre: "Vainilla",
      stock: 5,
      precio: 15.0,
    },
    {
      id: 2,
      //   nombre: "Chocolate",
      stock: 10,
      precio: 20.0,
    },
    {
      id: 3,
      nombre: "Menta Granizada",
      stock: 10,
      precio: 50.0,
    },
    {
      id: 4,
      nombre: "Granizado",
      stock: 10,
      precio: 10.0,
    },
  ];

  //   console.log(sabores);
  return (
    <div>
      <h4>Sabores Disponibles</h4>

      <div className="container">
        {sabores.map((item) => {
          return (
            <TarjetaHelado
              key={item.id}
              nombre={item.nombre}
              stock={item.stock}
              precio={item.precio}
            />
          );
        })}
      </div>

      {props.children}
    </div>
  );
}
