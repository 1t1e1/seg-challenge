import * as Actions from "./types";

const initialState = {
	data: [],
	content: [],
	isLoading: false,
	isError: false,
	errorMessage: "",
	searchTerm: "",
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
				content: state.data.filter((item) => item.inStock),
			};
		case Actions.SEARCH1:
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
			let compareFunc = function (a, b) {
				let _a = parseFloat(a.price),
					_b = parseFloat(b.price);
				if (_a - _b === 0) {
					return _a < _b ? 1 : -1;
				} else {
					if (action.payload === "asc") return _a - _b;
					return _b - _a;
				}
			};

			let data = [...state.content];
			return {
				...state,
				content: data.sort(compareFunc),
			};

		default:
			return state;
	}
}

export default dataReducer;
