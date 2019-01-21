import { apiRequest } from "../../actions/api";
import { setLoader } from "../../actions/ui";
import {  } from "../../actions/auth";
import { API_SUCCESS, API_ERROR, AUTH, FETCH_AUTH } from "../../actions/types";

// split the FETCH_ORG action into 2 actions, an api request and atering the ui loader
export const authMiddleware = ({ dispatch }) => next => action => {
  next(action);
  switch (action.type) {
    case FETCH_AUTH:
      dispatch(apiRequest("GET", "./auth", null, AUTH));
      dispatch(setLoader(true));
      break;
    case `${AUTH} ${API_SUCCESS}`:
      dispatch(setLoader(false));
      break;
    case `${AUTH} ${API_ERROR}`:
      dispatch(setLoader(false));
      break;
    default:
      break;
  }
};
