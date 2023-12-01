
import { Action } from "../actions/index";
import { ActionTypes } from "../actions/actionTypes";


const INITIAL_USERSTATE = {
    refresh: false,
};

const OtherReducer = (state = INITIAL_USERSTATE, action: Action) => {
    switch (action.type) {
        case ActionTypes.REFRESH:
            return { ...state, refresh: !state.refresh };

        default:
            return state;
    }
};

export default OtherReducer;