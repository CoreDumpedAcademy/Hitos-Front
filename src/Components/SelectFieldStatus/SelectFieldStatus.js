import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./SelectFieldStatus.css";

const SelectFieldStatus = props => {
	return (
		<div className="SelField">
			<div className="relative">
				<FormGroup controlId={props.id}>
					<FormControl className={props.className} componentClass="select" onChange={props.onChange} value={props.value}>
						{props.options.map(el =>
							<option key={el} value={el}>{el}</option>
						)}
					</FormControl>
				</FormGroup>
			</div>
		</div>
	);
};

export default SelectFieldStatus;
