import React from 'react';
import axios from 'axios';

class Milestone extends React.Component{
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
		return(
			<div className='Milestone' class='panel panel-default' style={bodyColor}>
				<div class='panel-heading' style={headingColor}>
					<h3>{this.props.title}</h3>
				</div>
				<p style={textColor}>Made by {this.props.author} at {this.props.creation}</p>
				<p style={textColor}>Week: {this.props.week}		{this.props.category} -> {this.props.level}</p>
				<p style={textColor}>{this.props.description}</p>
			</div>
		)
	}
}

class MilestoneList extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

	renderMS(datas) {
		return(
			<div>
			{datas.map(data => (
				<Milestone
					key={data._id}
					creation={data.creation}
					title={data.title}
					author={data.author}
					week={data.week}
					description={data.description}
					category={data.category}
					level={data.level}
				/>
			))}
			</div>
		);
	}

	handleResponse(){
		axios.get('http://localhost:3000/milestone/')
		.then(res => {
			this.setState({
        data: res.data.milestones
      });
		})
	}

	render(){
		this.handleResponse();
		return(
			<div className='MilestoneList'>
				{this.renderMS(this.state.data)}
			</div>
		)
	};
}

export default MilestoneList;
