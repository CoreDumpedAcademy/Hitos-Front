import React, { Component } from "react";
import { Button } from "react-bootstrap";

class searchBar extends Component {
  handleSubmit =  event => {
    event.preventDefault();

    console.log("Hey boyyy");
  }
 
  render() {
    return (
      <div class="Look">
      <form class="navbar-form" role="search" onSubmit={this.handleSubmit}>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search"/>
        </div>
        <Button type="submit" class="btn btn-default">Submit</Button>
      </form>
      </div>
    );
  }
}

export default searchBar;