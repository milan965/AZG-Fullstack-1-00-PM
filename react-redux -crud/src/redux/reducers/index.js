import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import { crudReducer } from "./crudReducer";

export const rootReducer = combineReducers({
    cnt : CounterReducer,
    crud : crudReducer
})