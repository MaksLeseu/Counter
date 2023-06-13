
type StateType = {
    maxValue: number
    startValue: number
}

type MaxValueACType = {
    type: 'SET_MAX_VALUE'
    maxValue: number
}

type StartValueACType = {
    type: 'SET_START_VALUE'
    startValue: number
}

type ActionType = MaxValueACType | StartValueACType

const initialState: StateType = {
    maxValue: 5,
    startValue: 0,
}

export const settingsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_MAX_VALUE' :
            return {
                ...state, maxValue: action.maxValue
            }
        case 'SET_START_VALUE' :
            return {
                ...state, startValue: action.startValue
            }

        default: return state
    }
}

export const setMaxValueAC = (maxValue: number): ActionType => ({type: 'SET_MAX_VALUE', maxValue})
export const setStartValueAC = (startValue: number): ActionType =>({type: 'SET_START_VALUE', startValue})