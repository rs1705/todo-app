import {combineReducers,createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import UserReducer from "./reducers/userReducer";
import TodoReducer from "./reducers/todoReducer";
import logger from "redux-logger";

const rootReducer=combineReducers({
  user:UserReducer,
  todo:TodoReducer
});

const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;