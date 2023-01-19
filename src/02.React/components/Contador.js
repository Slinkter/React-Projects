import React from "react";
import "../css/Contador.css";

class Contador extends React.Component {
    render() {
        const { numClics } = this.props;
        return <div className="contador">{numClics}</div>;
    }
}

export { Contador };
