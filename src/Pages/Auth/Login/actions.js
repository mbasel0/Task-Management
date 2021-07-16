import {LOGIN,SET_USER,DENEME} from "./constants";


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