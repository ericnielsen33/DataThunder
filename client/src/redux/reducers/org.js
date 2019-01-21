import { FETCH_ORG, CREATE_ORG, UPDATE_ORG, DELETE_ORG } from "../actions/types";

const intitialState = {
  id: null,
  name: '',
  locations: [],
  users: []
}

export const orgReducer = (org = intitialState, action) => {
  switch (action.type) {
    case FETCH_ORG:
      break;
    case CREATE_ORG:
      break;
    case UPDATE_ORG:
      break;
    case DELETE_ORG:
      break;

    default:
    return org;
  }
}
