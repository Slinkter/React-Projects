import React from "react";

function Pelicula(props) {
    const { titulo, calificacion, director, fecha } = props;
    return (
        <div>
            <div className="movie-item-style-2">
                <img src={props.imagen} alt="" />
                <div className="mv-item-infor">
                    <h6>
                        <a href="moviesingle.html">{titulo}</a>
                    </h6>
                    <p className="rate">
                        <i className="ion-android-star" />
                        <span>{calificacion}</span> /10
                    </p>
                    <p className="describe">{props.children}</p>
                    <p className="run-time">                       
                        Run Time: {props.duracion}’ . <span>MMPA: PG-13 </span> .
                        <span>Release: {fecha}</span>
                    </p>
                    <p>
                        Director: <a href="#">{director}</a>
                    </p>
                    <p>
                        Stars: {props.actores}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Pelicula;
