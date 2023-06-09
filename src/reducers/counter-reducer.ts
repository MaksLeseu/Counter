
type StateType = {
    counter: number
    maxValue: number
    startValue: number
    disabledValue: number
}

const initialState: StateType = {
    counter: 0,
    maxValue: 5,
    startValue: 0,
    disabledValue: 0
}

export const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {

        default: return state
    }
}

export const setMaxValueAC = (value: number) => ({type: '', value})
export const setDisabledValueAC = (value: number) => ({type: '', value})
export const setStartValueAC = (value: number) =>({type: '', value})
export const setCounterAC = (value: number) => ({type: '', value})