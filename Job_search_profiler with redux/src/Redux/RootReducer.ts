import {combineReducers} from "redux";
import {UserListReducer} from "../Component/UserListComp/reducer";

const RootReducer = combineReducers({
  UserListReducer,
});
export default RootReducer;
