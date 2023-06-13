import React, {ChangeEvent, memo, useCallback} from "react";
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCounterAC, setDisabledValueAC} from "../../state/reducers/counter-reducer";
import {Dispatch} from "redux";
import {maxValueSelector, startValueSelector} from "../../state/selectors/settings-selectors";
import {setMaxValueAC, setStartValueAC} from "../../state/reducers/settings-reducer";
import {InputSettingsDisplay} from "./InputSettingsDisplay/InputSettingsDisplay";
import {saveState} from "../../common/localStorage/localStorage";

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

    const setInputMaxValue = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
    }, [dispatch])

    const setInputStartValue = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        dispatch(setStartValueAC(+e.currentTarget.value))
    }, [dispatch])

    return (
        <div className={s.settings}>
            <div className={s.settingsContainer}>
                <div className={s.display}>
                    <div className={s.containerValue}>
                        <p>max value:</p>
                        <InputSettingsDisplay
                            value={maxValue}
                            errorClass={errorClassEqualValues}
                            onChange={setInputMaxValue}
                        />
                    </div>
                    <div className={s.containerValue}>
                        <p>start value:</p>
                        <InputSettingsDisplay
                            value={startValue}
                            errorClass={errorClassStartValue}
                            onChange={setInputStartValue}
                        />
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <NavLink to={'/'}>
                        <Button disabledButton={startValueLessThanZero || checkingMaxValueAndStartValue}
                                onClick={setSettingsValue}
                        >
                            set
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}