import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";
import img01 from "./imagen/one.jpg";
import img02 from "./imagen/dos.jpg";
import img03 from "./imagen/tres.jpg";
import img04 from "./imagen/cuatro.jpg";
import img05 from "./imagen/cinco.jpg";
import { useEffect } from "react";

function App() {
    const [linea1, setLinea1] = useState("");
    const [linea2, setLinea2] = useState("");
    const [imagen01, setImagen01] = useState(false);
    const [imagen02, setImagen02] = useState(false);
    const [imagen03, setImagen03] = useState(false);
    const [imagen04, setImagen04] = useState(false);
    const [imagen05, setImagen05] = useState(false);

    const handleLinea1 = (e) => setLinea1(e.target.value);
    const handleLinea2 = (e) => setLinea2(e.target.value);
    const handleImagen = (e) => {
        const name = Number(e.target.value);
        if (name === 1) {
            console.log("name : ", name);
            setImagen01(true);
            setImagen02(false);
            setImagen03(false);
            setImagen04(false);
            setImagen05(false);
        } else if (name === 2) {
            console.log("name2 : ", name);
            setImagen01(false);
            setImagen02(true);
            setImagen03(false);
            setImagen04(false);
            setImagen05(false);
        } else if (name === 3) {
            console.log("name3 : ", name);
            setImagen01(false);
            setImagen02(false);
            setImagen03(true);
            setImagen04(false);
            setImagen05(false);
        } else if (name === 4) {
            console.log("name4 : ", name);
            setImagen01(false);
            setImagen02(false);
            setImagen03(false);
            setImagen04(true);
            setImagen05(false);
        } else if (name === 5) {
            console.log("name5 : ", name);
            setImagen01(false);
            setImagen02(false);
            setImagen03(false);
            setImagen04(false);
            setImagen05(true);
        }
    };

    useEffect(() => {
        setImagen01(true);
    }, []);

    const handleExport = () => {
        html2canvas(document.querySelector("#meme")).then((canvas) => {
            var img = canvas.toDataURL("image/png");
            var link = document.createElement("a");
            link.download = "meme.png";
            link.href = img;
            link.click();
        });
    };
    return (
        <div className="App">
            <select onChange={handleImagen}>
                <option value="1"> meme 1 </option>
                <option value="2"> meme 2 </option>
                <option value="3"> meme 3 </option>
                <option value="4"> meme 4 </option>
                <option value="5"> meme 5 </option>
            </select>
            <br />
            <input type="text" onChange={handleLinea1} /> <br />
            <input type="text" onChange={handleLinea2} /> <br />
            <button onClick={handleExport}>Exportar</button>
            <div className="meme" id="meme">
                <span>{linea1}</span> <br />
                <span>{linea2}</span>
                {imagen01 && <img src={img01} alt="" />}
                {imagen02 && <img src={img02} alt="" />}
                {imagen03 && <img src={img03} alt="" />}
                {imagen04 && <img src={img04} alt="" />}
                {imagen05 && <img src={img05} alt="" />}
            </div>
        </div>
    );
}

export default App;
