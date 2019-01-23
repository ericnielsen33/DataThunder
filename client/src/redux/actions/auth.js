import {  FETCH_AUTH, SET_AUTH } from "./types";

export const fetchAuth = (email, password) => {
  return { type: FETCH_AUTH, payload:{ data: { email, password } } };
};
export const setAuth = (user) => {
  return {type: SET_AUTH, payload: user};
};
