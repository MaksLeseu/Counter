
export const saveState = (key: string, state: number) => {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}


export const restoreState = (key: string, defaultState: any) => {
    let state = defaultState
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) state = JSON.parse(stateAsString)
    return state
}