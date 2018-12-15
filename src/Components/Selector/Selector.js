import React, { Component } from "react";
import "./Selector.css";

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayList: "none",
      collection: props.collection,
      first: props.first
    };
  }

  render() {
    return (
      <div className="selector">
        <input type="text" value={this.state.first} disabled />
        <div className="list">
            <div>mahe!</div>
          {this.state.collection.map(entry => (
            <div>{entry}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Selector;
