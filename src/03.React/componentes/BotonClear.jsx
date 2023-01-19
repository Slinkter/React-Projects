import React from "react";
import "../estilos/BotonClear.css";

function BotonClear(props) {
  return (
    <div onClick={props.manejarClear} className="boton-clear">
      {props.children}
    </div>
  );
}

export default BotonClear;
