import { combineReducers } from "redux";

import loginInReducer from "./LoginReducer";
import homeReducer from "./Home";


const rootReducer = combineReducers({
    loginInData: loginInReducer,
    homeData: homeReducer
});

export default rootReducer;
