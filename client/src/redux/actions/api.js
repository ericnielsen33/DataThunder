import { API_REQUEST, API_SUCCESS, API_ERROR } from "./types";

export const apiRequest = (entity, method, url, body) => ({
  type: `${API_REQUEST}`,
  payload: body,
  meta: { entity, method, url }
});

export const apiSuccess = (response, entity) => ({
  type: `${entity} ${API_SUCCESS}`,
  payload: { data: response },
  meta: { entity }
});

export const apiError = (error, entity) => ({
  type: `${entity} ${API_ERROR}`,
  payload: { data: error },
  meta: { entity }
});
