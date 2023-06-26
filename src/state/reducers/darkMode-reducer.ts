type ActionType = {
    type: 'SET_MODE'
    mode: boolean
}

type StateType = {
    mode: boolean
}

const initialState: StateType = {
    mode: false
}

export const darkModeReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_MODE' :
            return {
                ...state, mode: action.mode
            }

        default: return state
    }
}

export const setDarkModeAC = (mode: boolean): ActionType => ({type: 'SET_MODE', mode})