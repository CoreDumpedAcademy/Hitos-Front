import React from 'react';
import {
	Row,
	Col
  } from "react-bootstrap";
import {Button} from "react-bootstrap";
import "./Milestone.css";
import Paths from "../../Dictionaries/Paths";
import axios from "axios";

import Names from "../../Dictionaries/TitlesAndNames";

class Milestone extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			identifier: props.identifier,
			status: props.status
		};

		this.handleClick = this.handleClick.bind(this);
	}

	formatDate(propsDate){
		const date = new Date(propsDate);
		return (date.toLocaleDateString());
	}

	chooseLabel(status){
		return "labelStatus labelColor";
	}

	handleSubmit = async event => {
		event.preventDefault();
		var userId = localStorage.getItem(Names.storageKeys.MyId);
		var milestoneId = this.props._id;

		axios.put(
        Paths.Api.getUsers+userId+"/milestone"+milestoneId+"/update", 
        { 
      		status: "pending"
      	})
	    .then(r => console.log(r.status))
	    .catch(e => console.log(e));
	}

	handleClick(e) {
		e.preventDefault();
		var userId = localStorage.getItem(Names.storageKeys.MyId);
		var milestoneId = this.state.identifier;
		var newStatus = "done";

		axios.put(
        Paths.Api.getUsers+"/"+userId+"/milestones/"+milestoneId+"/update", 
        { 
      		status: newStatus
      	})
	    .then(r => {
	    	console.log(r.status);
	    	this.setState({
	          status: newStatus
	        });
	    })
	    .catch(e => console.log(e));
	 }
	// if(this.props.status)

	render(){
        /*var status;
        if(this.props.status){
        	status = `${this.props.status}`;
		}*/
		
		return(
			<div className='Milestone panel panel-default bodyColor' >
				<button onClick={this.handleClick} className={this.chooseLabel(this.state.status)}>{this.state.status}</button>
				<div className='panel-heading headingColor headingParams'>
					<h3 className="inline">{this.props.title}</h3>
				</div>
				<div className="textSpacing">
					<Row>
						<Col xs={4}>
							<p>Week: {this.props.week}</p>
						</Col>
						<Col xs={4}>
							<p>Cathegory: {this.props.category}</p>
						</Col>
						<Col xs={4}>
							<p>Level: {this.props.level}</p>
						</Col>	
					</Row>
					<div className="textAlignLeft">
						<span>Description:</span>
					</div>
				</div>
				<div className="description">
					<p>{this.props.description}</p>
				</div>
				<p className="textColor textAlignRight bottomSign">Written on {this.formatDate(this.props.creation)} by {this.props.author}</p>
			</div>
		)
	}
}

export default Milestone;
