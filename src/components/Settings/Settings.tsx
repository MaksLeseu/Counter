import React, {FC} from "react";
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";
import {NavLink} from "react-router-dom";

type SettingsPropsType = {
    maxValue: number
    startValue: number

    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setCounter: (value: number) => void
    setDisabledValue: (value: number) => void
    saveValueInLocalStorage: (maxValue: number, startValue: number) => void
}

export const Settings: FC<SettingsPropsType> = (props) => {
    const {maxValue, startValue, setMaxValue, setStartValue,
        setCounter, setDisabledValue, saveValueInLocalStorage,} = props

    const startValueLessThanZero = startValue < 0;
    const checkingMaxValueAndStartValue = maxValue === startValue || startValue > maxValue

    const setSettingsValue = () => {
        setDisabledValue(maxValue)
        setCounter(startValue)
        saveValueInLocalStorage(maxValue, startValue)
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
                />
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