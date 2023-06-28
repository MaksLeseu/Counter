import {ThemeProvider} from "@mui/material";
import React, {ReactNode} from "react";
import {useSelector} from "react-redux";
import {colorModeSelector} from "../../../state/selectors/colorMode-selectors";
import {darkCustomTheme} from "../../themes/dark.theme";
import {lightCustomTheme} from "../../themes/light.theme";

type ThemeType = {
    children: ReactNode
}


export const GlobalTheme: React.FC<ThemeType> = ({children}) => {
    const colorMode: string = useSelector(colorModeSelector)


    const mode = colorMode === 'light'
        ? lightCustomTheme : darkCustomTheme

    return (
        <ThemeProvider theme={mode}>
            {children}
        </ThemeProvider>
    )
}

export const LIGHT_MODE: string = 'Light mode';
export const DARK_MODE: string = 'Dark mode';