import {createStore, combineReducers} from 'redux';
import {teamDraftingReducer} from './Components/Reducers/teamDraftingReducer';
import {draftIndexReducer} from './Components/Reducers/draftIndexReducer';

const reducers = combineReducers({teamDraftingReducer, draftIndexReducer});

export default createStore(reducers);


