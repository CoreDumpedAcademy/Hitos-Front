import React, { Component } from "react";
import HACK from "../../img/HACK.svg";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <header className="App-header">
          <img src={HACK} className="App-logo" alt="logo" />
          <br />
        </header>
        <footer />
      </div>
    );
  }
}

export default Landing;