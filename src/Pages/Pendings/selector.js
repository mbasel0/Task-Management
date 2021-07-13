import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectPendings = (state) => state.pendings || initialState;
const makeSelectPendings = () =>
  createSelector(selectPendings, (pendingsState) => pendingsState);

export { selectPendings, makeSelectPendings };
