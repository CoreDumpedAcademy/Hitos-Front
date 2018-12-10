import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";

const MilestonesLink = () => {
  return (
    <Link to="/Milestones">
      <button>
        <div>
          <div>Milestones</div>
        </div>
      </button>
    </Link>
  );
};

const LoginLink = () => {
  return (
    <Link to="/Login">
      <button>
        <div>Login</div>
      </button>
    </Link>
  );
};

const SignUpLink = () => {
  return (
    <Link to="/SignUp">
      <button>
        <div>SignUp</div>
      </button>
    </Link>
  );
};

const ContactLink = () => {
  return (
    <Link to="/Contact">
      <button>
        <div>Contact</div>
      </button>
    </Link>
  );
};

const InfoLink = () => {
  return (
    <Link to="/info">
      <button>
        <div>info</div>
      </button>
    </Link>
  );
};

class MainMenu extends Component {
  render() {
    return (
      <Router>
        <div>
          <MilestonesLink />
          <LoginLink />
          <SignUpLink />
          <ContactLink />
          <InfoLink />

          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default MainMenu;
