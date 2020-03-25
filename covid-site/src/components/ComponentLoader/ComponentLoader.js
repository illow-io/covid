import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import "./ComponentLoader.css";

export default class ComponentLoader extends Component {
  render() {
    return (
      <div className="loader">
        <Image src={"./loader.gif"} width="100" height="100" />
      </div>
    );
  }
}
