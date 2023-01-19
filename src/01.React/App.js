import "./App.css";
import { Testimonio } from "./components/Testimonio";

function App() {
  return (
    <>
      <div className="contenedor-principal">
        <h1>Esto es un titulo principal</h1>

        <Testimonio
          nombre="Liam "
          pais="Peru"
          imagen="build"
          cargo="Programador"
          empresa="GYA"
          testimonio="Vendedor"
        />

        <Testimonio
          nombre="Liam "
          pais="Peru"
          imagen="glass"
          cargo="Programador"
          empresa="GYA"
          testimonio="Vendedor"
        />

        <Testimonio
          nombre="Liam "
          pais="Peru"
          imagen="windows"
          cargo="Programador"
          empresa="GYA"
          testimonio="Vendedor"
        />
      </div>
    </>
  );
}

export default App;
