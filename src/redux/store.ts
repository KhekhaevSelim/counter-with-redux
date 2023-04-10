import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {countReducer} from "../reducers/countReducer";

const rootReducer = combineReducers({
    counter : countReducer
})


let preloadedState ;
let persistedStateString = localStorage.getItem("app-state")
if(persistedStateString) {
    preloadedState = JSON.parse(persistedStateString)
}
export const store = createStore(rootReducer, preloadedState , applyMiddleware(thunk))
export type RootStateType = ReturnType<typeof rootReducer>

store.subscribe(()=> {
    localStorage.setItem("app-state", JSON.stringify(store.getState()))
})
// @ts-ignore
window.store = store