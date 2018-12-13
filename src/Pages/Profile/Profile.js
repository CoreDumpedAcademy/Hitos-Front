import React, { Component } from "react";
import axios from 'axios';
import UserData from '../../Components/userData';

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: {},
		};
	}

	handleRequest(){
		axios.get('http://localhost:3000/user/5c114e667158d4151868d04b')
		.then(res => {
			console.log(res.data.milestones);
			this.setState({
				data: res.data.user,
			});
		})	
	}
render() {
	this.handleRequest()
		return (
			<div className="Profile">
				<UserData
					username={this.state.data.userName}
					firstName={this.state.data.firstName}
					lastName={this.state.data.lastName}
					telegram={this.state.data.idTelegram}
				/>
			</div>
		);
	}
}

export default Profile;