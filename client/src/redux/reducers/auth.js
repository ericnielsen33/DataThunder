import { SET_AUTH } from "../actions/types";

const initialState = {
  user: {}
};

export const authReducer = (auth = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_AUTH:
      return { ...auth, user: payload.data };
    default:
      return auth;
  }
}
