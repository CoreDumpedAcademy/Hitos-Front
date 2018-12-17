import React, { Component } from "react";
import axios from "axios";
import Paths from "../../Paths/Paths";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class NewMilestone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enumerator: {
        cathegory: []
      }
    };

    axios.get(Paths.Api.getApiEnumerator).then(res => {
      this.setState({
        enumerator: res.data
      });
      console.log(this.state.enumerator);
    });
  }

  render() {
    return (
      <div className="NewMilestone">
        New Milestone title: week: category:
        <Dropdown
          options={this.state.enumerator.cathegory}
          onChange={this._onSelect}
          value={this.state.enumerator.cathegory[0]}
          placeholder="Select a cathegory"
        />
        level: description:
      </div>
    );
  }
}

export default NewMilestone;
