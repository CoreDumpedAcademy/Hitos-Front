import React, { Component } from "react";
import BIRRA from "./BIRRA.svg";
import "./App.css";
import MainMenu from "./Router/MainMenu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={BIRRA} className="App-logo" alt="logo" />
          <br/>
          <MainMenu />
        </header>
      </div>
    );
  }
}

export default App;
