import {createTheme, styled, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {darkModeSelector} from "../../state/selectors/darkMode-selectors";
import React, {ReactNode, useState} from "react";
import Box from '@mui/material/Box';
import {amber, lightGreen, purple} from "@mui/material/colors";

type ThemeType = {
    isDarkMode: boolean
    children: ReactNode
}


export const GlobalTheme: React.FC<ThemeType> = ({isDarkMode, children}) => {
    /*const isDarkMode: boolean = useSelector(darkModeSelector)*/
    const mode = isDarkMode ? 'dark' : 'light'


    const customTheme = createTheme({
        palette: {
            /*primary: {
                main: '#9c27b0',
                dark: '#ef6c00',
            },*/
            /*secondary: {
                main:  isDarkMode ? '#e8eaf6' : '#9c27b0',
                dark: isDarkMode ? '#c5cae9' : '#ef6c00',
            },*/
            primary: {
                main: '#9c27b0',
                dark: '#ef6c00',
            },
            secondary: {
                main: '#9c27b0',
                dark: '#ef6c00',
            },
            mode: mode,
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: mode === 'dark'
                        ?
                        {
                            backgroundColor: '#e8eaf6',
                            color: 'black',
                        }
                        :   {}
                }
            },
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