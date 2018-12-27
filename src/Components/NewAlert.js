import React, { Component } from "react";
import { Alert } from "react-bootstrap";

class NewAlert extends Component{
    render() {
    	if (this.props.isOpen==false) return null;
        return(
            <div className="NewAlert">
                <Alert bsStyle="danger">
				  {this.props.text}
				</Alert>
            </div>
        );
    }
}

export default NewAlert;