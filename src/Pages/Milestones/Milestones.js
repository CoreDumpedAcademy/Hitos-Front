import React, { Component } from "react";
import MilestoneList from "../../Components/MilestoneList";
import axios from "axios";
import Paths from "../../Paths/Paths";

class Milestones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    axios.get(Paths.Api.getMilestones).then(res => {
      console.log()
      this.setState({
        data: res.data.milestones
      });
    });
  }

  render() {
    return (
      <div className="Milestones">
        <MilestoneList data={this.state.data} />
      </div>
    );
  }
}

export default Milestones;
