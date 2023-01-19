import React from "react";

import "../estilos/Boton.css";

function Boton(props) {
    // VALOR : 1,2,3,4,5,6,7,8,9
    // VALOR : =,+,-*
    // RETURN TRUE (+,-,*,.....)OR FALSE (1,2,3,4,5,6,7,8,9,0)
    const isOperador = (valor) => {
        return isNaN(valor) && valor !== "." && valor !== "=";
    };
    // si el children es un operador , es true y se ejecutar operador
    const style = `boton-contenedor ${isOperador(props.children) ? "operador" : "" }`.trim();

    return (
        <div
            className={style}
            onClick={() => props.manejarClic(props.children)}
        >
            {props.children}
        </div>
    );
}

export default Boton;
