import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

import "./Login.css";

import LoginCmp from "../../Components/Login/Login";
import Landing from "../../Components/Landing/Landing";

export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <Landing />
            </Col>
            <Col xs={12} md={6}>
              <LoginCmp/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
