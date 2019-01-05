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
import CreatingMillestone from "./CreatingMilestone/CreatingMillestone";

import Paths from "../Paths/Paths";

import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */

class App extends Component {
  render() {
    if (localStorage.getItem("status") === "log")
      return (
        <div>
          <main>
            <Navbar2 />
            <Route path={Paths.Links.Milestones} component={Milestones} />
            <Route path={Paths.Links.Profile} component={Profile} />
            <Route path={Paths.Links.Search} component={Search} />
            <Route
              exact
              path={Paths.Links.CreatingMillestone}
              component={CreatingMillestone}
            />
            <Route path={Paths.Links.Login} component={Login} />
          </main>
        </div>
      );
    else
      return (
        <div>
          <main>
            <Navbar />
            <Route path={Paths.Links.Landing} component={Landing} />
            <Route exact path={Paths.Links.Login} component={Login} />
            <Route path={Paths.Links.SignUp} component={SignUp} />
          </main>
        </div>
      );
  }
}

export default App;
