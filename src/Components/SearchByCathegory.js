import React, { Component } from "react";
import {Button} from "react-bootstrap";
import axios from "axios";
import Paths from "../Paths/Paths";
import SelectField from "./SelectField.js"
import "react-dropdown/style.css";


class SearchByCathegory extends Component{
	constructor(props) {
		super(props);
		this.state = {
			CathegoryOptions: [],
			SelectedCathegory: "",
		};
		axios.get(Paths.Api.getApiEnumerator).then(res => {
			this.setState({
				CathegoryOptions: res.data.cathegory
			});
		});
	}

	handleChange = event => {
		this.setState({
			SelectedCathegory: event.target.value,
		});
	}

	handleSubmit = event => {
		// make request
		var res = [];
		this.props.onSubmit(res);
	}

	render() {
		var styleAll = {
			margin: "0 auto",
			width: "480px"
		}
		return(
			<div className="SearchByCathegory" style={styleAll}>
				<form>
					<SelectField
						id="CathegoryField"
						placeholder="Search By Cathegory"
						options={ this.state.CathegoryOptions }
						onChange={ this.handleChange }
						value={ this.state.SelectedCathegory }
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
