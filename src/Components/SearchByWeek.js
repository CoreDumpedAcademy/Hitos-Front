import React, { Component } from "react";
import axios from "axios";
import Paths from "../Dictionaries/Paths";
import { Button, FormGroup, FormControl } from "react-bootstrap";

class SearchByWeek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedWeek: ""
    };
  }

  handleChange = event => {
    this.setState({
      SelectedWeek: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.get(`${Paths.Api.getByWeek}/${this.state.SelectedWeek}`).then(res => {
      this.props.onSubmit(res.data.milestones);
	});

	event.stopPropagation();
  };

  render() {
    return (
      <div className="SearchByWeek">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="searchMe" bsSize="large">
            <FormControl
              value={this.state.SelectedWeek}
              placeholder="Search by week"
              onChange={this.handleChange}
			  type="number"
			  min="0"
            />
            <Button onClick={this.handleSubmit} bsSize="large">
              Search
            </Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default SearchByWeek;
