import React from "react";
import { Jumbotron, Button } from "reactstrap";

import SortAndSearch from "./SortAndSearch";
import bgimage from "../maksym-kaharlytskyi-3uJt73tr4hI-unsplash.jpg";

const Example = (props) => {
	return (
		<div>
			<Jumbotron
				fluid
				style={{
					backgroundImage: `url(${bgimage})`,
					backgroundSize: "cover",
				}}
				className="bg-image-company m-0"
			>
				<div
					style={{
						height: "1000px",
					}}
				></div>
				<SortAndSearch></SortAndSearch>
			</Jumbotron>
		</div>
	);
};

export default Example;
