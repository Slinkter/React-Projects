import React from "react";
import "../estilos/Pantalla.css";

function Pantalla(props) {
    const { input } = props;
    return <div className="input">{input}</div>;
}

export default Pantalla;
