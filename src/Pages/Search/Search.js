import React, { Component } from "react";
import MilestoneList from "../../Components/MilestoneList";
import axios from "axios";
import Paths from "../../Paths/Paths";
import SearchByCathegory from "../../Components/SearchByCathegory.js"
import { Button, FormGroup, FormControl } from "react-bootstrap";
//import SearchBar from "../../Components/searchBar"

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchMe: ''
   };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmitWeek = async event => {
    event.preventDefault();

    await axios.get(`${Paths.Api.getByWeek}/${this.state.searchMe}`).then(res => {
      if(res.data)
        this.setState({
          data: res.data.milestones
        });
    });
  }

  handleSubmitCathegory = (data) => {
    this.setState({
      data: data,
    });
  }

  render() {
    return (
      <div className="Search">
        <form className="navbar-form" role="search" onSubmit={this.handleSubmitWeek}>
          <FormGroup controlId="searchMe" bsSize="large">
            <FormControl
              value={this.state.searchMe}
              placeholder="Search by week"
              onChange={this.handleChange}
              type="text"
            />
            <Button
            bsSize="large"
            type="submit"
          >
            Search
          </Button>
          </FormGroup>
          
        </form>
        <SearchByCathegory onSubmit={ this.handleSubmitCathegory }/>
        <div>
          <MilestoneList data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Search;