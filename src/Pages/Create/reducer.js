import produce from "immer";
import { } from "./constants";

export const initialState = {};

const createReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        return draft; 
    }
  });

export default createReducer;