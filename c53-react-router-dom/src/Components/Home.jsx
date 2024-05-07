export default function Home() {
  return (
    <div>
      <h4>1- Instalación</h4>
      <code>npm i react-router-dom</code>
      <h4>2 - Implementar BrowserRouter</h4>
      <code>
        {`<BrowserRouter>
              <App />
            </BrowserRouter>`}
      </code>
      <h4>3 - Reemplazar los Anchor por Link</h4>
      <code>
        {`
           <a href="/saludos">Saludos</a> =>
           <Link to="/saludos">Saludos</Link>
          `}
      </code>
      <h4>4 - Armado de enrutamiento</h4>
      <code>
        {`
          <Routes>
          <Route path="/" element={<h2>Hola mundo</h2>} />

          <Route
            path="/saludos"
            element={
              <Bienvenido nombre={"Lucas"} apellido={"Miguel"} edad={30} />
            }
          />
          <Routes/>
          `}
      </code>
    </div>
  );
}
