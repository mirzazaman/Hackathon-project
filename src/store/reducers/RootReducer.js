import { combineReducers } from "redux";
import DbReducer from "./DbReducer";
import AuthReducer from "./AuthReducer";

const RootReducer = combineReducers({
    DbReducer,
    AuthReducer
})

export default RootReducer;