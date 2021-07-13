import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectMyTask = (state) => state.MyTask || initialState;
const makeSelectTask = () =>
  createSelector(selectMyTask, (myTaskState) => myTaskState);

export { selectMyTask, makeSelectTask };
