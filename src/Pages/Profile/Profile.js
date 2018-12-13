import React, { Component } from "react";
import axios from 'axios';
import UserData from '../../Components/userData';

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			userData: {},
		};
	}

	handleRequest(){
		axios.get('http://localhost:3000/user/5c114e667158d4151868d04b')
		.then(res => {
			console.log(res.data.milestones);
			this.setState({
				userData: res.data.user,
			});
		})	
	}
render() {
	this.handleRequest()
		return (
			<div className="Profile">
				<UserData
					username={this.state.userData.userName}
					firstName={this.state.userData.firstName}
					lastName={this.state.userData.lastName}
					telegram={this.state.userData.idTelegram}
				/>
			</div>
		);
	}
}

export default Profile;