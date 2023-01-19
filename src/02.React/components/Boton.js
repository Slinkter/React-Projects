import React from "react";
import "../css/Botos.css";

class Boton extends React.Component {
    render() {
        const { esBotonDeClic, manejarClick, texto } = this.props;
        const style = esBotonDeClic ? "boton-clic" : "boton-reiniciar";

        return (
            <button className={style} onClick={manejarClick}>
                {texto}
            </button>
        );
    }
}

export { Boton };
