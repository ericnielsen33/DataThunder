import { apiRequest } from "../../actions/api";
import { setLoader } from "../../actions/ui";
import { ORG, FETCH_ORG, API_SUCCESS, API_ERROR } from "../../actions/types";

// split the FETCH_ORG action into 2 actions, an api request and atering the ui loader
export const orgMiddleware = ({ dispatch }) => next => action => {
  next(action);
  switch (action.type) {
    case FETCH_ORG:
      dispatch(apiRequest("GET", "./organizations", null, ORG));
      dispatch(setLoader(true));
      break;
    case `${ORG} ${API_SUCCESS}`:
      dispatch(setLoader(false));
      break;
    case `${ORG} ${API_ERROR}`:
      dispatch(setLoader(false));
      break;
    default:
      break;
  }
};
