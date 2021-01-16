import {createStore, combineReducers} from 'redux';
import {teamDraftingReducer} from './Components/Reducers/teamDraftingReducer';
import {draftIndexReducer} from './Components/Reducers/draftIndexReducer';
import {playersDraftedReducer} from './Components/Reducers/playersDraftedReducer';
import {teamsReducer} from './Components/Reducers/teamsReducer';
import {playersAvailableReducer} from './Components/Reducers/playersAvailableReducer';
import {draftOrderReducer} from './Components/Reducers/draftOrderReducer';

const reducers = combineReducers({teamDraftingReducer, draftIndexReducer, playersDraftedReducer, teamsReducer, playersAvailableReducer, draftOrderReducer});

export default createStore(reducers);


