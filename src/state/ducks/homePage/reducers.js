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
				let _a = parseFloat(a.price), // If the values are integers only, parseInt will do too
					_b = parseFloat(b.price);
				console.log(`a is ${_a}, b is ${_b} a-b ${_a - _b}`);
				if (_a - _b === 0) {
					return _a < _b ? 1 : -1;
				} else {
					return _a - _b;
				}
				// return parseFloat(a.price) < parseFloat(b.price);
			};

			let data = [...state.content];

			let arr = data.sort(compareFunc);

			arr.forEach((item, index) => {
				console.log("reducer check", item.price);
			});
			return {
				...state,
				content: arr,
			};

		default:
			console.log("default workd");
			return state;
	}
}

export default dataReducer;
