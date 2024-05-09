import { useState } from "react";

export default function Counter() {
  let [contador, setContador] = useState(1);

  let multiplicador = () => setContador(contador * 2);
  let incrementador = () => setContador(contador + 1);

  return (
    <div>
      <h4>El valor del contador es: {contador}</h4>
      <button onClick={multiplicador}>Multiplicar</button>
      <button onClick={incrementador}>Incrementar</button>
    </div>
  );
}
