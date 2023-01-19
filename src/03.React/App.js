//Hooks
import { useState } from "react";
// extenal library
import { evaluate } from "mathjs";
// Componets
import Pantalla from "./componentes/Pantalla";
import Boton from "./componentes/Boton";
import BotonClear from "./componentes/BotonClear";

// img

//style
import "./App.css";

function App() {
  const [input, setInput] = useState("");
// 
  const agrearInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Ingrese valores')
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        
      </div>

      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agrearInput}>1</Boton>
          <Boton manejarClic={agrearInput}>2</Boton>
          <Boton manejarClic={agrearInput}>3</Boton>
          <Boton manejarClic={agrearInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agrearInput}>4</Boton>
          <Boton manejarClic={agrearInput}>5</Boton>
          <Boton manejarClic={agrearInput}>6</Boton>
          <Boton manejarClic={agrearInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agrearInput}>7</Boton>
          <Boton manejarClic={agrearInput}>8</Boton>
          <Boton manejarClic={agrearInput}>9</Boton>
          <Boton manejarClic={agrearInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agrearInput}>0</Boton>
          <Boton manejarClic={agrearInput}>.</Boton>
          <Boton manejarClic={agrearInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
