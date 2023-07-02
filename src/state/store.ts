import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducers/counter-reducer";
import {settingsReducer} from "./reducers/settings-reducer";
import {darkModeReducer} from "./reducers/darkMode-reducer";
import {_saveState, loadState} from "../common/localStorage/localStorage";
import thunk from 'redux-thunk'



const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer,
    colorMode: darkModeReducer
})

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    _saveState({
        counter: store.getState().counter,
        settings: store.getState().settings,
        colorMode: store.getState().colorMode
    });
});



export type AppRootStateType = ReturnType<typeof rootReducer>

// Это, чтобы можно было в консоли браузера обращаться к state в любой момент
// @ts-ignore
window.store = store;