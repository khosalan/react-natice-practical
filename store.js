import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import serviceReducer from "./reducers/serviceReducer";

const reducer = combineReducers({
  serviceList: serviceReducer,
  auth: authReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
