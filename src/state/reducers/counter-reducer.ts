
type StateType = {
    counterValue: number
    disabledValue: number
}

type DisabledValueACType = {
    type: 'SET_DISABLED_VALUE'
    disabledValue: number
}

type CounterValueACType = {
    type: 'SET_COUNTER'
    counterValue: number
}

type ActionType = DisabledValueACType | CounterValueACType

const initialState: StateType = {
    counterValue: 0,
    disabledValue: 0
}

export const counterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_DISABLED_VALUE' :
            return {
                ...state, disabledValue: action.disabledValue
            }
        case 'SET_COUNTER' :
            return {
                ...state, counterValue: action.counterValue
            }

        default: return state
    }
}

export const setDisabledValueAC = (disabledValue: number): ActionType => ({type: 'SET_DISABLED_VALUE', disabledValue})
export const setCounterAC = (counterValue: number): ActionType => ({type: 'SET_COUNTER', counterValue})