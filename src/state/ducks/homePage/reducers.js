import * as Actions from "./types";

const initialState = {
	data: [],
	content: [],
	isLoading: false,
	isError: false,
	errorMessage: "",
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
				content: state.data.filter((item) =>
					item.name.toLowerCase().includes(action.payload.trim().toLowerCase())
				),
			};

		case Actions.FILTER_STOCK:
			return {
				...state,
				content: state.data.filter((item) => item.inStock),
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
					if (action.payload == "asc") return _a - _b;
					return _b - _a;
				}
			};

			let data = [...state.content];
			let arr = data.sort(compareFunc);
			return {
				...state,
				content: arr,
			};

		default:
			return state;
	}
}

export default dataReducer;
