import React from "react";
import {Display} from "./Display/Display";
import {Buttons} from "../Button/Button";
import s from './Counter.module.scss'
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
import {colorModeSelector} from "../../state/selectors/colorMode-selectors";

export const Counter = () => {

    const counterValue: number = useSelector(counterValueSelector)
    const startValue: number = useSelector(startValueSelector)
    const disabledValue: number = useSelector(disabledValueSelector)
    const colorMode: string = useSelector(colorModeSelector)

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
        <div className={colorMode === 'dark' ? `${s.counterDarkMode} ${s.counter}` : s.counter}>
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
        </div>
    )
}