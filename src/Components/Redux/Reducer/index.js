import { combineReducers } from "redux"
import { loginReducer } from "./login"
import { counterReducer } from "./reducer"

export const reducers = combineReducers({
    login:loginReducer,
    counter:counterReducer
})
// export default combineReducers({
//     loginReducer,
//     counterReducer
//   })