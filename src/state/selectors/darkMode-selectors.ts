import {AppRootStateType} from "../store";

export const darkModeSelector = (state: AppRootStateType): boolean => state.isDarkMode.mode