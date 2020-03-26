import React, { Component } from "react";
import { Image } from "grommet";
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
