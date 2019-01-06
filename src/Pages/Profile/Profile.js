import React, { Component } from "react";
import axios from 'axios';
import UserData from '../../Components/userData';
import MilestoneList from '../../Components/MilestoneList';
import Paths from "../../Dictionaries/Paths";

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
		var tempList = [];
		// Use this with your username
		// localStorage.setItem('user', 'LordMascachapas');
		axios.get(`${Paths.Api.getByName}/${localStorage.getItem('user')}`)
		.then(res => {
			for(var i = 0; i < res.data[0].milestonesCollection.length; i++) {
				tempList[i] = res.data[0].milestonesCollection[i].milestone;
				tempList[i].status = res.data[0].milestonesCollection[i].status;
			}
			this.setState({
				user: res.data[0],
				milestones: tempList,
				isLoaded: true,
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
					{this.renderML(this.state.milestones)}
				</div>
			);
		} else {
			return <div>Now loading...</div>
		}
	}
}

export default Profile;