import React, { Component } from "react";
import MilestoneList from "../../Components/MilestoneList";
import axios from "axios";
import Paths from "../../Paths/Paths";
import SearchBar from "../../Components/searchBar"

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
	};
	
	axios.get(`${Paths.Api.getByWeek}/10`).then(res => {
		this.setState({
		  data: res.data.milestones
		});
	});
  }

  handleSubmit =  event => {
    event.preventDefault();

    console.log("Hey boyyy");
  }


  render() {
    return (
      <div className="Search">
        <SearchBar/>
        <div>
        <MilestoneList data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Search;