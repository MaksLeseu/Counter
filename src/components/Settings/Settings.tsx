import React, {FC, useState} from "react";
import s from './Settings.module.css'
import {Display} from "../Display/Display";
import {Button} from "../Button/Button";
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    disabledBtnCounter: boolean
    disabledValue: number

    setMaxValue: any
    setStartValue: any
    setCounter: any
    setDisabledValue: any
    setDisabledBtnCounter: any
}

export const Settings: FC<SettingsPropsType> = (
    {
        maxValue,
        startValue,
        disabledBtnCounter,
        disabledValue,
        setMaxValue,
        setStartValue,
        setCounter,
        setDisabledValue,
        setDisabledBtnCounter
    }
) => {

    const startValueLessThanZero = startValue < 0;
    const equalValues = +maxValue === +startValue
    const isDisabledSet: boolean = disabledBtnCounter ? false : true;

    const setNumberValue = () => {
        setDisabledValue(maxValue)
        setDisabledBtnCounter(false)
        setCounter(startValue)
    }

    return (
        <div className={s.settings}>
            <div className={s.counterContainer}>
                <SettingsDisplay
                    maxValue={maxValue}
                    startValue={startValue}

                    setStartValue={setStartValue}
                    setMaxValue={setMaxValue}
                    setDisabledBtnCounter={setDisabledBtnCounter}
                />
                <div className={s.buttonContainer}>
                    <Button disabledButton={isDisabledSet || startValueLessThanZero || equalValues}
                            onClick={setNumberValue}
                    >
                        set
                    </Button>
                </div>
            </div>
        </div>
    )
}