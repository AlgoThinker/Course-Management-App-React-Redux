import { combineReducers } from "redux";
import coursesy from "./courseReducer";
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";
const rootReducer = combineReducers({
  coursesy,
  authors,
  apiCallsInProgress,
});

export default rootReducer;
