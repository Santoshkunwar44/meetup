import { ChatType, MessageType, UserType } from "../../utils/Types";
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

export type Action = AddUserAction | RemoveUserAction | RefreshAction | AddChatAction | AddMessageAction| AddNextUser |AddNewMessage;
