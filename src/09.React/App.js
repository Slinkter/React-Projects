import logo from "./logo.svg";
import "./App.css";
import Pelicula from "./components/Pelicula";
import PageWrapper from "./components/PageWrapper";
import peliculasjson from "./components/lista_peliculas";

function App() {
    let peliculas = peliculasjson;

    return (
        <div className="App">
            <PageWrapper>
                {peliculas.map((item) => (
                    <Pelicula
                        titulo={item.titulo}
                        calificacion={item.calificacion}
                        director={item.director}
                        actores={item.actores}
                        fecha={item.fecha}
                        duracion={item.duracion}
                        imagen={item.img}
                    >
                        {item.descripcion}
                    </Pelicula>
                ))}
            </PageWrapper>
        </div>
    );
}

export default App;
