import { combineReducers } from "redux";

import visitorReducer from "./visitorReducer";
import visitReducer from "./visitReducer";

const rootReducer = combineReducers({
  visitor: visitorReducer,
  visit: visitReducer,
});

export default rootReducer;
