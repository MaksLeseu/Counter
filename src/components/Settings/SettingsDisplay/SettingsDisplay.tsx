import React, {FC, useState} from "react";
import s from './SettingsDisplay.module.css'

type SettingsDisplayPropsType = {
    maxValue: number
    startValue: number

    setStartValue: any
    setMaxValue: any
    setDisabledBtnCounter: any
}

export const SettingsDisplay: FC<SettingsDisplayPropsType> = (
    {
        maxValue,
        startValue,
        setStartValue,
        setMaxValue,
        setDisabledBtnCounter,
}
) => {

    const equalValues = +maxValue === +startValue
    const errorClassEqualValues = equalValues ? `${s.value} ${s.errorValue}`: `${s.value}`;
    const errorClassStartValue = startValue < 0 || equalValues ? `${s.value} ${s.errorValue}`: `${s.value}`;

    const inputMaxValue = (e: any) => {
        setMaxValue(e.currentTarget.value)
        setDisabledBtnCounter(true)
    }

    const inputStartValue = (e: any) => {
        setStartValue(e.currentTarget.value)
        setDisabledBtnCounter(true)
    }

    return (
        <div className={s.display}>
            <div className={s.blockMaxValue}>
                <p>max value:</p>
                <input
                    className={errorClassEqualValues}
                    type={"number"}
                    onChange={inputMaxValue}
                    value={maxValue}
                />
            </div>
            <div className={s.blockStartValue}>
                <p>start value:</p>
                <input
                    className={errorClassStartValue}
                    type={"number"}
                    onChange={inputStartValue}
                    value={startValue}
                />
            </div>
        </div>
    )
}