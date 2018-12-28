import React from 'react';

class Milestone extends React.Component{
	formatDate(propsDate){
		const date = new Date(propsDate);
		return (date.toLocaleDateString());
	}

	render(){
		var bodyColor = {
			backgroundColor: 'black',
        }

        var headingColor = {
        	backgroundColor: 'grey',
        }

        var textColor = {
        	color: 'white',
        }
        var status;
        if(this.props.status)
				status = ` || STATUS: ${this.props.status}`;
		return(
			<div className='Milestone panel panel-default' style={bodyColor}>
				<div className='panel-heading' style={headingColor}>
					<h3>{this.props.title} {status}</h3>
				</div>
				<p style={textColor}>Made by {this.props.author} at {this.formatDate(this.props.creation)}</p>
				<p style={textColor}>Week: {this.props.week}		{this.props.category} -> {this.props.level}</p>
				<p style={textColor}>{this.props.description}</p>
			</div>
		)
	}
}

export default Milestone;
