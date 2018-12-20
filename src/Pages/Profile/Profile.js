import React, { Component } from "react";
import axios from 'axios';
import UserData from '../../Components/userData';
import MilestoneList from '../../Components/MilestoneList';

class Profile extends Component {
	constructor(props){
		super(props);
		var tempMilestoneList = [];
		var tempUserData = {};
		this.state = {
			user: tempUserData,
			milestones: tempMilestoneList,
		};
		axios.get('http://localhost:3000/user/5c015bd66aa4e2407c5cb650')
		.then(res => {
			var i = 0;
			res.data.user.milestonesCollection.map(data => {
				axios.get(`http://localhost:3000/milestone/${res.data.user.milestonesCollection[i]._id}`)
				.then(res2 => {
					tempMilestoneList[i] = res2.data.milestone;
					tempMilestoneList[i].status = res.data.user.milestonesCollection[i].status;
					i++;
					this.setState({
						user: res.data.user,
						milestones: tempMilestoneList,
					});
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