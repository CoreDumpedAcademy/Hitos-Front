import React, { Component } from "react";
import { Alert } from "react-bootstrap";

class NewAlert extends Component{
    render() {
    	if (this.props.hide) return null;
        return(
            <div className="NewAlert">
                <Alert bsStyle="warning">
				  <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
				  good.
				</Alert>
            </div>
        );
    }
}

export default NewAlert;