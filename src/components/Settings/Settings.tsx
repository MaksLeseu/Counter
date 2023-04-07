import React, {FC} from "react";
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    disabledBtnCounter: boolean

    setMaxValue: any
    setStartValue: any
    setCounter: (value: number) => void
    setDisabledValue: (value: number) => void
    setDisabledBtnCounter: (value: boolean) => void
    save: (maxValue: number, startValue: number) => void
}

export const Settings: FC<SettingsPropsType> = (
    {
        maxValue,
        startValue,
        disabledBtnCounter,
        setMaxValue,
        setStartValue,
        setCounter,
        setDisabledValue,
        setDisabledBtnCounter,
        save,
    }
) => {

    const startValueLessThanZero = startValue < 0;
    const checkingMaxValueAndStartValue = +maxValue === +startValue || +startValue > +maxValue
    const isDisabledSet: boolean = disabledBtnCounter ? false : true;

    const setSettingsValue = () => {
        setDisabledValue(maxValue)
        setDisabledBtnCounter(false)
        setCounter(startValue)
        /*localStorage.setItem('maxValue', JSON.stringify(+maxValue))
        localStorage.setItem('startValue', JSON.stringify(+startValue))*/
        save(maxValue, startValue)
    }

    return (
        <div className={s.settings}>
            <div className={s.settingsContainer}>
                <SettingsDisplay
                    maxValue={maxValue}
                    startValue={startValue}
                    startValueLessThanZero={startValueLessThanZero}
                    checkingMaxValueAndStartValue={checkingMaxValueAndStartValue}

                    setStartValue={setStartValue}
                    setMaxValue={setMaxValue}
                    setDisabledBtnCounter={setDisabledBtnCounter}
                />
                <div className={s.buttonContainer}>
                    <Button disabledButton={isDisabledSet || startValueLessThanZero || checkingMaxValueAndStartValue}
                            onClick={setSettingsValue}
                    >
                        set
                    </Button>
                </div>
            </div>
        </div>
    )
}