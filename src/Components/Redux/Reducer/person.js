export const personReducer=(state="",action)=>{

    switch (action.type) {
        case "SET_PERSON": return action.payload;
        case "CLEAR_VALUE": return action.payload;
    
        default:
            return state;
    }
}