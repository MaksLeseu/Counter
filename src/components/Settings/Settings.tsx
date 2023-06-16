import React, {ChangeEvent, useCallback} from "react";
import s from './Settings.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCounterAC, setDisabledValueAC} from "../../state/reducers/counter-reducer";
import {Dispatch} from "redux";
import {maxValueSelector, startValueSelector} from "../../state/selectors/settings-selectors";
import {setMaxValueAC, setStartValueAC} from "../../state/reducers/settings-reducer";
import {InputSettingsDisplay} from "./InputSettingsDisplay/InputSettingsDisplay";
import {saveState} from "../../common/localStorage/localStorage";
import {Buttons} from "../Button/Button";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import {darkModeSelector} from "../../state/selectors/darkMode-selectors";

export const Settings = () => {

    const saveValueInLocalStorage = (maxValue: number, startValue: number): void => {
        saveState<number>('maxValue', maxValue)
        saveState<number>('startValue', startValue)
    }

    const maxValue: number = useSelector(maxValueSelector)
    const startValue: number = useSelector(startValueSelector)
    const isDarkMode: boolean = useSelector(darkModeSelector)

    const dispatch: Dispatch = useDispatch()

    const startValueLessThanZero: boolean = startValue < 0;
    const checkingMaxValueAndStartValue: boolean = maxValue === startValue || startValue > maxValue

    /*const errorClassEqualValues: string = checkingMaxValueAndStartValue ? `${s.value} ${s.errorValue}`: `${s.value}`;
    const errorClassStartValue: string = startValueLessThanZero || checkingMaxValueAndStartValue ? `${s.value} ${s.errorValue}`: `${s.value}`;*/
    const errorValueLessZero: string = startValueLessThanZero ? 'Error - value less than 0' : '';
    const errorStartValueGreaterMaxValue: string = startValue > maxValue ? 'Error - start value is greater than max value' : '';
    const errorMaxValueEqualsStartValue: string = maxValue === startValue ? 'Error - max value and start value are equal' : '';

    const labelMaxValue =  startValueLessThanZero || checkingMaxValueAndStartValue
        ? errorStartValueGreaterMaxValue || errorMaxValueEqualsStartValue
        : 'max value:';

    const labelStartValue = startValueLessThanZero || checkingMaxValueAndStartValue
        ?   errorValueLessZero || errorMaxValueEqualsStartValue
        :   'start value:';


    const setSettingsValue = (): void => {
        dispatch(setDisabledValueAC(maxValue))
        dispatch(setCounterAC(startValue))
        saveValueInLocalStorage(maxValue, startValue)
    }

    const setInputMaxValue = useCallback((/*e: ChangeEvent<HTMLInputElement>*/ value: any): void => {
        dispatch(setMaxValueAC(value))
    }, [dispatch])

    const setInputStartValue = useCallback((/*e: ChangeEvent<HTMLInputElement>*/ value: any): void => {
        dispatch(setStartValueAC(value))
    }, [dispatch])

    const inputStyles = {
        fontSize: '24px',
        textAlign: 'center',
        paddingLeft: '90px'
    };

    return (
        <div className={isDarkMode ? s.settingsDarkMode : s.settings}>
            <div className={s.settingsContainer}>
                <div className={s.display}>
                    <div className={s.settingsText}>
                        <div> <SettingsIcon /></div>
                        <span>Settings</span>
                    </div>
                    <div className={s.containerValue}>
                        <InputSettingsDisplay
                            inputStyles={inputStyles}
                            label={labelMaxValue}
                            value={maxValue}
                            errorClass={startValueLessThanZero || checkingMaxValueAndStartValue}
                            onChange={setInputMaxValue}
                        />
                    </div>
                    <div className={s.containerValue}>
                        <InputSettingsDisplay
                            inputStyles={inputStyles}
                            label={labelStartValue}
                            value={startValue}
                            errorClass={startValueLessThanZero || checkingMaxValueAndStartValue}
                            onChange={setInputStartValue}
                        />
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <NavLink to={startValueLessThanZero || checkingMaxValueAndStartValue ? '#' : '/Counter'} className={s.navLink} >
                        <Buttons disabledButton={startValueLessThanZero || checkingMaxValueAndStartValue}
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