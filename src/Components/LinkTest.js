import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paths from "../Dictionaries/Paths";

const LinkLabel = (props) => {
    return (
        <Link to={props.path}>
          <a>{props.text}</a>
        </Link>
    );
}

class LinkTest extends Component {
  render() {
    return (
      <div className="LinkTest">
        <LinkLabel path={Paths.Links.Landing} text="Landing" />
        <LinkLabel path={Paths.Links.Login} text="Login" />
        <LinkLabel path={Paths.Links.Milestones} text="Milestones" />
        <LinkLabel path={Paths.Links.Profile} text="Profile" />
        <LinkLabel path={Paths.Links.Search} text="Search" />
        <LinkLabel path={Paths.Links.SignUp} text="SignUp" />
        <LinkLabel path={Paths.Links.App} text="App" />
      </div>
    );
  }
}

export default LinkTest;
