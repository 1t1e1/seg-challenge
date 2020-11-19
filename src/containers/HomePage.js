import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardsContainer from "../components/CardsContainer";
import { getData } from "../state/ducks/homePage/actions";

const API_ENDPOINT = "https://proto.segmentify.com/sample_products.json";
// "http://proto.segmentify.com/sample_products.json";

export default function HomePage() {
	const { isLoading, data } = useSelector((state) => ({
		isLoading: state.homePage.isLoading,
		data: state.homePage.data,
	}));
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getData(API_ENDPOINT));
	}, [dispatch]);

	return (
		<div>
			<CardsContainer isLoading={isLoading} data={data}></CardsContainer>
		</div>
	);
}
