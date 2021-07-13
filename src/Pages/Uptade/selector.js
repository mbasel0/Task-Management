import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectUptade = (state) => state.uptade || initialState;
const makeSelectUptade = () =>
  createSelector(selectUptade, (uptadeState) => uptadeState);

export { selectUptade, makeSelectUptade };
