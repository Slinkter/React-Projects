import React from "react";
// img 
import logogya from "./imagenes/header.png";
// components
import { Contador } from "./components/Contador";
import { Boton } from "./components/Boton";

// style
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = { numClics: 0 };
        //
        this.manejarClic = this.manejarClic.bind(this);
        this.reiniciarContador = this.reiniciarContador.bind(this);
    }
    // function 01
    manejarClic() {
        this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
    }
    // function 02
    reiniciarContador() {
        this.setState({ numClics: 0 });
    }

    render() {
        return (
            <div className="App">
                <div className="freecodecamp-logo-contenedor">
                    <img
                        className="freecodecamp-logo"
                        src={logogya}
                        alt="logo de freecode"
                    />
                </div>
                <div className="contenedor-principal">
                    <Contador numClics={this.state.numClics} />
                    <Boton
                        texto={"Click"}
                        esBotonDeClic={true}
                        manejarClick={this.manejarClic}
                    />

                    <Boton
                        texto={"Reiniciar"}
                        esBotonDeClic={false}
                        manejarClick={this.reiniciarContador}
                    />
                </div>
            </div>
        );
    }
}

export default App;
