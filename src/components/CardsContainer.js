import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";

import SortAndSearch from "../components/SortAndSearch";
import CustomCard from "./Card";

export default function CardsContainer() {
	const { isLoading, content } = useSelector((state) => ({
		isLoading: state.homePage.isLoading,
		content: state.homePage.content,
	}));

	if (isLoading) return <div>Loading</div>;

	if (!content.length) {
		return (
			<div>
				<p> data length is zero.</p>
			</div>
		);
	} else {
		return (
			<>
				<SortAndSearch></SortAndSearch>
				<Row>
					{content.map((wine) => (
						<Col xs={6} md={3} key={wine.productId}>
							<CustomCard {...wine}></CustomCard>
						</Col>
					))}
				</Row>
			</>
		);
	}
}
