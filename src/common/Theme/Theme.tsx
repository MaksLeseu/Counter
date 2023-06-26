import {createTheme, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {darkModeSelector} from "../../state/selectors/darkMode-selectors";
import React, {ReactNode} from "react";

type ThemeType = {
    children: ReactNode
}

export const Theme: React.FC<ThemeType> = ({children}) => {
    const isDarkMode: boolean = useSelector(darkModeSelector)

    const customTheme = createTheme({
        palette: {
            primary: {
                main: '#9c27b0',
                dark: '#ef6c00',
            },
            secondary: {
                main:  isDarkMode ?'#e8eaf6' : '#9c27b0',
                dark: isDarkMode ? '#c5cae9' : '#ef6c00',
            },
            mode: isDarkMode ? 'dark' : 'light'
        },
    })

    return (
        <ThemeProvider theme={customTheme}>
            {children}
        </ThemeProvider>
    )
}

export const LIGHT_MODE: string = 'Light mode';
export const DARK_MODE: string = 'Dark mode';