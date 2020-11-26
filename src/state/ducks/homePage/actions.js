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

const searchWine = (wineName) => {
	return (dispatch) => {
		// FIXME  Dispatch multiple action correct way // research
		dispatch({
			type: Actions.SEARCH,
			payload: wineName,
		});
		dispatch({
			type: Actions.DEFAULT_ORDER,
		});
	};
};

const filterStock = (bln) => {
	return (dispatch) => {
		dispatch({
			type: Actions.FILTER_STOCK,
			payload: bln,
		});
		dispatch({
			type: Actions.DEFAULT_ORDER,
		});
	};
};

const sortByPrice = (direction) => {
	return (dispatch) => {
		dispatch({
			type: Actions.SORT,
			payload: direction,
		});
		dispatch({
			type: Actions.DEFAULT_ORDER,
		});
	};
};

export { getData, searchWine, filterStock, sortByPrice };
