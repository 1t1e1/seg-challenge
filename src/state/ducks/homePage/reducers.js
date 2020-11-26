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
			const searchedContent = state.data.filter((product) =>
				product.name
					.toLowerCase()
					.includes(state.searchTerm.trim().toLowerCase())
			);

			const filteredContent = searchedContent.filter((product) =>
				state.filterByStock === "1" ? product.inStock : true
			);

			let sortedContent;
			if ("default" === state.sortBy) {
				sortedContent = filteredContent;
			} else {
				let compareFunc = function (a, b) {
					let _a = parseFloat(a.price),
						_b = parseFloat(b.price);
					if (_a - _b === 0) {
						return _a < _b ? 1 : -1;
					} else {
						if (state.sortBy === "asc") return _a - _b;
						return _b - _a;
					}
				};

				sortedContent = filteredContent.sort(compareFunc);
			}

			return {
				...state,
				content: sortedContent,
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
