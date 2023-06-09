import React, {ChangeEvent, FC} from "react";
import s from './SettingsDisplay.module.css'
import {InputSettingsDisplay} from "./InputSettingsDisplay/InputSettingsDisplay";
import {useDispatch} from "react-redux";
import {setMaxValueAC, setStartValueAC} from "../../../reducers/counter-reducer";

type SettingsDisplayPropsType = {
    maxValue: number
    startValue: number
    startValueLessThanZero: boolean
    checkingMaxValueAndStartValue: boolean
}

export const SettingsDisplay: FC<SettingsDisplayPropsType> = (props) => {
    const {maxValue, startValue, startValueLessThanZero, checkingMaxValueAndStartValue,} = props
    const dispatch = useDispatch()

    const errorClassEqualValues = checkingMaxValueAndStartValue ? `${s.value} ${s.errorValue}`: `${s.value}`;
    const errorClassStartValue = startValueLessThanZero || checkingMaxValueAndStartValue ? `${s.value} ${s.errorValue}`: `${s.value}`;

    const setInputMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(Number(e.currentTarget.value)))
    }

    const setInputStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(Number(e.currentTarget.value)))
    }

    return (
        <div className={s.settingsDisplay}>
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
    )
}