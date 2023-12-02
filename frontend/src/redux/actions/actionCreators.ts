import { Dispatch } from "redux";
import { ActionTypes } from "./actionTypes"
import { Action } from "./index";
import { ChatType, MessageType, UserType } from "../../utils/Types";

export const AddUserAction = (payload: UserType) => (dispatch: Dispatch<Action>) => {

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