export const teamDraftingReducer = (state = "Valor", action) => {
    switch(action.type){
        case "UPDATE_TEAM_DRAFTING": {
            return action.payload
        }
        default:{
            return state;
        }
    }
}