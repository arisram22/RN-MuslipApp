import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { appReducer } from "./reducers";

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const middleware = [thunk];
export default createStore(rootReducer, applyMiddleware(...middleware));
