import {teams} from '../../Constants/teams';
export const teamsReducer = (state = teams, action) => {
    switch(action.type){
        case "ADD_DRAFTED_PLAYER_TO_TEAM": {
            let teams = [...state];
            let teamIndex = teams.indexOf(teams.find(t => t.name === action.payload.team.name));
            teams[teamIndex].playersSelectd.push(action.payload.player);
            return [...teams];
        }
        case "REPLACE_PLAYER_ONTEAM":{
            let teams = [...state];
            let teamIndex = teams.indexOf(teams.find(t => t.name === action.payload.playerToAdd.draftedBy));
            let playerToRemoveIndex = teams[teamIndex].playersSelectd.find(p => p.fullName === action.payload.playerToRemove.fullName);
            teams[teamIndex].playersSelectd.splice(playerToRemoveIndex, 1, action.payload.playerToAdd);
            return [...teams];
        }
        default:{
            return state;
        }
    }
}