
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