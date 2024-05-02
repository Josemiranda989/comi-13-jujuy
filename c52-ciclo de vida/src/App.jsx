import "./App.css";
import ApiFetch from "./components/ApiFetch";
import CounterCC from "./components/CounterCC";
import FormCC from "./components/FormCC";
import StatefullClassComponent from "./components/StatefullCC";
import StatelessClassComponent from "./components/StatelessCC";

function App() {
  return (
    <>
      <h1>Clase 52/53</h1>
      <hr />
      <StatelessClassComponent />
      <hr />
      <StatefullClassComponent nombre="Lucas" apellido="Figueroa" edad={15} />
      <StatefullClassComponent nombre="Miguel" apellido="Medina" edad={55} />
      <hr />
      <CounterCC />
      <hr />
      <FormCC />
      <hr />
      <ApiFetch />
    </>
  );
}

export default App;
