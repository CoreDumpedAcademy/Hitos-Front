import React from 'react';
import Milestone from '../Components/Milestone';

class MilestoneList extends React.Component{
	renderMS(datas) {
		return(
			<div>
			{datas.map(data => (
				<Milestone
				key={data._id}
				creation={data.creation}
				title={data.title}
				author={data.author.userName}
				week={data.week}
				description={data.description}
				category={data.category}
				level={data.level}
				status={data.status}
				/>
			))}
			</div>
		);
	}

	render(){
		return(
			<div className='MilestoneList'>
				{this.renderMS(this.props.data)}
			</div>
		)
	};
}

export default MilestoneList;
