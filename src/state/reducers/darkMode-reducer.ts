type ActionType = {
    type: 'SET_LIGHT' | 'SET_DARK'
    mode: 'light' | 'dark'
}

type StateType = {
    mode: string
}

const initialState: StateType = {
    mode: 'light'
}

export const darkModeReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_LIGHT' :
            return {
                ...state, mode: action.mode
            }
        case 'SET_DARK' :
            return {
                ...state, mode: action.mode
            }

        default: return state
    }
}

export const setLightModeAC = (mode: 'light'): ActionType => ({type: 'SET_LIGHT', mode})
export const setDarkModeAC = (mode: 'dark'): ActionType => ({type: 'SET_DARK', mode})