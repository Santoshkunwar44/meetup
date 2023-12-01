import thunk from "redux-thunk"
import reducers from "./reducers/index"
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux"
// import reducers from "./index"

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export { store }