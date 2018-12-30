import React, { Component } from "react";
import { Link } from "react-router-dom";
import Paths from "../Paths/Paths";

const LinkNav2 = props => {
  const itemStyle = (window.location.href.includes(props.path) ? "active " : "") + "nav_item";
  if(props.path.includes(Paths.Links.Login))
    return <li className={itemStyle}><Link to={props.path} onClick={() => localStorage.setItem("status", "")}>{props.text}</Link></li>

  else
    return <li className={itemStyle}><Link to={props.path}>{props.text}</Link></li>
};

  

class Navbar2 extends Component {

  doStuff(){
    console.log("came here");
  }
  

  render() {
    return (
      <div className="Navbar2">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand">Hitos API</div>
            </div>
            <ul className="nav navbar-nav">
              <LinkNav2 path={Paths.Links.Profile} text="Profile" />
              <LinkNav2 path={Paths.Links.Milestones} text="Milestone" />
              <LinkNav2 path={Paths.Links.Search} text="Search" />
              <LinkNav2 path={Paths.Links.CreatingMillestone} text="Create Milestone" />
              <LinkNav2 path={Paths.Links.Login} text="Sign Out" change="ok"/>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar2;