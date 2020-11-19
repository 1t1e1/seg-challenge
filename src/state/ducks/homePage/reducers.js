import * as Actions from "./types";

const initialState = {
	data: "",
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
				isLoading: false,
			};
		case Actions.FAILURE:
			return {
				...state,
				errorMessage: action.payload && "Error message from homepage reducer.",
				isLoading: false,
			};
		default:
			return state;
	}
}

export default dataReducer;
