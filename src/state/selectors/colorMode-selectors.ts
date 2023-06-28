import {AppRootStateType} from "../store";

export const colorModeSelector = (state: AppRootStateType): string => state.colorMode.mode