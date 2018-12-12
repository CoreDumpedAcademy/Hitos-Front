import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paths from "../Paths/Paths";


const LinkLabel = (props) => {
    return (
        <Link to={props.path}>
          {props.text}
        </Link>
    );
}

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" >Hitos API</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active nav_item">
                <LinkLabel path={Paths.Links.Landing} text="Landing" />
              </li>
              <li class="nav_item">
                <LinkLabel path={Paths.Links.Login} text="Login" />
              </li>
              <li class="nav_item">
                <LinkLabel path={Paths.Links.SignUp} text="Sign Up" />
              </li>
              <li class="nav_item">
                <LinkLabel path={Paths.Links.Milestones} text="Milestone" />
              </li>
              <li class="nav_item">
                <LinkLabel path={Paths.Links.Search} text="Search" />
              </li>
              <li class="nav_item">
                <LinkLabel path={Paths.Links.Profile} text="Profile" />
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;