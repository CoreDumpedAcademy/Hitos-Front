import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "react-dropdown/style.css";

const SelectField = props => {
	return (
		<FormGroup controlId={props.id}>
			<ControlLabel>{props.title}</ControlLabel>
			<FormControl componentClass="select" onChange={props.onChange}>
				<option value={props.value} disabled selected>-- {props.placeholder} --</option>
				{props.options.map(el =>
					<option value={el} key={el}>{el}</option>
				)}
			</FormControl>
		</FormGroup>
	);
};

export default SelectField;
