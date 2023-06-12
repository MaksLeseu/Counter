
type StateType = {
    counterValue: number
    disabledValue: number
}

type ActionType = {
    type: 'SET_DISABLED_VALUE' | 'SET_COUNTER'
    value: number
}

const initialState: StateType = {
    counterValue: 0,
    disabledValue: 0
}

export const counterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_DISABLED_VALUE' :
            return {
                ...state, disabledValue: action.value
            }
        case 'SET_COUNTER' :
            return {
                ...state, counterValue: action.value
            }

        default: return state
    }
}

export const setDisabledValueAC = (disabledValue: number): ActionType => ({type: 'SET_DISABLED_VALUE', value: disabledValue})
export const setCounterAC = (counterValue: number): ActionType => ({type: 'SET_COUNTER', value: counterValue})