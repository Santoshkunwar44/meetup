import { Socket } from "socket.io-client";
import { ChatType, MessageType, UserType, onlineUsersType } from "../../utils/Types";
import { ActionTypes } from "./actionTypes";


interface AddUserAction {
    type: ActionTypes.ADD_USER;
    payload: UserType
}
interface RemoveUserAction {
    type: ActionTypes.REMOVE_USER;
}
interface RefreshAction {
    type: ActionTypes.REFRESH;
}

interface AddChatAction{
    type:ActionTypes.ADD_CHAT;
    payload:ChatType
}
interface AddMessageAction{
    type:ActionTypes.ADD_MESSAGE,
    payload:MessageType[]
}
interface AddNextUser{
    type:ActionTypes.ADD_NEXT_USER,
    payload:UserType
}

interface AddNewMessage{
    type:ActionTypes.ADD_NEW_MESSAGE,
    payload:MessageType
}
interface AddSocketAction{
    type:ActionTypes.ADD_SOCKET,
    payload:Socket
}
interface AddOnlineUsersAction {
    type:ActionTypes.ADD_ONLINE_USERS,
    payload:onlineUsersType[]
}
interface AddNotificationsAction {
    type:ActionTypes.ADD_NOTIFICATIONS,
    payload:onlineUsersType[]
}

export type Action = AddUserAction  | AddNotificationsAction| AddOnlineUsersAction | RemoveUserAction | RefreshAction | AddSocketAction | AddChatAction | AddMessageAction| AddNextUser |AddNewMessage;