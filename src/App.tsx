import React, {useEffect, useState} from 'react';
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
    AppBar, Checkbox,
    Container,
    createTheme,
    CssBaseline, FormControlLabel,
    FormGroup,
    Grid,
    ThemeProvider, Toolbar,
    Typography,
} from "@mui/material";
import {darkModeSelector} from "./state/selectors/darkMode-selectors";
import {setDarkModeAC} from "./state/reducers/darkMode-reducer";


function App() {
    /*const [isDarkMode, setDarkMode] = useState<boolean>(false)*/

    const isDarkMode: boolean = useSelector(darkModeSelector)

    const dispatch: Dispatch = useDispatch()

    useEffect(() => {
        dispatch(setMaxValueAC(restoreState<number>('maxValue', 5)))
        dispatch(setDisabledValueAC(restoreState<number>('maxValue', 5)))
        dispatch(setStartValueAC(restoreState<number>('startValue', 0)))
        dispatch(setCounterAC(restoreState<number>('startValue', 0)))
    }, [])

    const customTheme = createTheme({
        palette: {
            primary: {
                main: '#9c27b0',
                dark: '#ef6c00',
            },
            secondary: {
                main: '#9c27b0',
                dark: '#ef6c00',
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
                                    control={<Checkbox
                                        onChange={(e) => dispatch(setDarkModeAC(e.currentTarget.checked))} />}
                                    label={isDarkMode ? 'Light mode' : 'Dark mode'}
                                />
                            </FormGroup>
                        </Toolbar>
                    </AppBar>
                    <Container fixed>
                        <Grid container sx={{p: '30px 0'}}>
                            <div className={'container'}>
                                <Routes>
                                    <Route path={'/'} element={
                                        <Counter />
                                    } />
                                    <Route path={'/settings'} element={
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

