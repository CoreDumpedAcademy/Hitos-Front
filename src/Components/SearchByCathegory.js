import React, { Component } from "react";
import {Button} from "react-bootstrap";
import axios from "axios";
import Paths from "../Dictionaries/Paths";
import SelectField from "./SelectField.js"
import "react-dropdown/style.css";


class SearchByCathegory extends Component{
	constructor(props) {
		super(props);
		this.state = {
			CategoryOptions: [],
			SelectedCategory: "",
		};
		axios.get(Paths.Api.getApiEnumerator).then(res => {
			this.setState({
				CategoryOptions: res.data.cathegory
			});
		});
	}

	handleChange = event => {
		this.setState({
			SelectedCategory: event.target.value,
		});
	}

	handleSubmit = event => {
		axios.get(`${Paths.Api.getMsByCategory}/${this.state.SelectedCategory}`).then(res => {
			this.props.onSubmit(res.data.milestones);
		});
	}

	render() {
		/*var styleAll = {
			margin: "0 auto",
			width: "480px"
		}*/
		return(
			<div className="SearchByCategory">
				<form>
					<SelectField
						id="CategoryField"
						placeholder="Search By Category"
						options={ this.state.CategoryOptions }
						onChange={ this.handleChange }
						value={ this.state.SelectedCategory }
					/>
					<Button onClick={ this.handleSubmit }
						bsSize="large"
					>Search</Button>
				</form>
			</div>
		);
	}
}

export default SearchByCathegory;
