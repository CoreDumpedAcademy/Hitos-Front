import React, { Component } from "react";
import { Link } from "react-router-dom";
import BIRRA from "./BIRRA.svg";
import "./App.css";
import Paths from "./Paths/Paths";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={BIRRA} className="App-logo" alt="logo" />
          <br />
        </header>
        <main>
          <Link to={Paths.Links.Login}>
            <button>Login</button>
          </Link>
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
