import {LOGIN,SET_USER} from "./constants";

export function login(values) {
  return {
    type: LOGIN,
    values,
  };
}

export function setUser(values) {
  return {
    type: SET_USER,
    values,
  };
}