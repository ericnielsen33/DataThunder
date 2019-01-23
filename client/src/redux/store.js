import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authMiddleware, apiMiddleware } from "./middleware";
import reducers from "./reducers";

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk, authMiddleware, apiMiddleware)));
  return <Provider store={store}>{children}</Provider>;
};
