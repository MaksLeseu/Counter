import React from "react";
import {Display} from "./Display/Display";
import {Buttons} from "../Button/Button";
import s from './Counter.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCounterAC} from "../../state/reducers/counter-reducer";
import {Dispatch} from "redux";
import {counterValueSelector, disabledValueSelector} from "../../state/selectors/counter-selectors";
import {startValueSelector} from "../../state/selectors/settings-selectors";
import {checkLS} from "../../common/localStorage/localStorage";
import PlusOneIcon from '@mui/icons-material/PlusOne';
import SettingsIcon from '@mui/icons-material/Settings';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import HomeIcon from '@mui/icons-material/Home';
import {darkModeSelector} from "../../state/selectors/darkMode-selectors";
import {Box, Container, Grid} from "@mui/material";
import {BoxCustomized} from "../../common/Theme/GlobalTheme";

export const Counter = () => {

    const counterValue: number = useSelector(counterValueSelector)
    const startValue: number = useSelector(startValueSelector)
    const disabledValue: number = useSelector(disabledValueSelector)
    const isDarkMode: boolean = useSelector(darkModeSelector)

    const dispatch: Dispatch = useDispatch()

    const isDisabledInc: boolean = counterValue >= disabledValue;
    const isDisabledReset: boolean = counterValue === startValue;

    const addNumberInSetCounter = (): void => {
        dispatch(setCounterAC(counterValue + 1));
    }

    const resetCounter = (): void => {
        dispatch(setCounterAC(startValue));
    }

    const checkLocalStorage: boolean = checkLS('maxValue')

    return (
        /*<div className={isDarkMode ? s.counterDarkMode : s.counter}>*/
            <BoxCustomized
                /*sx={{
                    width: 350,
                    height: 250,
                    backgroundColor: '#DCDCDC',
                    border: '2px black solid',
                    borderRadius: '5px',
                    boxShadow: '1px 3px 10px black',
                    margin: '0 auto',
                }}*/
                sx={{
                    width: 350,
                    height: 250,
                    borderRadius: '5px',
                    margin: '0 auto',
                }}
            >
                <div className={s.counterContainer}>
                    <div className={s.mainScreen}>
                        <HomeIcon />
                        <span>Main screen</span>
                    </div>
                    {
                        checkLocalStorage
                            ? <div className={s.message}>You need to set settings</div>
                            : <Display />
                    }
                    <div className={s.buttonContainer}>
                        <Buttons disabledButton={isDisabledInc || checkLocalStorage}
                                 onClick={addNumberInSetCounter}
                        >
                            <PlusOneIcon />
                        </Buttons>
                        <Buttons disabledButton={isDisabledReset}
                                 onClick={resetCounter}
                        >
                            <RestartAltIcon />
                        </Buttons>
                        <NavLink to={'/counter/settings'}>
                            <Buttons
                            >
                                <SettingsIcon />
                            </Buttons>
                        </NavLink>
                    </div>
                </div>
            </BoxCustomized>

       /* </div>*/
    )
}