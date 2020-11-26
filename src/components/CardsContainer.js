import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row, Container, Button } from "reactstrap";

import SortAndSearch from "../components/SortAndSearch";
import CustomCard from "./Card";

export default function CardsContainer() {
	const { isLoading, content, searchTerm } = useSelector((state) => ({
		isLoading: state.homePage.isLoading,
		content: state.homePage.content,
		searchTerm: state.homePage.searchTerm,
	}));

	if (isLoading) return <div>Loading</div>;

	const searchedContent = content.filter((product) =>
		product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
	);

	return (
		<>
			<Container>
				<Button
					onClick={() => {
						console.log(`search term |${searchTerm}|`);
						console.log(`search arr `, searchedContent);
					}}
				>
					Search Term
				</Button>
				<SortAndSearch></SortAndSearch>
				{searchedContent.length ? (
					<Row className="row-cols-5">
						{searchedContent.map((wine, index) => (
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
