import React from "react";
import { Jumbotron } from "reactstrap";

import SortAndSearch from "./SortAndSearch";
import bgimage from "../../assets/company-pic.jpg";
import "./CompanyPic.css";

const Example = (props) => {
	return (
		<div>
			<Jumbotron
				fluid
				style={{
					backgroundImage: `url(${bgimage})`,
					backgroundSize: "cover",
				}}
				className="bg-image-company px-2 py-3"
			>
				<div
					id="tampon-pic"
					className="empty-pic"
					style={{
						// color: "white",
						fontSize: "40px",
					}}
				>
					<p>I am here</p>
				</div>
				<SortAndSearch></SortAndSearch>
			</Jumbotron>
		</div>
	);
};

export default Example;
