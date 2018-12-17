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
        cathegory: [],
        difficulty: []
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
    console.log("render");
    return (
      <div className="NewMilestone">
        New Milestone
        <div>
          <div>title:</div>
          <div><input type="text" placeholder="Describe the milestone"/></div>
        </div>
        <div>
          <div>week:</div>
          <div />
        </div>
        <div>
          <div>cathegory:</div>
          <div>
            <Dropdown
              options={this.state.enumerator.cathegory}
              onChange={this._onSelect}
              value={this.state.enumerator.cathegory[0]}
              placeholder="Select a cathegory"
            />
          </div>
        </div>
        <div>
          <div>level:</div>
          <div>
            <Dropdown
              options={this.state.enumerator.difficulty}
              onChange={this._onSelect}
              value={this.state.enumerator.difficulty[0]}
              placeholder="Select a cathegory"
            />
          </div>
        </div>
        <div>
          <div>description:</div>
          <div><input type="text" placeholder="Describe the milestone"/></div>
        </div>
      </div>
    );
  }
}

export default NewMilestone;
