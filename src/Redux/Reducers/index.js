import { combineReducers } from "redux";
import { TodosReducer } from "./Todo";
import { FilterReducer } from "./Filter";

export const AllReducers =  combineReducers({
    todos : TodosReducer,
    filter : FilterReducer
})