import { Dispatch } from "redux";
import { ActionTypes } from "./actionTypes"
import { Action } from "./index";
import { ChatType, MessageType, NotificationType, UserType, onlineUsersType } from "../../utils/Types";
import { Socket } from "socket.io-client";

export const AddUserAction =   (payload: UserType) =>async (dispatch: Dispatch<Action>) => {

    return dispatch({
        type: ActionTypes.ADD_USER,
        payload
    })
}
export const RemoveUserAction = () => (dispatch: Dispatch) => {

    return dispatch({
        type: ActionTypes.REMOVE_USER,
    })
}

export const refreshAction = () => (dispatch: Dispatch) => {
    return dispatch({
        type: ActionTypes.REFRESH
    })
}
export const AddNextUserAction = (payload:UserType) => (dispatch: Dispatch) => {
    return dispatch({
        type: ActionTypes.ADD_NEXT_USER,
        payload,
    })
}
export const AddChatAction = (payload:ChatType|null) => (dispatch: Dispatch) => {
    return dispatch({
        type: ActionTypes.ADD_CHAT,
        payload
    })
}
export const AddMessageAction = (payload:MessageType[]) => (dispatch: Dispatch) => {
    return dispatch({
        type: ActionTypes.ADD_MESSAGE,
        payload
    })
}
export const AddNewMessageAction=(payload:MessageType) => (dispatch: Dispatch) => {
    return dispatch({
        type: ActionTypes.ADD_NEW_MESSAGE,
        payload
    })
}
export const AddSocketAction=(payload:Socket) => (dispatch: Dispatch) => {
    return dispatch({
        type: ActionTypes.ADD_SOCKET,
        payload
    })
}
export const AddOnlineUsersAction=(payload:onlineUsersType[]) => (dispatch: Dispatch) => {
    return dispatch({
        type: ActionTypes.ADD_ONLINE_USERS,
        payload
    })
}
export const AddNotificationsAction=(payload:NotificationType) => (dispatch: Dispatch) => {
    return dispatch({
        type: ActionTypes.ADD_NOTIFICATIONS,
        payload
    })
}
export const AddUserStatsAction=(payload:{
        unseenChatCount:number,
        unseenNotificationCount:number
    }) => (dispatch: Dispatch) => {
    return dispatch({
        type: ActionTypes.ADD_USER_STATS,
        payload
    })
}
