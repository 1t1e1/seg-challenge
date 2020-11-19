import { useEffect } from "react";
import axios from "axios";

import useStore, { actionTypes } from "../state/useStore";

export default function useFetch(url) {
	const [state, dispatch] = useStore();

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: actionTypes.init });
			try {
				const response = await axios(url);
				dispatch({ type: actionTypes.success, payload: response.data });
			} catch (error) {
				dispatch({ type: actionTypes.fail });
				console.log("HomePage -> error", error);
			}
		};
		fetchData();
	}, [url, dispatch]);

	return [state, dispatch];
}
