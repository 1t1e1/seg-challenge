import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";

import SortAndSearch from "../components/SortAndSearch";
import CustomCard from "./Card";
// import { search } from "../state/ducks/homePage/actions";

export default function CardsContainer() {
	const { isLoading, data } = useSelector((state) => ({
		isLoading: state.homePage.isLoading,
		data: state.homePage.data,
	}));

	if (isLoading) return <div>Loading</div>;

	if (!data.length) {
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
					{data.map((wine) => (
						<Col xs={6} md={3} key={wine.productId}>
							<CustomCard {...wine}></CustomCard>
						</Col>
					))}
				</Row>
			</>
		);
	}
}
