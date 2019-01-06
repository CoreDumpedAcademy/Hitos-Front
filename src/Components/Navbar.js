import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paths from "../Paths/Paths";

const LinkNav = props => {
  const splittedUrl = window.location.href.split("/")
  const currentUrl = `/${splittedUrl[splittedUrl.length-1]}`
  
  const itemStyle = ( props.path === currentUrl ? "active " : "") + "nav_item";

  return <li className={itemStyle}><Link to={props.path}>{props.text}</Link></li>
};

class Navbar extends Component {

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-default" style={{ margin : "0" }}>
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand">Milestone-mgt</div>
            </div>
            <ul className="nav navbar-nav">
              <LinkNav path={Paths.Links.Login} text="Login" />
              <LinkNav path={Paths.Links.SignUp} text="Sign Up" />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
