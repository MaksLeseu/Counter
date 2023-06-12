
type StateType = {
    maxValue: number
    startValue: number
}

type ActionType = {
    type: 'SET_MAX_VALUE' | 'SET_START_VALUE'
    value: number
}

const initialState: StateType = {
    maxValue: 5,
    startValue: 0,
}

export const settingsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_MAX_VALUE' :
            return {
                ...state, maxValue: action.value
            }
        case 'SET_START_VALUE' :
            return {
                ...state, startValue: action.value
            }

        default: return state
    }
}

export const setMaxValueAC = (maxValue: number): ActionType => ({type: 'SET_MAX_VALUE', value: maxValue})
export const setStartValueAC = (startValue: number): ActionType =>({type: 'SET_START_VALUE', value: startValue})