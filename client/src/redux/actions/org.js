import { FETCH_ORG, SET_ORG, CREATE_ORG, UPDATE_ORG, DELETE_ORG} from './types'

export function fetchOrg(params) {
    return { type: FETCH_ORG, payload: params };
};

export const setOrg = (params) => ({
    type: SET_ORG,
    payload: params
});

export function createOrg(params) {
    return { type: CREATE_ORG, payload: params};
};

export function updateOrg(params) {
    return { type: UPDATE_ORG, payload: params };
};
export function deleteOrg(params) {
    return { type: DELETE_ORG, payload: params };
};
