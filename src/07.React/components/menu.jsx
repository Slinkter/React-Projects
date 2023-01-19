import React, { useContext } from "react";
import ItemsContext from "./items-context";

export default function Menu() {
    const itemsContext = useContext(ItemsContext);

    function handleChange(e) {
        itemsContext.onSearch(e);
    }
    function handleClick() {
        itemsContext.onNew();
    }

    return (
        <div className="menu">
            <input
                className="search"
                placeholder="search..."
                onChange={handleChange}
            />
            <button className="btn" onClick={handleClick}>
                + Crear nota
            </button>
        </div>
    );
}
