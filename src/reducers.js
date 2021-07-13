import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "./utils/history";
import spinnerReducer from "./Components/Spinner/reducer";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    spinner: spinnerReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });
  return rootReducer;
}
