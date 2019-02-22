import React from 'react';
import {
	Row,
	Col
  } from "react-bootstrap";
import "./Milestone.css";

class Milestone extends React.Component{
	formatDate(propsDate){
		const date = new Date(propsDate);
		return (date.toLocaleDateString());
	}

	chooseLabel(status){
		return "labelStatus labelColor";
	}

	render(){
		var status;
		
        if(this.props.status)
				status = `${this.props.status}`;
		return(
			<div className='Milestone panel panel-default bodyColor' >
				<div className={this.chooseLabel(status)}>{status}</div>
				<div className='panel-heading headingColor'>
					<h3>{this.props.title}</h3>
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
					<span className="textColor">Description:</span>
				</div>
				<div className="description">
					<p>{this.props.description}</p>
				</div>
				<p className="textColor">Written on {this.formatDate(this.props.creation)} by {this.props.author}</p>
			</div>
		)
	}
}

export default Milestone;
