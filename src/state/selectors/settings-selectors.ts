import {AppRootStateType} from "../store";

export const maxValueSelector = (state: AppRootStateType): number => state.settings.maxValue
export const startValueSelector = (state: AppRootStateType): number => state.settings.startValue