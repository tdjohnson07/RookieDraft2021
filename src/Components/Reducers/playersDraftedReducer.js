export const playersDraftedReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_PLAYER_DRAFTED": {
            let players = [...state];
            players.push(action.payload)
            return [...players];
        }
        default:{
            return state;
        }
    }
}