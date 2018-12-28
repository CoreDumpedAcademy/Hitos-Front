import React from "react";
import Milestone from "../Components/Milestone";
import NoCoincidences from "../Components/NoCoincidences";

class MilestoneList extends React.Component {
  renderMS(datas) {
    if (datas.length > 0) {
      return (
        <div>
          {datas.map(data => (
            <Milestone
              key={data.milestone._id}
              creation={data.milestone.creation}
              title={data.milestone.title}
              author={data.milestone.author.userName}
              week={data.milestone.week}
              description={data.milestone.description}
              category={data.milestone.category}
              level={data.milestone.level}
              status={data.milestone.status}
            />
          ))}
        </div>
      );
    } else {
      return <NoCoincidences />;
    }
  }

	render(){
		return(
			<div className='MilestoneList'>
				{this.renderMS(this.props.data)}
			</div>
		);
	};
}

export default MilestoneList;
