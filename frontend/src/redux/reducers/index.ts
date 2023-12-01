import { combineReducers } from "redux"
import UserReducer from "./userReducer";
import OtherReducer from "./otherReducer";


const reducers = combineReducers({

    user: UserReducer,
    other: OtherReducer,

})

export type State = ReturnType<typeof reducers>

export default reducers;

