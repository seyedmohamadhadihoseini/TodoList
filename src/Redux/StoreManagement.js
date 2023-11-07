import {  createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { AllReducers } from "./Reducers";




// draft is state

export const store = createStore(AllReducers ,composeWithDevTools());

