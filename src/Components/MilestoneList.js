import React from "react";
import Milestone from "./Milestone/Milestone";
import NoCoincidences from "../Components/NoCoincidences";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

class MilestoneList extends React.Component {
  renderMS(datas) {
    if (datas.length > 0) {
      return (
        <div>
          {datas.map(data => (
            <Col xs={12} md={4}>
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
            </Col>
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
      <Grid>
          <Row>
				    {this.renderMS(this.props.data)}
          </Row>
        </Grid>
			</div>
		);
	};
}

export default MilestoneList;
