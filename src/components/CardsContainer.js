import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";

import SortAndSearch from "../components/SortAndSearch";
import CustomCard from "./Card";

const compareFunc = function (a, b) {
	let _a = parseFloat(a.price), // If the values are integers only, parseInt will do too
		_b = parseFloat(b.price);
	if (_a - _b === 0) {
		return _a > _b ? 1 : -1;
	} else {
		return _a - _b;
	}
};

export default function CardsContainer() {
	const { isLoading, content } = useSelector((state) => ({
		isLoading: state.homePage.isLoading,
		content: state.homePage.content,
	}));
	const [sortedArr, setArr] = useState(content); //.sort(compareFunc));

	if (isLoading) return <div>Loading</div>;

	return (
		<>
			<SortAndSearch></SortAndSearch>
			{content.length ? (
				<Row>
					{content.map((wine) => (
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
		</>
	);
}
