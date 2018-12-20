import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paths from "../Paths/Paths";

const LinkNav = props => {
  return <Link to={props.path}>{props.text}</Link>;
};

class Navbar extends Component {
  render() {
    return (
      <div class="Navbar">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <div class="navbar-brand">Hitos API</div>
            </div>
            <ul class="nav navbar-nav">
              <li class="active nav_item">
                <LinkNav path={Paths.Links.Landing} text="Landing" />
              </li>
              <li class="nav_item">
                <LinkNav path={Paths.Links.Login} text="Login" />
              </li>
              <li class="nav_item">
                <LinkNav path={Paths.Links.SignUp} text="Sign Up" />
              </li>
              <li class="nav_item">
                <LinkNav path={Paths.Links.Milestones} text="Milestone" />
              </li>
              <li class="nav_item">
                <LinkNav path={Paths.Links.Search} text="Search" />
              </li>
              <li class="nav_item">
                <LinkNav path={Paths.Links.Profile} text="Profile" />
              </li>
              <li class="nav_item">
                <LinkNav path={Paths.Links.CreatingMillestone} text="Create Milestone" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
