import React, { useState, useEffect } from "react";
import { Form, FormGroup, CustomInput } from "reactstrap";

const Switch = ({ initialState, handleFunc }) => {
	const [state, setState] = useState(initialState);
	useEffect(() => {
		handleFunc(state);
	}, [state]);

	return (
		<Form>
			<FormGroup>
				<CustomInput
					type="switch"
					id="exampleCustomSwitch"
					name="inStockSwitcj"
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
