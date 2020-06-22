import { combineReducers } from "redux";
import userReducer from "./reducer_users";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
