import * as Actions from "./types";
import Axios from "axios";

const getData = (url) => {
	return (dispatch) => {
		dispatch({
			type: Actions.INIT,
		});
		Axios.get(`${url}`)
			.then((result) => {
				dispatch({ type: Actions.SUCCESS, payload: result.data });
			})
			.catch((error) => {
				console.log("action error home page redux action", error);
				dispatch({ type: Actions.FAILURE, payload: error });
			});
	};
};

export { getData };
