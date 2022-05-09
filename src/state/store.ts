import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "./localstorage-utils";


export const rootReducer = combineReducers({
    counter: counterReducer
})


/*let newMinValue;
const minValueAsString = localStorage.getItem('state')
if (minValueAsString) {
    newMinValue = JSON.parse(minValueAsString)
}*/

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    /*localStorage.setItem('state', JSON.stringify(store.getState()))*/
    saveState({
        counter: store.getState().counter
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>

//type AppStoreType = typeof store

// @ts-ignore
window.store = store;