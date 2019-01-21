import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { orgReducer } from "./org";
import { uiReducer } from "./ui";

export default combineReducers({
  auth: authReducer,
  org: orgReducer,
  ui: uiReducer
});
