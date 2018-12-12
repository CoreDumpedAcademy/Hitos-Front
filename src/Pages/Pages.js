import React, { Component } from "react";
import { Route } from "react-router-dom";

/**
 * Import all page components here
 */
import Landing from "./Landing/Landing";
import Login from "./Login/Login";
import Milestones from "./Milestones/Milestones";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";
import SignUp from "./SignUp/SignUp";
import App from "../App";

import Paths from "../Paths/Paths";

//import LinkTest from "../components/LinkTest";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
class Pages extends Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand">Hitos API</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active nav_item"><a href="landing">Home</a></li>
              <li class="nav_item"><a href="login">Login</a></li>
              <li class="nav_item"><a href="signup">Sign Up</a></li>
              <li class="nav_item"><a href="milestones">Milestones</a></li>
              <li class="nav_item"><a href="profile">Profile</a></li>
              <li class="nav_item"><a href="search">Search</a></li>
            </ul>
          </div>
        </nav>
      
        <main>
          <Route path={Paths.Links.Landing} component={Landing} />
          <Route path={Paths.Links.Login} component={Login} />
          <Route path={Paths.Links.Milestones} component={Milestones} />
          <Route path={Paths.Links.Profile} component={Profile} />
          <Route path={Paths.Links.Search} component={Search} />
          <Route path={Paths.Links.SignUp} component={SignUp} />
          <Route exact path={Paths.Links.App} component={App} />
        </main>
      </div>
    );
  }
}

export default Pages;
