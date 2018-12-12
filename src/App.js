import React, { Component } from "react";
import { Link } from "react-router-dom";
import BIRRA from "./BIRRA.svg";
import "./App.css";
import Paths from "./Paths/Paths";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand">WebSiteName</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a href="landing">Home</a></li>
              <li><a href="login">Login</a></li>
              <li><a href="signup">Sign Up</a></li>
              <li><a href="milestones">Milestones</a></li>
              <li><a href="profile">Profile</a></li>
              <li><a href="search">Search</a></li>
            </ul>
          </div>
        </nav>

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
