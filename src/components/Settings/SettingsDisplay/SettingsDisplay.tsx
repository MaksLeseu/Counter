import React, {FC, useState} from "react";
import s from './SettingsDisplay.module.css'

type SettingsDisplayPropsType = {
    maxValue: number
    startValue: number
    setStartValue: any
    setMaxValue: any
    setDisabledBtnCounter: any
}

export const SettingsDisplay: FC<SettingsDisplayPropsType> = (props) => {
    const {maxValue, startValue, setStartValue, setMaxValue, setDisabledBtnCounter} = props;

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
                    className={s.maxValue}
                    type={"number"}
                    onChange={inputMaxValue}
                    value={props.maxValue}
                />
            </div>
            <div className={s.blockStartValue}>
                <p>start value:</p>
                <input
                    className={s.startValue}
                    type={"number"}
                    onChange={inputStartValue}
                    value={startValue}
                />
            </div>
        </div>
    )
}