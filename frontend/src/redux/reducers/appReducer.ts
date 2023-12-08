import { Socket } from "socket.io-client";
import { ChatType, MessageType, NotificationType, UserType, onlineUsersType } from "../../utils/Types"
import { Action } from "../actions"
import { ActionTypes } from "../actions/actionTypes";

interface InitialStateInterface {
    chat:ChatType|null,
    nextUser:UserType|null,
    messages:MessageType[] ,
    allChats:ChatType[],
    socket: Socket |null ,
    onlineUsers:onlineUsersType[],
    newNotification:  NotificationType | null,
    unseenNotificationCount:number|null ,
    unseenChatCount:number |null,
}


const InitialState:InitialStateInterface={
    chat:null, 
    nextUser:null,
    messages:[],
    socket:null,
    onlineUsers:[],
    newNotification:null,
    unseenChatCount:null,
    allChats:[],
    unseenNotificationCount:null,
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
        
        case ActionTypes.ADD_NOTIFICATIONS :
            return { ...state, newNotification: action.payload };

        case ActionTypes.ADD_USER_STATS :
            const {unseenNotificationCount,unseenChatCount}= action.payload
            return {...state,unseenNotificationCount,unseenChatCount}
        
        case ActionTypes.ADD_NEW_CHAT:
            return {...state,allChats: action.payload}
        
        default:
            return state;
    }
};


export default AppReducer;