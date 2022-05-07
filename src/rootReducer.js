import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import superListReducer from "./superListReducer";

const rootReducer = combineReducers({
  superList: superListReducer,
  tasks: taskReducer,
});

export default rootReducer;
