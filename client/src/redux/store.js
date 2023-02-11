import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import posts from './reducers/posts-slice'

const reducers = combineReducers({posts});

export const store = createStore(reducers, compose(applyMiddleware(thunk)))