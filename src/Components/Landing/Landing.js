import React, { Component } from "react";
import HACK from "../../img/HACK.svg";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <img src={HACK} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Landing;
