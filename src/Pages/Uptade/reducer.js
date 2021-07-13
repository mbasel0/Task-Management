import produce from "immer";
import { SET_TASK_BY_ID } from "./constants";

export const initialState = {
  task:{
    title:"",
    description:""
  }
};

const createReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TASK_BY_ID:
        draft.task = action.values;
        break;
      default:
        return draft; 
    }
  });

export default createReducer;