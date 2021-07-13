import produce from "immer";
import { SET_TASKS, DELETE_TASK_COMPLETED, SET_TASK_COMPLETED,  } from "./constants";
export const initialState = { tasks: [] , loading:false};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TASKS:
        draft.tasks = action.values;
        break;
      case DELETE_TASK_COMPLETED:
        draft.tasks = draft.tasks.filter(item => item.id !== action.id);
        break;
        case SET_TASK_COMPLETED:
         let index = draft.tasks.findIndex(item => item.id === action.values.id);
         draft.tasks[index]=action.values;
          break;
      default:
        return draft;
    }
  });


export default homeReducer;
