import React, { Component } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

import LoginCmp from "../../Components/Login/Login";
import Landing from "../../Components/Landing/Landing";

import Names from "../../Dictionaries/TitlesAndNames";

import Storage from "../../Middlewares/storeData";

export default class Login extends Component {
  componentDidMount() {
    Storage.setData(Names.storageKeys.Status, "");
  }

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
