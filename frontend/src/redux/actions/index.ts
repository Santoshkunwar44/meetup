import { Socket } from "socket.io-client";
import { ChatType, MessageType, NotificationType, UserType, onlineUsersType } from "../../utils/Types";
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
    payload:NotificationType
}
interface AddBasicsAction {
    type:ActionTypes.ADD_USER_STATS,
    payload:{
        unseenChatCount:number|null,
        unseenNotificationCount:number|null
    }
}

interface addNewChat{
    type:ActionTypes.ADD_NEW_CHAT,
    payload:ChatType[]
}
interface addAllNotificationsAction{
    type:ActionTypes.ADD_ALL_NOTIFICATIONS,
    payload:NotificationType[]
}

export type Action = addNewChat | addAllNotificationsAction | AddUserAction | AddBasicsAction  | AddNotificationsAction| AddOnlineUsersAction | RemoveUserAction | RefreshAction | AddSocketAction | AddChatAction | AddMessageAction| AddNextUser |AddNewMessage;