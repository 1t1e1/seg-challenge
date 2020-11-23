import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row, Container } from "reactstrap";

import SortAndSearch from "../components/SortAndSearch";
import CustomCard from "./Card";

export default function CardsContainer() {
	const { isLoading, content } = useSelector((state) => ({
		isLoading: state.homePage.isLoading,
		content: state.homePage.content,
	}));

	if (isLoading) return <div>Loading</div>;

	return (
		<>
			<Container>
				<SortAndSearch></SortAndSearch>
				{content.length ? (
					<Row>
						{content.map((wine, index) => (
							<Col xs={6} md={3} key={wine.productId}>
								<CustomCard {...wine}></CustomCard>
							</Col>
						))}
					</Row>
				) : (
					<div>
						<p> There is no found data. </p>
					</div>
				)}
			</Container>
		</>
	);
}
