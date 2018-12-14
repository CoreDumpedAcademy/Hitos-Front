import React, { Component } from "react";
import axios from 'axios';
import UserData from '../../Components/userData';

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			userData: {},
		};
		axios.get('http://localhost:3000/user/5c015bd66aa4e2407c5cb650')
		.then(res => {
			this.setState({
				userData: res.data.user
			});
		});
	}
render() {
		return (
			<div className="Profile">
				<UserData
					username={this.state.userData.userName}
					role={this.state.userData.role}
					team={this.state.userData.team}
				/>
			</div>
		);
	}
}

export default Profile;