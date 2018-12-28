import React, { Component } from "react";
import MilestoneList from "../../Components/MilestoneList";
import axios from "axios";
import Paths from "../../Paths/Paths";

class Milestones extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        axios.get(`${Paths.Api.getByName}/${localStorage.getItem('user')}`).then(res => {
            this.setState({
                data: res.data.milestonesCollection,
                isLoaded: true
            });
	   });
    }

    render() {
		if(this.state.isLoaded){
            return (
                <div className="Milestones">
                    <MilestoneList data={this.state.data} />
                </div>
            );
		} else {
			return <div>Now loading...</div>
		}
    }
}

export default Milestones;
