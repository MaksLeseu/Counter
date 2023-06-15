import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {setMaxValueAC, setStartValueAC} from "./state/reducers/settings-reducer";
import {restoreState} from "./common/localStorage/localStorage";
import {setCounterAC, setDisabledValueAC} from "./state/reducers/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {
    AppBar,
    Container,
    createTheme,
    CssBaseline, FormControlLabel,
    FormGroup,
    Grid, IconButton,
    ThemeProvider, Toolbar,
    Typography,
} from "@mui/material";
import {darkModeSelector} from "./state/selectors/darkMode-selectors";
import {setDarkModeAC} from "./state/reducers/darkMode-reducer";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


function App() {
    const isDarkMode: boolean = useSelector(darkModeSelector)

    const dispatch: Dispatch = useDispatch()

    useEffect(() => {
        dispatch(setMaxValueAC(restoreState<number>('maxValue', 5)))
        dispatch(setDisabledValueAC(restoreState<number>('maxValue', 5)))
        dispatch(setStartValueAC(restoreState<number>('startValue', 0)))
        dispatch(setCounterAC(restoreState<number>('startValue', 0)))
    }, [])

    const changeTheme = () => {
        dispatch(setDarkModeAC(!isDarkMode))
    }

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
        <BrowserRouter>
            <ThemeProvider theme={customTheme}>
                <CssBaseline />
                <div className="App">
                    <AppBar position={'static'}>
                        <Toolbar>
                            <Typography
                                variant={'h6'}
                                component={'div'}
                                sx={{flexGrow: 1}}
                            >
                                Counter
                            </Typography>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <IconButton>
                                            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                                        </IconButton>
                                    }
                                    label={isDarkMode ? 'Light mode' : 'Dark mode'}
                                />
                            </FormGroup>
                        </Toolbar>
                    </AppBar>
                    <Container fixed>
                        <Grid container sx={{p: '30px 0'}}>
                            <div className={'container'}>
                                <Routes>
                                    <Route path={'/Counter'} element={
                                        <Counter />
                                    } />
                                    <Route path={'/Counter/settings'} element={
                                        <Settings />
                                    } />
                                </Routes>
                            </div>
                        </Grid>
                    </Container>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;

