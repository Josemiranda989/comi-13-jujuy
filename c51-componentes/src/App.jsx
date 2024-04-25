import "./App.css";
import Bienvenido from "./Components/Bienvenido";
import SaboresDeHelado from "./Components/SaboresDeHelado";

export default function App() {
  return (
    <div>
      <h2>Hola mundo</h2>
      <Bienvenido nombre={"Lucas"} apellido={"Miguel"} edad={30} />
      <Bienvenido nombre={"Gabriel"} apellido={"Miguel"} edad={30} />
      <hr />
      <SaboresDeHelado>
        <p>Llama al +541893218931023</p>
        <a href="google.com.ar">Hace tu pedido</a>
      </SaboresDeHelado>

      <SaboresDeHelado>
        <a href="google.com.ar">Hace tu pedido</a>
      </SaboresDeHelado>
    </div>
  );
}
