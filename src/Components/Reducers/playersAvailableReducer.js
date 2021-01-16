import {players} from '../../Constants/players';

export const playersAvailableReducer = (state = players, action) => {
    switch(action.type){
        case "REMOVE_PLAYER_DRAFTED": {
            let players = [...state];
            let playerIndex = players.indexOf(players.find(p => p.fullName === action.payload.fullName));
            players.splice(playerIndex, 1);
            return [...players]
        }
        default:{
            return state;
        }
    }
}