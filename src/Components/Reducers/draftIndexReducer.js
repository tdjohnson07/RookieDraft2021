export const draftIndexReducer = (state = 0, action) => {
    switch(action.type){
        case "UPDATE_DRAFT_INDEX": {
            return (state+1);
        }
        default:{
            return state;
        }
    }
}