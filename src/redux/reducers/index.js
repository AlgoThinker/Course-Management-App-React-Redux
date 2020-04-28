import { combineReducers } from "redux";
import coursesy from "./courseReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  coursesy,
  authors,
});

export default rootReducer;
