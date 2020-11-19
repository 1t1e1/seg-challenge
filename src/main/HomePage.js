import React, { useEffect, useState } from "react";
import axios from "axios";

const API_ENDPOINT = "https://proto.segmentify.com/sample_products.json";
// "http://proto.segmentify.com/sample_products.json";

export default function HomePage() {
	const [data, setData] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios(API_ENDPOINT);
				console.log("HomePage -> response", response);
				setData(response.data);
			} catch (error) {
				console.log("HomePage -> error", error);
			}
		};
		fetchData();
	}, []);

	console.log(data.length);
	if (!data.length)
		return (
			<div>
				<p> This is home page!!</p>
			</div>
		);
	return (
		<div>
			<p> data came.</p>

			{JSON.stringify(data)}
		</div>
	);
}
