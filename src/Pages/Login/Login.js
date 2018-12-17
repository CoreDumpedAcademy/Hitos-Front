import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from "axios";
import "./Login.css";
import { Link } from 'react-router-dom';
import Paths from "../../Paths/Paths";
import Modal from '../../Components/Modal';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      isOpen: true 
    };
  }

  validateForm() {
    return this.state.userName.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const user = {
      userName: this.state.userName,
      password: this.state.password
    };

    await axios.post(Paths.Api.Login, { userName: user.userName, password: user.password })
      .then(res => {
        localStorage.setItem('myToken', res.data.token);
        localStorage.setItem('user', user.userName);
        console.log(res);
        console.log(res.status);
        console.log(localStorage.getItem('myToken'));
        if(res.status===200)window.location.href = Paths.Links.Profile;
        //else this.toggleModal();
      })
      .catch(error => {
        console.log(error.response);
        //this.toggleModal();
      });
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount(){
    const token=localStorage.getItem('myToken');
    axios.defaults.headers.common = {'authorization': "bearer " + token}

    axios.get('http://localhost:3000/api/private')
    .then(res => {
      console.log(res);
    })  
    .catch(error => {
        console.log(error);
        //this.toggleModal();
      });
  }

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
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
            Login
          </Button>
        
          <p>Or <Link to={Paths.Links.SignUp}>Sign up</Link></p>
        </form>
      </div>
    );
  }
}
