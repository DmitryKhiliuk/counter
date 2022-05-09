import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";


export const rootReducer = combineReducers({
    counter: counterReducer
})
export const store = createStore(rootReducer)

store.subscribe(() => {

})

export type AppRootStateType = ReturnType<typeof rootReducer>

type AppStoreType = typeof store

// @ts-ignore
window.store = store;