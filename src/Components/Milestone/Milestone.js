import React from 'react';
import {Button} from "react-bootstrap";

import "./Milestone.css";

class Milestone extends React.Component{
	formatDate(propsDate){
		const date = new Date(propsDate);
		return (date.toLocaleDateString());
	}

	handleSubmit = event => {
		event.preventDefault();
	}


	render(){
        var status;
        var mybutton;
        if(this.props.status){
        	status = ` || STATUS: ${this.props.status}`;
        	mybutton = <Button class="inline" onClick={ this.handleSubmit }
						bsSize="large"
					>X</Button>
        }
		return(
			<div className='Milestone panel panel-default bodyColor' >
				<div className='panel-heading headingColor'>
					<h3 class="inline">{this.props.title} {status}</h3>
					{mybutton}
				</div>
				<div className="textSpacing">
					<p className="textColor">Made by {this.props.author} at {this.formatDate(this.props.creation)}</p>
					<p className="textColor">Week: {this.props.week}		{this.props.category} -> {this.props.level}</p>
					<p className="textColor">{this.props.description}</p>
				</div>
			</div>
		)
	}
}

export default Milestone;
