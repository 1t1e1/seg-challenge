import React from "react";

import CardsContainer from "../components/CardsContainer";
import useFetch from "../api/useFetch";

const API_ENDPOINT = "https://proto.segmentify.com/sample_products.json";
// "http://proto.segmentify.com/sample_products.json";

export default function HomePage() {
	const [state] = useFetch(API_ENDPOINT);

	return (
		<div>
			<CardsContainer
				isLoading={state.isLoading}
				data={state.data}
			></CardsContainer>
		</div>
	);
}
