import { createStore } from "redux"
import {conterReducer} from "../Reducer/reducer"

export const store=createStore(conterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log("object")
store.subscribe(()=> console.log(store.getState()))