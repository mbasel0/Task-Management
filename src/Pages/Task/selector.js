import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectTask = (state) => state.task || initialState;
const makeSelectTask = () =>
  createSelector(selectTask, (taskState) => taskState);
  
export { selectTask, makeSelectTask };
