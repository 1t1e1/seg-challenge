import React from "react";
import { Col, Row } from "reactstrap";

import CustomCard from "./Card";

export default function CardsContainer({ data, isLoading }) {
	if (isLoading) return <div>Loading</div>;

	if (!data.length) {
		return (
			<div>
				<p> data length is zero.</p>
			</div>
		);
	} else {
		return (
			<Row>
				{data.map((wine) => (
					<Col xs={6} md={3} key={wine.productId}>
						<CustomCard {...wine}></CustomCard>
					</Col>
				))}
			</Row>
		);
	}
}
