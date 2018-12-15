import React, { Component } from "react";
import axios from "axios";
import Paths from "../../Paths/Paths";
import Selector from "../Selector/Selector"

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
      console.log(this.state.enumerator)
    });
  }

  render() {
    return (
      <div className="NewMilestone">
        New Milestone title: week: category:
        <Selector
          collection={this.state.enumerator.cathegory}
          first="Choose a cathegory"
        />
        level: description:
      </div>
    );
  }
}

export default NewMilestone;
