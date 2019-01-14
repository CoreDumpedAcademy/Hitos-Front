import React, { Component } from "react";
import { Route } from "react-router-dom";

/**
 * Import all page components here
 */

import Login from "./Pages/Login/Login";
import Milestones from "./Pages/Milestones/Milestones";
import Profile from "./Pages/Profile/Profile";
import Search from "./Pages/Search/Search";
import SignUp from "./Pages/SignUp/SignUp";
import CreatingMilestone from "./Pages/CreatingMilestone/CreatingMilestone";

import Paths from "./Dictionaries/Paths";
import Names from "./Dictionaries/TitlesAndNames";

import Navbar from "./Components/Navbar";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */

class App extends Component {
  constructor(props) {
    super(props);

    var navData ={
        Login: {
          path: Paths.Links.Login,
          text: Names.LinkNames.Login
        },
        SignUp: {
          path: Paths.Links.SignUp,
          text: Names.LinkNames.SignUp
        },
        Profile: {
          path: Paths.Links.Profile,
          text: Names.LinkNames.Profile
        },
        Milestones: {
          path: Paths.Links.Milestones,
          text: Names.LinkNames.Milestones
        },
        Search: {
          path: Paths.Links.Search,
          text: Names.LinkNames.Search
        },
        CreatingMilestone: {
          path: Paths.Links.CreatingMilestone,
          text: Names.LinkNames.CreatingMilestone
        },
        SignOut: {
          path: Paths.Links.Login,
          text: Names.LinkNames.SignOut,
          change: 1
        }
      }

    this.state = {
      data: [
        navData.Login,
        navData.SignUp
      ],

      data2: [
        navData.Profile,
        navData.Milestones,
        navData.Search,
        navData.CreatingMilestone,
        navData.SignOut
      ]
    };
  }

  componentDidMount() {
    document.title = Names.AppTitle;

    if (localStorage.getItem("w") !== "true") {
      this.setState({
        data2: this.state.data2.filter(function(el) {
          return el.path !== Paths.Links.CreatingMilestone;
        })
      });
    }
  }

  renderNav() {
    if (localStorage.getItem("status") === "log")
      return <Navbar data={this.state.data2} />;
    else return <Navbar data={this.state.data} />;
  }

  render() {
      return (
        <div>
          <main>
            {this.renderNav()}
            <Route path={Paths.Links.Milestones} component={Milestones} />
            <Route path={Paths.Links.Profile} component={Profile} />
            <Route path={Paths.Links.Search} component={Search} />
            <Route
              path={Paths.Links.CreatingMilestone}
              component={CreatingMilestone}
            />
            <Route exact path={Paths.Links.Login} component={Login} />
            <Route path={Paths.Links.SignUp} component={SignUp} />
          </main>
        </div>
      );
  }
}

export default App;
