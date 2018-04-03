import {combineReducers} from "redux";
import {authReducer} from "./authReducers";
import {accDataReducer} from "./accDataReducer"

const allReducers = combineReducers({
    authReducer:authReducer,
    accDataReducer: accDataReducer,

});

export default allReducers;