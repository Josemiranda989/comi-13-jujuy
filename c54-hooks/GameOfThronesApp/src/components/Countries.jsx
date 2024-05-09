import { useEffect, useRef } from "react";

export default function Countries() {
  let titulo = useRef(null);
  let nombre = useRef(null);

  useEffect(() => {
    titulo.current.style.color = "red";
    titulo.current.style.backgroundColor = "white";
    titulo.current.style.color = "red";
    console.log(nombre.current.value);
  }, []);

  return (
    <div>
      <h1 ref={titulo}>Paises del mundo</h1>
      <ul>
        <li>Argentina</li>
        <li>Argentina</li>
        <li>Argentina</li>
        <li>Argentina</li>
        <li>Argentina</li>
        <li>Argentina</li>
      </ul>
      <input ref={nombre} type="text" value={"Milanesa"} />
    </div>
  );
}
