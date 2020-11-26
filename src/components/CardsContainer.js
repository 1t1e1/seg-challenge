import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row, Container, Button } from "reactstrap";

import SortAndSearch from "../components/SortAndSearch";
import CustomCard from "./Card";

export default function CardsContainer() {
	const { isLoading, content, searchTerm, filterByStock, sortBy } = useSelector(
		(state) => ({
			isLoading: state.homePage.isLoading,
			content: state.homePage.content,
			searchTerm: state.homePage.searchTerm,
			filterByStock: state.homePage.filterByStock,
			sortBy: state.homePage.sortBy,
		})
	);

	if (isLoading) return <div>Loading</div>;

	const searchedContent = content.filter((product) =>
		product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
	);

	const filteredContent = searchedContent.filter((product) =>
		filterByStock === "1" ? product.inStock : true
	);

	let sortedContent;
	if ("default" === sortBy) {
		sortedContent = filteredContent;
	} else {
		let compareFunc = function (a, b) {
			let _a = parseFloat(a.price),
				_b = parseFloat(b.price);
			if (_a - _b === 0) {
				return _a < _b ? 1 : -1;
			} else {
				if (sortBy === "asc") return _a - _b;
				return _b - _a;
			}
		};

		sortedContent = filteredContent.sort(compareFunc);
	}

	return (
		<>
			<Container>
				<Button
					onClick={() => {
						// console.log(`filter term |${typeof filterByStock}|`);
						console.log(`sort term |${sortBy}|`);
						console.log(`sort arr `, sortBy);
					}}
				>
					Search Term
				</Button>
				<SortAndSearch></SortAndSearch>
				{sortedContent.length ? (
					<Row className="row-cols-5">
						{sortedContent.map((wine, index) => (
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
