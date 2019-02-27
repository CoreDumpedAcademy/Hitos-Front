import React, { Component } from "react";
import { Link } from "react-router-dom";

import Names from "../Dictionaries/TitlesAndNames";

import Storage from "../Middlewares/storeData";

const LinkNav = props => {
  const splittedUrl = window.location.href.split("/")
  const currentUrl = `/${splittedUrl[splittedUrl.length-1]}`
  
  const itemStyle = ( props.path === currentUrl ? "active " : "") + "nav_item";

  if(props.change)
    return <li className={itemStyle}><Link to={props.path} onClick={() => Storage.setData(Names.storageKeys.Status, "")}>{props.text}</Link></li>

  else
    return <li className={itemStyle}><Link to={props.path}>{props.text}</Link></li>
};

class Navbar extends Component {
  renderNav(datas) {
    if (datas.length > 0) {
      return (
          <ul className="nav navbar-nav">
            {datas.map((data, i) => (
              <LinkNav
                key={i}
                path={data.path}
                text={data.text}
                change={data.change}
              />
            ))}
          </ul>
      );
        }
  }

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-default" style={{ margin : "0" }}>
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand">{Names.AppTitle}</div>
            </div>
              {this.renderNav(this.props.data)}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
