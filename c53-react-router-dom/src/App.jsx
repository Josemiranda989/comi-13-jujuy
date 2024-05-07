import "./App.css";
import Bienvenido from "./Components/Bienvenido";
import Counter from "./Components/Counter";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SaboresDeHelado from "./Components/SaboresDeHelado";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/saludos"
          element={
            <Bienvenido nombre={"Lucas"} apellido={"Miguel"} edad={30} />
          }
        />

        <Route
          path="/sabores"
          element={
            <SaboresDeHelado>
              <p>Llama al +541893218931023</p>
              <a href="google.com.ar">Hace tu pedido</a>
            </SaboresDeHelado>
          }
        />

        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}
