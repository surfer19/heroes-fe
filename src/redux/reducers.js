import { combineReducers } from 'redux';

import gnomeListReducer from "./GnomeListReducer";

const rootReducer = combineReducers({
	gnomeListReducer
});

export default rootReducer;