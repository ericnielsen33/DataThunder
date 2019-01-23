import Axios from "axios";
import { API_REQUEST } from "../../actions/types";
import { apiSuccess, apiError } from "../../actions/api";
const axios = Axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 1500
});

export const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === API_REQUEST) {
      const { entity, method, url } = action.meta;
      const { data } = action.payload;
    axios({ method, url, data })
        .then(data => {
          dispatch(apiSuccess(data, entity));
        })
        .catch(error => {
          dispatch(apiError(error, entity));
        });
  }
};
