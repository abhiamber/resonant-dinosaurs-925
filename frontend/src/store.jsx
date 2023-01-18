import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReudcer = combineReducers({});

export const store = legacy_createStore(rootReudcer, applyMiddleware(thunk));
