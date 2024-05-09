import { useEffect, useState } from "react";
import Card from "./Card";

export default function GOT() {
  let [personajes, setPersonajes] = useState([]);
  let [numerito, setNumerito] = useState(0);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((res) => res.json())
      .then((data) => setPersonajes(data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    console.log("Se ejecutó el codigo");
  }, [numerito]);

  let incrementar = () => setNumerito(numerito + 1);

  return (
    <div className="container">
      {personajes.map((p) => {
        return (
          <Card
            key={p.id}
            nombre={p.fullName}
            familia={p.family}
            imagen={p.imageUrl}
          />
        );
      })}
      <button onClick={incrementar}>Actualizar Numerito {numerito}</button>
    </div>
  );
}
