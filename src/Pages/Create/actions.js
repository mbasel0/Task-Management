import {CREATE} from "./constants";

export function create(values) {
  return {
    type: CREATE,
    values,
  };
}

