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
    AppBar,
    Container, createTheme,
    CssBaseline, FormControlLabel,
    FormGroup,
    Grid, IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import {darkModeSelector} from "./state/selectors/darkMode-selectors";
import {setDarkModeAC} from "./state/reducers/darkMode-reducer";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {DARK_MODE, LIGHT_MODE, GlobalTheme} from "./common/Theme/GlobalTheme";


const App = () => {
    /*const isDarkMode: boolean = useSelector(darkModeSelector)*/
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    const dispatch: Dispatch = useDispatch()

    useEffect(() => {
        dispatch(setMaxValueAC(restoreState<number>('maxValue', 5)))
        dispatch(setDisabledValueAC(restoreState<number>('maxValue', 5)))
        dispatch(setStartValueAC(restoreState<number>('startValue', 0)))
        dispatch(setCounterAC(restoreState<number>('startValue', 0)))
    }, [])

    const changeTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        /*dispatch(setDarkModeAC(!isDarkMode))*/
        setIsDarkMode(!isDarkMode)
    }

    const icon = isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />
    const label = isDarkMode ? LIGHT_MODE : DARK_MODE

    return (
        <BrowserRouter>
            <GlobalTheme isDarkMode={isDarkMode}>
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
                                        <IconButton onClick={changeTheme}>
                                            {icon}
                                        </IconButton>
                                    }
                                    label={label}
                                />
                            </FormGroup>
                        </Toolbar>
                    </AppBar>
                    <Container fixed>
                        <Grid container sx={{p: '30px 0'}}>
                            <div className={'container'}>
                                <Routes>
                                    <Route path={'/counter'} element={
                                        <Counter />
                                    } />
                                    <Route path={'/counter/settings'} element={
                                        <Settings />
                                    } />
                                </Routes>
                            </div>
                        </Grid>
                    </Container>
                </div>
            </GlobalTheme>
        </BrowserRouter>
    );
}

export default App;

