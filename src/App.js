import React, { Component } from "react";
import BIRRA from "./BIRRA.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={BIRRA} className="App-logo" alt="logo" />
          <br />
        </header>
        <footer />
      </div>
    );
  }
}

export default App;
