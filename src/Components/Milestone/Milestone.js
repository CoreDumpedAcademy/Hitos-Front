import React from 'react';

import "./Milestone.css";

class Milestone extends React.Component{
	formatDate(propsDate){
		const date = new Date(propsDate);
		return (date.toLocaleDateString());
	}

	render(){

        var status;
        if(this.props.status)
				status = ` || STATUS: ${this.props.status}`;
		return(
			<div className='Milestone panel panel-default bodyColor' >
				<div className='panel-heading headingColor'>
					<h3>{this.props.title} {status}</h3>
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
