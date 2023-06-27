import {createTheme, ThemeProvider} from "@mui/material";
import React, {ReactNode} from "react";
import {useSelector} from "react-redux";
import {colorModeSelector} from "../../state/selectors/darkMode-selectors";

type ThemeType = {
    children: ReactNode
}


export const GlobalTheme: React.FC<ThemeType> = ({children}) => {
    const colorMode: string = useSelector(colorModeSelector)

    const lightCustomTheme = createTheme({
        palette: {
            primary: {
                main: '#9c27b0',
                dark: '#ef6c00',
            },
            secondary: {
                main: '#9c27b0',
                dark: '#ef6c00',
            },
            mode: 'light',
        },
    })

    const darkCustomTheme = createTheme({
        palette: {
            primary: {
                main: '#9c27b0',
                dark: '#ef6c00',
            },
            secondary: {
                main: '#e8eaf6',
                dark: '#c5cae9',
            },
            mode: 'dark',
        }
    })

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