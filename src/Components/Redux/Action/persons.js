import { clear_Value } from "./person";
export const add_person = (fullname) => {
    return async (dispatch, getState) => {
        const List_Person = [...getState().persons];
        const person = {
            fullname,
            id: Math.floor(Math.random() * 1000)
        }
        if (fullname != '' && fullname != " ") {
            List_Person.push(person);
            await dispatch({ type: "ADD_PERSON", payload: List_Person })
            await dispatch(clear_Value());
        }
    }
}

export const update_person = (event,id ) => {
    return async (dispatch, getState) => {
        const List_Person = [...getState().persons];
        const find_index = List_Person.findIndex(person => person.id == id);
        const person = List_Person[find_index];
        person.fullname=event.target.value
        List_Person[find_index]=person;
        await dispatch({type:"UPDATE_PERSON",payload:List_Person})
    }
}

export const delete_person=(id)=>{
    return async (dispatch,getState)=>{
        const List_Person=[...getState().persons]
        console.log(id)
        const filter_persons=List_Person.filter(person =>person.id!=id)
        console.log(filter_persons)
        await dispatch({type:"DELETE_PERSON", payload:filter_persons})
    }
}