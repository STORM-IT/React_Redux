import { createStore } from "redux";
import {counterReducer} from './../Reducer/reducer'

export const store=createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
store.subscribe(()=> console.log(store.getState()))