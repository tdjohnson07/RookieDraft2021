import {draftOrder} from '../../Constants/teams';

export const draftOrderReducer = (state = draftOrder, action) => {
    switch(action.type){
        case "UPDATE_DRAFT_ORDER": {
            return state;
        }
        default:{
            return state;
        }
    }
}