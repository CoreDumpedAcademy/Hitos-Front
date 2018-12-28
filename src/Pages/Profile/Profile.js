import React, { Component } from "react";
import axios from 'axios';
import UserData from '../../Components/userData';
import MilestoneList from '../../Components/MilestoneList';
import Paths from "../../Paths/Paths";

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			user: {},
			milestones: [],
			isLoaded: false
		};
	}

	componentDidMount() {
		axios.get(`${Paths.Api.getByName}/${localStorage.getItem('user')}`)
		.then(res => {
			this.setState({
				user: res.data,
				isLoaded: true
			});
		});
	}

	renderML(data) {
		return(
			<div>
				<MilestoneList data={data} />
			</div>
		);
	}

	renderUD(data) {
		return(
			<div>
				<UserData
					username={data.userName}
					role={data.role}
					team={data.team}
				/>
			</div>
		);
	}

	render() {
		if(this.state.isLoaded){
			return (
				<div className="Profile">
					{this.renderUD(this.state.user)}
					{this.renderML(this.state.user.milestonesCollection)}
				</div>
			);
		} else {
			return <div>Now loading...</div>
		}
	}
}

export default Profile;