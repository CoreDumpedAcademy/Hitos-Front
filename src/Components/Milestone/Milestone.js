import React from 'react';
import {
	Row,
	Col
  } from "react-bootstrap";
import {Button} from "react-bootstrap";
import "./Milestone.css";
import Paths from "../../Dictionaries/Paths";
import axios from "axios";

class Milestone extends React.Component{
	formatDate(propsDate){
		const date = new Date(propsDate);
		return (date.toLocaleDateString());
	}

	chooseLabel(status){
		return "labelStatus labelColor";
	}

	handleSubmit = async event => {
		event.preventDefault();

		axios.put(
        Paths.Api.getUsers+"", 
        "mytoken", 
        {headers: {"Content-Type": "text/plain"}}
    )
    .then(r => console.log(r.status))
    .catch(e => console.log(e));
	}
	// if(this.props.status)

	render(){
        var status;
        if(this.props.status){
        	status = `${this.props.status}`;
		}
		
		return(
			<div className='Milestone panel panel-default bodyColor' >
				<div className={this.chooseLabel(status)}>{status}</div>
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
