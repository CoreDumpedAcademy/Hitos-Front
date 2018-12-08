import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./App.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      name: "",
      surname: "",
      telegramId: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.userName.length > 0 && this.state.password.length > 0
      && this.state.name.length > 0 && this.state.surname.length > 0 && this.state.telegramId.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="userName" bsSize="large">
            <ControlLabel>User Name</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.userName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="surname" bsSize="large">
            <ControlLabel>Surname</ControlLabel>
            <FormControl
              type="text"
              value={this.state.surname}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="telegramId" bsSize="large">
            <ControlLabel>Telegram ID</ControlLabel>
            <FormControl
              type="text"
              value={this.state.telegramId}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}