import { CHANGE_AUTH } from "./types";

export function changeAuth(isAuthenticated) {
  return { type: CHANGE_AUTH, payload: isAuthenticated };
       }