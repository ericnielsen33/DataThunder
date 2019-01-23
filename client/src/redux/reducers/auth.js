import { SET_AUTH, LOGOUT_AUTH } from "../actions/types";

const initialState = {
  user: {}
};

export const authReducer = (auth = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case LOGOUT_AUTH:
      return {...auth, user: {} }
    case SET_AUTH:
      return { ...auth, user: payload.data };
    default:
      return auth;
  }
}
