import React, { useState, useEffect } from "react";
import { Form, FormGroup, CustomInput } from "reactstrap";

import "./SortAndSearch.css";

const Switch = ({ initialState, handleFunc }) => {
	const [state, setState] = useState(initialState);
	useEffect(() => {
		handleFunc(state);
	}, [state]);

	return (
		<Form className="ml-3 my-switch">
			<FormGroup>
				<CustomInput
					type="switch"
					id="exampleCustomSwitch"
					name="inStockSwitch"
					label="Only in Stock"
					className="custom-checkbox-lg"
					checked={initialState}
					onChange={(e) => {
						setState(!state);
					}}
				/>
			</FormGroup>
		</Form>
	);
};

export default Switch;
