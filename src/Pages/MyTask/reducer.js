import produce from "immer";
import { SET_MY_TASKS, DELETE_TASK_COMPLETED,  } from "./constants";
export const initialState = { myTasks: [] , loading:false};

const myTaskReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_MY_TASKS:
        draft.myTasks = action.values;
        break;
      case DELETE_TASK_COMPLETED:
        draft.myTasks = draft.myTasks.filter(item => item.id !== action.id);
        break;
      default:
        return draft;
    }
  });


export default myTaskReducer;
