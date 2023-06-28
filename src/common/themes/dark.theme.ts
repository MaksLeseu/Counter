import {createTheme} from "@mui/material";

export const darkCustomTheme = createTheme({
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