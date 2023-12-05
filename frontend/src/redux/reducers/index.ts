import { combineReducers } from "redux"
import UserReducer from "./userReducer";
import OtherReducer from "./otherReducer";
import AppReducer from "./appReducer";


const reducers = combineReducers({
    user: UserReducer,
    other: OtherReducer,
    app:AppReducer ,

})

export type State = ReturnType<typeof reducers>

export default reducers;

