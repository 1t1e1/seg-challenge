import * as Actions from "./types";

const initialState = {
	data: [],
	content: "",
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
		default:
			return state;
	}
}

export default dataReducer;
