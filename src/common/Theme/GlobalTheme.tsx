import {createTheme, styled, ThemeProvider} from "@mui/material";
import React, {ReactNode} from "react";
import Box from '@mui/material/Box';
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

export const BoxCustomized = styled(Box)(
    ({theme}) => theme.palette.mode === 'dark'
        ?
            `
                background-color: indigo;
                border: 2px white solid;
                box-shadow: 1px 3px 10px white;
            `
        :
            `
                background-color: #DCDCDC;
                border: 2px black solid;
                box-shadow: 1px 3px 10px black;
            `
);

/*
width: 350px;
height: 250px;
border-radius: 5px;
margin: 0 auto;*/

export const DisplayCustomized = styled(Box)(
    ({theme}) => theme.palette.mode === 'dark'
        ?
            `
                border: 1px white solid;
                color: white;
            `
        :
            `
                border: 1px black solid;
                color: black;
            `
);

export const SettingsCustomized = styled(Box)(
    ({theme}) => theme.palette.mode === 'dark'
        ?
            `
                border: 2px white solid;
                background-color: indigo;
                box-shadow: 1px 3px 10px white;
            `
        :
            `
                border: 2px black solid;
                background-color: #DCDCDC;
                box-shadow: 1px 3px 10px black;
            `
);