import React, { useEffect, useState } from "react";
import axios from "axios";

import CardsContainer from "../components/CardsContainer";

const API_ENDPOINT = "https://proto.segmentify.com/sample_products.json";
// "http://proto.segmentify.com/sample_products.json";

export default function HomePage() {
	const [data, setData] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading((isLoading) => true);
		const fetchData = async () => {
			try {
				const response = await axios(API_ENDPOINT);
				setData(response.data);
				setIsLoading((isLoading) => false);
			} catch (error) {
				console.log("HomePage -> error", error);
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			<CardsContainer isLoading={isLoading} data={data}></CardsContainer>
		</div>
	);
}
