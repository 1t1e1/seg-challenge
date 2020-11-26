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
					<Row className="row-cols-5">
						{content.map((wine, index) => (
							<Col
								xs={{ size: 10, offset: 1 }}
								sm={{ size: 6, offset: 0 }}
								md={{ size: 4, offset: 0 }}
								lg={{ size: 3, offset: 0 }}
								xl={{ size: 3, offset: 0 }}
								key={wine.productId}
							>
								{/* // xl={{ size: 2, offset: (5 * index + 1) % 5 === 1 ? 0 : 0 }}
								// TODO xl icin 5 column yap. > */}
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
