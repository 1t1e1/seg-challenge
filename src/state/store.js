import * as reducers from "./ducks";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers(reducers);

const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
