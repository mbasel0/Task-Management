import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectCreate = (state) => state.create || initialState;
const makeSelectCreate = () =>
  createSelector(selectCreate, (createState) => createState);

export { selectCreate, makeSelectCreate };
