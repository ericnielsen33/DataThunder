import { SET_LOADER } from "./types";

export const setLoader = (state, entity) => ({
  type: SET_LOADER,
  payload: {
    data: state,
    meta: {
      entity
    }
  }
});
