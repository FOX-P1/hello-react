import React, { Component } from "react";

class Button extends Component {
    render() {
        console.log("button rendered");
        const { value, color, width } = this.props;

        return <div style={{ background: color, width: width }}>{value}</div>;
    }
}

export default Button;
