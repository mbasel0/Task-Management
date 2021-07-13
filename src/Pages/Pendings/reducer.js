import produce from "immer";
import { SET_PENDING_TASKS, DELETE_TASK_COMPLETED,  } from "./constants";
export const initialState = { pendings: [] , loading:false};

const pendingsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_PENDING_TASKS:
        draft.pendings = action.values;
        break;
      case DELETE_TASK_COMPLETED:
        draft.pendings = draft.pendings.filter(item => item.id !== action.id);
        break;
      default:
        return draft;
    }
  });


export default pendingsReducer;
