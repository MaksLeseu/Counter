import React, {useCallback} from "react";
import s from './Settings.module.scss'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCounterAC, setDisabledValueAC} from "../../state/reducers/counter-reducer";
import {Dispatch} from "redux";
import {maxValueSelector, startValueSelector} from "../../state/selectors/settings-selectors";
import {setMaxValueAC, setStartValueAC} from "../../state/reducers/settings-reducer";
import {InputSettingsDisplay} from "./InputSettingsDisplay/InputSettingsDisplay";
import {Buttons} from "../Button/Button";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import {colorModeSelector} from "../../state/selectors/colorMode-selectors";

export const Settings = () => {

    const maxValue: number = useSelector(maxValueSelector)
    const startValue: number = useSelector(startValueSelector)
    const colorMode: string = useSelector(colorModeSelector)

    const dispatch: Dispatch = useDispatch()

    const startValueEqualsZero: boolean = startValue === 0;
    const startValuePlusOneEqualsMaxValue: boolean = startValue + 1 === maxValue;
    const maxValueMinusOneEqualsStartValue: boolean = maxValue - 1 === startValue;


    const setSettingsValue = (): void => {
        dispatch(setDisabledValueAC(maxValue))
        dispatch(setCounterAC(startValue))
    }

    const setInputMaxValue = useCallback((maxValue: number): void => {
        dispatch(setMaxValueAC(maxValue))
    }, [dispatch])

    const setInputStartValue = useCallback((startValue: number): void => {
        dispatch(setStartValueAC(startValue))
    }, [dispatch])

    const maxValueInputButton = (valueMax: string): void => {
        valueMax === 'increment' ? setInputMaxValue(maxValue + 1) : setInputMaxValue(maxValue - 1)
    }

    const startValueInputButton = (valueStart: string): void => {
        valueStart === 'increment' ? setInputStartValue(startValue + 1) : setInputStartValue(startValue - 1)
    }

    return (
        <div className={colorMode === 'dark' ? `${s.settingsDarkMode} ${s.settings}` : s.settings}>
            <div className={s.settingsContainer}>
                <div className={s.display}>
                    <div className={s.settingsText}>
                        <SettingsIcon />
                        <span>Settings</span>
                    </div>
                    <div className={s.containerValue}>
                        <InputSettingsDisplay
                            value={maxValue}
                            label={'max value:'}
                            disabledDecrement={maxValueMinusOneEqualsStartValue}
                            onClick={maxValueInputButton}
                            onChange={setInputMaxValue}
                        />
                    </div>
                    <div className={s.containerValue}>
                        <InputSettingsDisplay
                            value={startValue}
                            label={'start value:'}
                            disabledIncrement={startValuePlusOneEqualsMaxValue}
                            disabledDecrement={startValueEqualsZero}
                            onClick={startValueInputButton}
                            onChange={setInputStartValue}
                        />
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <NavLink to={'/counter'} className={s.navLink} >
                        <Buttons
                            style={true}
                            onClick={setSettingsValue}
                        >
                            <SaveAltIcon />
                        </Buttons>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}