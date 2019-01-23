import { CHANGE_AUTH, FETCH_AUTH, SET_AUTH } from "./types";

export const changeAuth = isAuthenticated => {
  return { type: CHANGE_AUTH, payload: isAuthenticated };
};
export const fetchAuth = (username, password) => {
  return { type: FETCH_AUTH, payload: { username, password } };
};
export const setAuth = (user) => {
  return {type: SET_AUTH, payload: user};
};
