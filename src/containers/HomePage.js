import React, { useEffect, useState } from "react";

import CardsContainer from "../components/CardsContainer";
import useFetch from "../api/useFetch";

const API_ENDPOINT = "https://proto.segmentify.com/sample_products.json";
// "http://proto.segmentify.com/sample_products.json";

export default function HomePage() {
	const [isLoading, data] = useFetch(API_ENDPOINT);

	return (
		<div>
			<CardsContainer isLoading={isLoading} data={data}></CardsContainer>
		</div>
	);
}
