import {AppRootStateType} from "../../state/store";

export const loadState = () => {
    try {
        const stateAsString = localStorage.getItem('app-state')
        if (stateAsString === null) return undefined
        return JSON.parse(stateAsString)
    }
    catch (err) {
        return undefined
    }
}

export const _saveState = (state : AppRootStateType): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('app-state', serializedState)
    } catch (error) {
        //ignore
    }
}

export function checkLS(key: string): boolean {
    const stateAsString = localStorage.getItem(key)
    return stateAsString === null
}





export function saveState<T> (key: string, state: T ) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}


export function restoreState<T> (key: string, defaultState: T) {
    let state = defaultState
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) state = JSON.parse(stateAsString) as T
    return state
}
