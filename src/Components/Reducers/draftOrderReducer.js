import {draftOrder} from '../../Constants/teams';

export const draftOrderReducer = (state = draftOrder, action) => {
    switch(action.type){
        case "UPDATE_DRAFT_ORDER": {
            const currentOrder = [...state];
            currentOrder.splice(action.payload.index, 1, action.payload.team);
            return [...currentOrder];
        }
        default:{
            return state;
        }
    }
}