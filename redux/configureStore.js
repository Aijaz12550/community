import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as Reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};
let store;
const _combine_reducers = combineReducers(Reducers);
const persistedreducer = persistReducer(persistConfig, _combine_reducers);

store = createStore(persistedreducer, applyMiddleware(thunk));

store.__PERSISTOR = persistStore(store);

export const initStore = () => {
  return store;
};
