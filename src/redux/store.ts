import {combineReducers, createStore} from "redux";
import {countReducer} from "../reducers/countReducer";

const rootReducer = combineReducers({
    counter : countReducer
})

export const store = createStore(rootReducer)
export type RootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store