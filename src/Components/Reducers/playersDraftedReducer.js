export const playersDraftedReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_PLAYER_DRAFTED": {
            let players = [...state];
            players.push(action.payload)
            return [...players];
        }
        case "REPLACE_PLAYER_DRAFTED":{
            let players = [...state];
            let playerIndex = players.indexOf(players.find(p => p.fullName === action.payload.playerToRemove.fullName));
            players.splice(playerIndex, 1, action.payload.playerToAdd);
            return [...players];
        }
        default:{
            return state;
        }
    }
}