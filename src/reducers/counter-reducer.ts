
type StateType = {
    counter: number
    /*maxValue: number
    startValue: number*/
    disabledValue: number
}

type ActionType = {
    type: 'SET_MAX_VALUE' | 'SET_DISABLED_VALUE' | 'SET_START_VALUE' | 'SET_COUNTER'
    value: number
}

const initialState: StateType = {
    counter: 0,
    /*maxValue: 5,
    startValue: 0,*/
    disabledValue: 0
}

export const counterReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        /*case 'SET_MAX_VALUE' :
            return {
                ...state, maxValue: action.value
            }*/
        case 'SET_DISABLED_VALUE' :
            return {
                ...state, disabledValue: action.value
            }
        /*case 'SET_START_VALUE' :
            return {
                ...state, startValue: action.value
            }*/
        case 'SET_COUNTER' :
            return {
                ...state, counter: action.value
            }

        default: return state
    }
}

/*export const setMaxValueAC = (value: number): ActionType => ({type: 'SET_MAX_VALUE', value})*/
export const setDisabledValueAC = (value: number): ActionType => ({type: 'SET_DISABLED_VALUE', value})
/*export const setStartValueAC = (value: number): ActionType =>({type: 'SET_START_VALUE', value})*/
export const setCounterAC = (value: number): ActionType => ({type: 'SET_COUNTER', value})