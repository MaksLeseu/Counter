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

export const Settings = () => {

    const saveValueInLocalStorage = (maxValue: number, startValue: number): void => {
        saveState<number>('maxValue', maxValue)
        saveState<number>('startValue', startValue)
    }

    const maxValue: number = useSelector(maxValueSelector)
    const startValue: number = useSelector(startValueSelector)

    const dispatch: Dispatch = useDispatch()

    const startValueLessThanZero: boolean = startValue < 0;
    const checkingMaxValueAndStartValue: boolean = maxValue === startValue || startValue > maxValue

    const errorClassEqualValues: string = checkingMaxValueAndStartValue ? `${s.value} ${s.errorValue}`: `${s.value}`;
    const errorClassStartValue: string = startValueLessThanZero || checkingMaxValueAndStartValue ? `${s.value} ${s.errorValue}`: `${s.value}`;

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
        <div className={s.settings}>
            <div className={s.settingsContainer}>
                <div className={s.display}>
                    <div className={s.settingsText}>
                        <div> <SettingsIcon /></div>
                        <div>Settings</div>
                    </div>
                    <div className={s.containerValue}>
                        <InputSettingsDisplay
                            inputStyles={inputStyles}
                            label={'max value:'}
                            value={maxValue}
                            errorClass={errorClassEqualValues}
                            onChange={setInputMaxValue}
                        />
                    </div>
                    <div className={s.containerValue}>
                        <InputSettingsDisplay
                            inputStyles={inputStyles}
                            label={'start value:'}
                            value={startValue}
                            errorClass={errorClassStartValue}
                            onChange={setInputStartValue}
                        />
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <NavLink to={startValueLessThanZero || checkingMaxValueAndStartValue ? '#' : '/'} >
                        <Buttons disabledButton={startValueLessThanZero || checkingMaxValueAndStartValue}
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