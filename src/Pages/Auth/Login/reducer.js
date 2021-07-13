import produce from "immer";
import { SET_USER } from "./constants";

export const initialState = {user:""};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_USER:
        draft.user = action.values;
        break;
      default:
        return draft; 
    }
  });

export default homeReducer;
