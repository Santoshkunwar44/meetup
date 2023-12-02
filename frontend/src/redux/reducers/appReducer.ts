import { ChatType, MessageType, UserType } from "../../utils/Types"
import { Action } from "../actions"
import { ActionTypes } from "../actions/actionTypes";

interface InitialStateInterface {
    chat:ChatType| null,
    nextUser:UserType|null,
    messages:MessageType[] |null,
}

const InitialState:InitialStateInterface={
    chat:null, 
    nextUser:null,
    messages:null,
}

const AppReducer = (state: InitialStateInterface = InitialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.ADD_CHAT:
            return { ...state, chat: action.payload };
        case ActionTypes.ADD_MESSAGE:
            return { ...state, messages: action.payload };
        case ActionTypes.ADD_NEXT_USER:
            return { ...state, nextUser: action.payload };
        case ActionTypes.ADD_NEW_MESSAGE:
            return { ...state, messages: [...state.messages,action.payload] };


        default:
            return state;
    }
};


export default AppReducer;