import {teams} from '../../Constants/teams';
export const teamsReducer = (state = teams, action) => {
    switch(action.type){
        case "ADD_DRAFTED_PLAYER_TO_TEAM": {
            let teams = [...state];
            let teamIndex = teams.indexOf(teams.find(t => t.name === action.payload.team.name));
            teams[teamIndex].playersSelectd.push(action.payload.player);
            return [...teams];
        }
        default:{
            return state;
        }
    }
}