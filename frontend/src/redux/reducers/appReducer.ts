import { Socket } from "socket.io-client";
import { ChatType, MessageType, UserType, onlineUsersType } from "../../utils/Types"
import { Action } from "../actions"
import { ActionTypes } from "../actions/actionTypes";

interface InitialStateInterface {
    chat:ChatType| null,
    nextUser:UserType|null,
    messages:MessageType[] |null,
    socket:Socket |null ,
    onlineUsers:onlineUsersType[]
}


const InitialState:InitialStateInterface={
    chat:null, 
    nextUser:null,
    messages:null,
    socket:null,
    onlineUsers:[]
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
            return { ...state, messages: [ ...state.messages , action.payload ] };
        case ActionTypes.ADD_SOCKET :
            return { ...state, socket  :action.payload };
        case ActionTypes.ADD_ONLINE_USERS :
            return { ...state, onlineUsers : action.payload };

        default:
            return state;
    }
};


export default AppReducer;