import {AppRootStateType} from "../store";


export const counterValueSelector = (state: AppRootStateType): number => state.counter.counterValue
export const disabledValueSelector = (state: AppRootStateType): number => state.counter.disabledValue