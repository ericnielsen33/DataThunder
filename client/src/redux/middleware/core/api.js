import Axios from "axios";
import { API_REQUEST } from "../../actions/types";
import { apiSuccess, apiError } from "../../actions/api";
const axios = Axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 1500,
  responseType: 'j'
});

export const apiMiddleware = ({ dispatch, getState }) => next => action => {
  next(action);
  if (action.type === API_REQUEST) {
      const { entity, method, url } = action.meta;
      const { data } = action.payload;
      const { user } = getState().auth;
      const headers = { Authorization: `Bearer ${user.token}`};
    axios({ method, url, data, headers })
        .then(data => {
          console.log(user);
          dispatch(apiSuccess(data, entity));
        })
        .catch(error => {
          dispatch(apiError(error, entity));
        });
  }
};
