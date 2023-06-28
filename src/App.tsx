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
    CssBaseline, FormControlLabel,
    FormGroup,
    Grid, IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import {setDarkModeAC, setLightModeAC} from "./state/reducers/darkMode-reducer";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {DARK_MODE, LIGHT_MODE, GlobalTheme} from "./common/components/GlobalTheme/GlobalTheme";
import {colorModeSelector} from "./state/selectors/colorMode-selectors";


const App = () => {
    const colorMode: string = useSelector(colorModeSelector)
    const dispatch: Dispatch = useDispatch()

    useEffect(() => {
        dispatch(setMaxValueAC(restoreState<number>('maxValue', 5)))
        dispatch(setDisabledValueAC(restoreState<number>('maxValue', 5)))
        dispatch(setStartValueAC(restoreState<number>('startValue', 0)))
        dispatch(setCounterAC(restoreState<number>('startValue', 0)))
    }, [])

    const changeTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        switch (colorMode) {
            case 'light' :
                dispatch(setDarkModeAC('dark'))
                break;
            case 'dark' :
                dispatch(setLightModeAC('light'))
                break;
        }
    }

    const icon = colorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
    const label = colorMode === 'dark' ? LIGHT_MODE : DARK_MODE

    return (
        <BrowserRouter>
            <GlobalTheme>
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

