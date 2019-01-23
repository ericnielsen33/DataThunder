import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import { authMiddleware } from "./middleware";

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk, authMiddleware)));
  return <Provider store={store}>{children}</Provider>;
};
