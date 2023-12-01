import { UserType } from "../../utils/Types";
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

export type Action = AddUserAction | RemoveUserAction | RefreshAction