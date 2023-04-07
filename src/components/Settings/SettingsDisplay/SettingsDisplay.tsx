import React, {ChangeEvent, FC} from "react";
import s from './SettingsDisplay.module.css'
import {InputSettingsDisplay} from "./InputSettingsDisplay/InputSettingsDisplay";

type SettingsDisplayPropsType = {
    maxValue: number
    startValue: number
    startValueLessThanZero: boolean
    checkingMaxValueAndStartValue: boolean

    setStartValue: (value: string) => void
    setMaxValue: (value: string) => void
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
        setMaxValue(e.currentTarget.value)
        setDisabledBtnCounter(true)
    }

    const setInputStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value)
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