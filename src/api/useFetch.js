import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
	const [data, setData] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading((isLoading) => true);
		const fetchData = async () => {
			try {
				const response = await axios(url);
				setData(response.data);
				setIsLoading((isLoading) => false);
			} catch (error) {
				console.log("HomePage -> error", error);
			}
		};
		fetchData();
	}, []);

	return [isLoading, data];
}
