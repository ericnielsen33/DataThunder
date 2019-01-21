import { CHANGE_AUTH } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  token: null,
  user: {}
};

export const authReducer = (auth = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CHANGE_AUTH:
      return { ...auth, isAuthenticated: payload };
    default:
      return auth;
  }
}
