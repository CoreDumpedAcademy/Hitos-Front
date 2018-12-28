import React from 'react'

class UserData extends React.Component{
	render(){
		var bodyColor = {
			backgroundColor: 'white',
		}

		var headingColor = {
			backgroundColor: 'pink',
		}

		var textColor = {
			color: 'black',
		}
		return(
			<div className='UserData panel panel-default' style={bodyColor}>
				<div className='panel-heading' style={headingColor}>
					<h2><strong>Bienvenido {this.props.role}</strong></h2>
				</div>
				<h5 style={textColor}><strong>Username: </strong> {this.props.username} </h5>
				<h5 style={textColor}><strong>Team: </strong> {this.props.team} </h5>
			</div>
		);
	}
}

export default UserData;
