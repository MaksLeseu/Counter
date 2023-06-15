import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducers/counter-reducer";
import {settingsReducer} from "./reducers/settings-reducer";
import {darkModeReducer} from "./reducers/darkMode-reducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer,
    isDarkMode: darkModeReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>