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
      <FormControl 
        componentClass="textarea" 
        placeholder={props.placeholder} 
        value={props.value}
        onChange={props.handler}
      />
    </FormGroup>
  );
};

const SelectField = props => {
  return (
    <FormGroup controlId={props.id}>
      <ControlLabel>{props.title}</ControlLabel>
      <FormControl componentClass="select" onChange={props.onChange}>
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
      title: "",
      description: "",
      week: 1,
      category: "",
      difficulty: ""
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

  handleSubmit = async event => {
    event.preventDefault();

    const milestone = {
      title: this.state.title,
      description: this.state.description,
      week: this.state.week,
      category: this.state.category,
      difficulty: this.state.difficulty,
      author: "5c17d315f6abb6169c65f32a"
    };

    await axios.post(Paths.Api.getMilestones, { 
      title: milestone.title,
      description: milestone.description,
      week: milestone.week,
      category: milestone.category,
      difficulty: milestone.difficulty,
      author: milestone.author })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error.response);
        //this.toggleModal();
      });

    console.log(this.state);
  };

  render() {
    return (
      <div className="NewMilestone">
        <h1>New Milestone</h1>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            id="title"
            label="Title:"
            value={this.state.title}
            handler={this.handleChange}
            placeholder="Put a title for the milestone"
          />
          <NumberInput
            id="week"
            label="Week:"
            value={this.state.week}
            handler={this.handleChange}
            min="1"
            placeholder="Put the week number"
          />
          <SelectField
            title="Category:"
            id="category"
            placeholder="Select a category"
            options={this.state.enumerator.cathegory}
            onChange={this.handleChange}
            value={this.state.category}
          />
          <SelectField
            title="Difficulty:"
            id="difficulty"
            placeholder="Select a difficulty"
            options={this.state.enumerator.difficulty}
            onChange={this.handleChange}
            value={this.state.difficutly}
          />
          <TextArea
            id="description"
            label="Description:"
            placeholder="Describe the milestone"
            value={this.state.description}
            handler={this.handleChange}
          />

          <Button block bsSize="large" type="submit">
            Publish
          </Button>
        </form>
      </div>
    );
  }
}

export default NewMilestone;
