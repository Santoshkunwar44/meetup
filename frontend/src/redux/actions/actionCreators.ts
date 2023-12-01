import { Dispatch } from "redux";
import { ActionTypes } from "./actionTypes"
import { Action } from "./index";
import { UserType } from "../../utils/Types";

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