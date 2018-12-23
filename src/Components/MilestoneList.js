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
