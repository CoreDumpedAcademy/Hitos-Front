import React, { Component } from 'react';
import MilestoneList from '../../components/MilestoneList';
import axios from 'axios';

class Milestones extends Component {
	constructor(props){
		super(props);
		this.state={
			data: [],
		};
	}

	handleResponse(){
		axios.get('http://localhost:3000/milestone/')
		.then(res => {
			console.log(res.data.milestones);
			this.setState({
        		data: res.data.milestones,
      		});
		})
	}

	render() {
		this.handleResponse();
		return (
			<div className="Milestones">
				<MilestoneList data={this.state.data}/>
			</div>
		);
	}
}

export default Milestones;