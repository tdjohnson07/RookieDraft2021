import {players} from '../../Constants/players';

export const playersAvailableReducer = (state = players, action) => {
    switch(action.type){
        case "REMOVE_PLAYER_DRAFTED": {
            let players = [...state];
            let playerIndex = players.indexOf(players.find(p => p.fullName === action.payload.fullName));
            players.splice(playerIndex, 1);
            return [...players];
        }
        case "REPLACE_PLAYER_AVAILABLE":{
            let players = [...state];
            let playerIndex = players.indexOf(players.find(p => p.fullName === action.payload.playerToRemove.fullName));
            if(action.payload.playerToAdd.fullName === "Missed Pick"){
                players.splice(playerIndex, 1);
            }
            else{
                players.splice(playerIndex, 1, action.payload.playerToAdd);
            }
            
            return [...players];
        }
        default:{
            return state;
        }
    }
}