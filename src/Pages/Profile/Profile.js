import React, { Component } from "react";
import axios from 'axios';
import UserData from '../../Components/userData';
import Paths from "../../Paths/Paths";

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			userData: {},
		};
	}

	handleRequest(){
		
	}

	componentDidMount(){
		console.log(localStorage.getItem('user'));
		axios.get(`${Paths.Api.getByName}/${localStorage.getItem('user')}`)
		.then(res => {
			console.log(res);
			this.setState({
				userData: res.data[0],
			});
		})	
	}

render() {
	//this.handleRequest()
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