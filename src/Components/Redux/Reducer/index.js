import {combineReducers} from 'react-redux'
import { personReducer } from './person'
import {personsReducer} from './persons'
import { showPersonRedux } from './showPersons'
export const reducers = combineReducers({
    person:personReducer,
    persons:personsReducer,
    showPerson:showPersonRedux
})
// export default combineReducers({
//     loginReducer,
//     counterReducer
//   })