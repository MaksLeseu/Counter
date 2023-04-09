import React, {ChangeEvent, FC} from "react";
import s from './SettingsDisplay.module.css'
import {InputSettingsDisplay} from "./InputSettingsDisplay/InputSettingsDisplay";

export type SetMaxValueType<T> = (value: T extends 'string' ? ValueStringType : ValueNumberType) => void
type ValueNumberType = number
type ValueStringType = string


type SettingsDisplayPropsType = {
    maxValue: number
    startValue: number
    startValueLessThanZero: boolean
    checkingMaxValueAndStartValue: boolean

    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setDisabledBtnCounter: (value: boolean) => void
}

export const SettingsDisplay: FC<SettingsDisplayPropsType> = (
    {
        maxValue,
        startValue,
        startValueLessThanZero,
        checkingMaxValueAndStartValue,
        setStartValue,
        setMaxValue,
        setDisabledBtnCounter,
}
) => {

    const errorClassEqualValues = checkingMaxValueAndStartValue ? `${s.value} ${s.errorValue}`: `${s.value}`;
    const errorClassStartValue = startValueLessThanZero || checkingMaxValueAndStartValue ? `${s.value} ${s.errorValue}`: `${s.value}`;

    const setInputMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
        setDisabledBtnCounter(true)
    }

    const setInputStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
        setDisabledBtnCounter(true)
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