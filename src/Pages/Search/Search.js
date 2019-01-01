import React, { Component } from "react";
import MilestoneList from "../../Components/MilestoneList";
import SearchByCathegory from "../../Components/SearchByCathegory.js";
import SearchByWeek from "../../Components/SearchByWeek";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = data => {
    this.setState({
      data: data
    });
  };

  render() {
    return (
      <div className="Search">
        <SearchByWeek onSubmit={this.handleSubmit}/>
        <SearchByCathegory onSubmit={this.handleSubmit} />
        <div>
          <MilestoneList data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Search;
