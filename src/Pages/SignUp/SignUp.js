import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./SignUp.css";
import axios from "axios";
import Paths from "../../Paths/Paths";

import NewAlert from "../../Components/NewAlert";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      firstName: "",
      lastName: "",
      idTelegram: "",
      password: "",
      isOpen: false,
      alertMessage: "Error"
    };
  }

  validateForm() {
    return (
      this.state.userName.length > 0 &&
      this.state.password.length > 0 &&
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.idTelegram.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const user = {
      userName: this.state.userName,
      password: this.state.password,
      idTelegram: this.state.idTelegram,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };

    await axios
      .post(`${Paths.Api.getUsers}`, {
        userName: user.userName,
        password: user.password,
        idTelegram: user.idTelegram,
        firstName: user.firstName,
        lastName: user.lastName
      })
      .then(res => {
        console.log(res);
        this.closeAlert();
      })
      .catch(error => {
        console.log(error.response);
        this.setState({
          alertMessage: error.response.data.message
        });
        this.toggleAlert();
      });
  };

  toggleAlert = () => {
    this.setState({
      isOpen: true
    });
  }

  closeAlert = () => {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <div className="SignUp">
        <NewAlert isOpen={this.state.isOpen} text={this.state.alertMessage}/>
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
          <FormGroup controlId="firstName" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="lastName" bsSize="large">
            <ControlLabel>Surname</ControlLabel>
            <FormControl
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="idTelegram" bsSize="large">
            <ControlLabel>Telegram ID</ControlLabel>
            <FormControl
              type="text"
              value={this.state.idTelegram}
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
