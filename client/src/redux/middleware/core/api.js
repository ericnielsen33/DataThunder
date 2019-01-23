import Axios from "axios";
import { API_REQUEST } from "../../actions/types";
const instance = Axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 1500,
  headers: {}
});

export const api = ({ dispatch }) => next => action => {
  switch (action.type) {
    case API_REQUEST:
      const { method, url, onSuccess, onError } = action.meta;
      const { data } = action.payload;
        Axios({ method, url, data
        }).then((data) => {
            dispatch({ type: onSuccess, payload: data})
        }).catch(error => {
            dispatch({ type: onError, payload: error})
        })
      break;

    default:
      break;
  }
  return next(action);
};
