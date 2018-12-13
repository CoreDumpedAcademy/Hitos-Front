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

import Navbar from "../Components/Navbar";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
class Pages extends Component {
  render() {
    return (
      <div>
        <main>
          <Navbar/>
          
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
