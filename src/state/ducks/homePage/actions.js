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
	return {
		type: Actions.SEARCH,
		payload: wineName,
	};
};

const filterStock = (str) => {
	if (str === "true") {
		return {
			type: Actions.FILTER_STOCK,
		};
	} else {
		return {
			type: Actions.DEFAULT_ORDER,
		};
	}
};

const sortByPrice = (direction) => {
	if (direction === "default") {
		return {
			type: Actions.DEFAULT_ORDER,
		};
	} else {
		return (dispatch) => {
			dispatch({
				type: Actions.SORT,
				payload: direction,
			});
		};
	}
};

export { getData, searchWine, filterStock, sortByPrice };
