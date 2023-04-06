import React, {FC, useState} from "react";
import s from './Settings.module.css'
import {Display} from "../Display/Display";
import {Button} from "../Button/Button";
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";

type SettingsPropsType = {
    startValue: number
    disabledBtnCounter: boolean
    disabledValue: number

    setStartValue: any
    setCounter: any
    setDisabledValue: any
    setDisabledBtnCounter: any
}

export const Settings: FC<SettingsPropsType> = (props) => {
    const {startValue, disabledBtnCounter, setStartValue, setCounter, setDisabledValue, setDisabledBtnCounter, disabledValue} = props

    const [maxValue, setMaxValue] = useState<number>(5)
    const isDisabledSet: boolean = disabledBtnCounter ? false : true;

    const setNumberValue = () => {
        setDisabledValue(maxValue)
        /*alert(`maxValue: ${maxValue}`)*/
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
                    <Button disabledButton={isDisabledSet}
                            onClick={setNumberValue}
                    >
                        set
                    </Button>
                </div>
            </div>
        </div>
    )
}