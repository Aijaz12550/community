import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as Reducers from "./reducers";

let _combine_reducers = combineReducers(Reducers);
export const initStore = () => {

    return createStore(_combine_reducers,applyMiddleware(thunk));
}
