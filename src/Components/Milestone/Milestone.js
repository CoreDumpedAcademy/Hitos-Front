import React from 'react';
import {
	Row,
	Col
  } from "react-bootstrap";
//import {Button} from "react-bootstrap";
import "./Milestone.css";
import Paths from "../../Dictionaries/Paths";
import axios from "axios";

import Names from "../../Dictionaries/TitlesAndNames";

import Storage from "../../Middlewares/storeData";
import SelectFieldStatus from "../SelectFieldStatus/SelectFieldStatus.js";

class Milestone extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			enumerator: {
		       	status: []
		    },
			identifier: props.identifier,
			status: props.status
		};

		this.handleChange = this.handleChange.bind(this);

		axios.get(Paths.Api.getApiEnumerator).then(res => {
	      this.setState({
	        enumerator: res.data
	      });
	    });

	}

	formatDate(propsDate){
		const date = new Date(propsDate);
		return (date.toLocaleDateString());
	}

	chooseLabel(status){
		return "labelStatus labelColor";
	}


	handleChange = event => {
		event.preventDefault();
		var userId = Storage.getData(Names.storageKeys.MyId);
		var milestoneId = this.state.identifier;

		console.log(userId);
		console.log(milestoneId);
		console.log(event.target.value);


		axios.put(
        Paths.Api.getUsers+"/"+userId+"/milestones/"+milestoneId+"/update", 
        { 
      		status: event.target.value
      	})
	    .then(r => console.log(r.status))
	    .catch(e => console.log(e));


	    this.setState({
	      [event.target.id]: event.target.value
	    });
	};

	render(){
		
		return(
			<div class='Milestone panel panel-default bodyColor' >
				<SelectFieldStatus
		            title="Status:"
		            id="status"
		            className={this.chooseLabel(this.state.status)}
		            options={this.state.enumerator.status}
		            onChange={this.handleChange}
		            value={this.state.status}
		          />
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
