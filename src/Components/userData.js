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
			<div className='UserData' class='panel panel-default' style={bodyColor}>
				<div class='panel-heading' style={headingColor}>
					<h2><strong>Bienvenido {this.props.firstName} {this.props.lastName} </strong></h2>
				</div>
				<h5 style={textColor}><strong>Username: </strong> {this.props.username} </h5>
				<h5 style={textColor}><strong>Telegram: </strong> {this.props.telegram} </h5>
			</div>
		);
	}
}

export default UserData;
