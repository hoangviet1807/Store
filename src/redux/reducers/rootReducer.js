import { combineReducers } from "redux";
import { defaultReducers } from "./defaultReducers";


const rootReducer = combineReducers({
    defaultReducers: defaultReducers
})
export default rootReducer;