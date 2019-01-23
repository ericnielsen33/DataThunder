import { LOGIN_AUTH, LOGOUT_AUTH, SET_AUTH } from "./types";

export const loginAuth = (email, password) => {
  return { type: LOGIN_AUTH, payload: { data: { email, password } } };
};
export const logout = () => {
  return { type: LOGOUT_AUTH };
};
export const setAuth = (user) => {
  return {type: SET_AUTH, payload: user};
};
