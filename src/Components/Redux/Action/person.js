export const clear_Value=()=>{
    return async (dispatch)=>{
        return await dispatch({type:"CLEAR_VALUE" , payload:""})

    }
}
export const set_person=(event)=>{
    return async(dispatch)=>{
        return await dispatch({type:"SET_PERSON", payload:event.target.value})
    }
}


//dsdsdsdsggdhfghdhfhghghfhdrtggr