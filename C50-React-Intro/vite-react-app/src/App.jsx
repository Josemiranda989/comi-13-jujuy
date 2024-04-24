import "./App.css";
import { Footer } from "./components/Footer";
import { List } from "./components/List";
import { Navbar } from "./components/Navbar";
function App() {
  const nombre = "Mandela";
  console.log(nombre);
  return (
    <>
      <Navbar />
      <h1>Hola {nombre}</h1>
      <List />
      <Footer />
    </>
  );
}

export default App;
