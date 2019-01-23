import { API_SUCCESS, API_ERROR, AUTH, LOGIN_AUTH } from "../../actions/types";
import { apiRequest } from "../../actions/api";
import { setLoader } from "../../actions/ui";
import { setAuth } from "../../actions/auth";

// split the FETCH_ORG action into 2 actions, an api request and atering the ui loader
export const authMiddleware = ({ dispatch }) => next => action => {
  next(action);
  switch (action.type) {
    case LOGIN_AUTH:
      dispatch(apiRequest(AUTH, "post", "/auth/login", action.payload));
      dispatch(setLoader(true));
      break;
    case `${AUTH} ${API_SUCCESS}`:
      dispatch(setAuth(action.payload.data));
      dispatch(setLoader(false));
      break;
    case `${AUTH} ${API_ERROR}`:
      dispatch(setLoader(false));
      break;
    default:
      break;
  }
};
