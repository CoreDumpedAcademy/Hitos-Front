import React, { Component } from "react";
import axios from 'axios';
import UserData from '../../Components/userData';
import MilestoneList from '../../Components/MilestoneList';
import Paths from "../../Paths/Paths";

class Profile extends Component {
	constructor(props){
		super(props);
		var tempMilestoneList = [];
		var tempUserData = {};
		this.state = {
			user: tempUserData,
			milestones: tempMilestoneList,
		};
		axios.get(`${Paths.Api.getUsers}/5c1fe30cac8fc11eec5547da`)
		.then(res => {
			tempUserData = res.data.user;
			var i = 0;
			this.setState({
				user: tempUserData,
			});
			res.data.user.milestonesCollection.map(data => {
				tempMilestoneList[i] = data.milestone;
				tempMilestoneList[i].status = data.status;
				i++;
				this.setState({
					milestones: tempMilestoneList,
				});
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
		return (
			<div className="Profile">
				{this.renderUD(this.state.user)}
				{this.renderML(this.state.milestones)}
			</div>
		);
	}
}

export default Profile;