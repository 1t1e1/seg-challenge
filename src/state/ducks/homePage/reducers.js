import * as Actions from "./types";

const initialState = {
	data: [],
	content: [],
	isLoading: false,
	isError: false,
	errorMessage: "",
	searchTerm: "",
	filterByStock: 0,
	sortBy: "",
};

function dataReducer(state = initialState, action) {
	switch (action.type) {
		case Actions.INIT:
			return {
				...state,
				isLoading: true,
			};
		case Actions.SUCCESS:
			return {
				...state,
				data: action.payload,
				content: action.payload,
				isLoading: false,
			};
		case Actions.FAILURE:
			return {
				...state,
				errorMessage: action.payload && "Error message from homepage reducer.",
				isLoading: false,
			};
		case Actions.SEARCH:
			return {
				...state,
				searchTerm: action.payload,
			};
		case Actions.FILTER_STOCK:
			return {
				...state,
				filterByStock: action.payload,
			};

		case Actions.DEFAULT_ORDER:
			return {
				...state,
				content: state.data,
			};

		case Actions.SORT:
			return {
				...state,
				sortBy: action.payload,
			};

		default:
			return state;
	}
}

export default dataReducer;
