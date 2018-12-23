import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";
import Paths from "../../Paths/Paths";
import "react-dropdown/style.css";
import "./NewMilestone.css";

const TextInput = props => {
  return (
    <FormGroup controlId={props.id} bsSize="large">
      <ControlLabel>{props.label}</ControlLabel>
      <FormControl
        type="text"
        value={props.value}
        onChange={props.handler}
        placeholder={props.placeholder}
      />
    </FormGroup>
  );
};

const NumberInput = props => {
  return (
    <FormGroup controlId={props.id} bsSize="large">
      <ControlLabel>{props.label}</ControlLabel>
      <FormControl
        type="number"
        value={props.value}
        onChange={props.handler}
        min={props.min}
        placeholder={props.placeholder}
      />
    </FormGroup>
  );
};

const TextArea = props => {
  return (
    <FormGroup controlId={props.id}>
      <ControlLabel>{props.label}</ControlLabel>
      <FormControl componentClass="textarea" placeholder={props.placeholder} />
    </FormGroup>
  );
};

const SelectField = props => {
  return (
    <FormGroup controlId={props.id}>
      <ControlLabel>{props.title}</ControlLabel>
      <FormControl componentClass="select">
        <option value={props.value} disabled selected>-- {props.placeholder} --</option>
        {props.options.map(el =>
          <option value={el}>{el}</option>
        )}
      </FormControl>
    </FormGroup>
  );
};

class NewMilestone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enumerator: {
        cathegory: [],
        difficulty: []
      },
      title: ""
    };

    axios.get(Paths.Api.getApiEnumerator).then(res => {
      this.setState({
        enumerator: res.data
      });
      console.log(this.state.enumerator);
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <div className="NewMilestone">
        <h1>New Milestone</h1>
        <form>
          <TextInput
            id="title"
            label="Title:"
            value={this.state.title}
            handler={this.handleChange}
            placeholder="Put a title for the milestone"
          />
          <NumberInput
            id="cathegory"
            label="Week:"
            value={this.state.cathegory}
            handler={this.handleChange}
            min="1"
            placeholder="Put the week number"
          />
          <SelectField
            title="Cathegory:"
            id="cathegory"
            placeholder="Select a cathegory"
            options={this.state.enumerator.cathegory}
            onChange={this._onSelect}
            value={this.state.enumerator.cathegory[0]}
          />
          <SelectField
            title="Level:"
            id="level"
            placeholder="Select a difficulty"
            options={this.state.enumerator.difficulty}
            onChange={this._onSelect}
            value={this.state.enumerator.difficulty[0]}
          />
          <TextArea
            id="description"
            label="Description:"
            placeholder="Describe the milestone"
          />

          <Button block bsSize="large" disabled type="submit">
            Publish
          </Button>
        </form>
      </div>
    );
  }
}

export default NewMilestone;
