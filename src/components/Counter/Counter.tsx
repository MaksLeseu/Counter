import React, {FC, useState} from "react";
import {Display} from "./Display/Display";
import {Button} from "../Button/Button";
import s from './Counter.module.css'

type CounterPropsType = {
    counter: number
    maxValue: number
    startValue: number

    disabledBtnCounter: boolean
    disabledValue: number
    setCounter: (value: number) => void
}

export const Counter: FC<CounterPropsType> = (props) => {
    const {counter, maxValue, startValue, disabledBtnCounter, disabledValue, setCounter,} = props

    const isDisabledInc: boolean = counter >= disabledValue || disabledBtnCounter;
    const isDisabledReset: boolean = counter === startValue || disabledBtnCounter;

    const addNumberInSetCounter = () => {
        setCounter(counter + 1);
    }

    const zeroingCounter = () => {
        setCounter(startValue);
    }

    return (
        <div className={s.counter}>
            <div className={s.counterContainer}>
                <Display
                    counter={counter}
                    maxValue={maxValue}
                    startValue={startValue}
                    disabledValue={disabledValue}
                    disabledBtnCounter={disabledBtnCounter}
                />
                <div className={s.buttonContainer}>
                    <Button disabledButton={isDisabledInc}
                            onClick={addNumberInSetCounter}
                    >
                        incr
                    </Button>
                    <Button disabledButton={isDisabledReset}
                            onClick={zeroingCounter}
                    >
                        rest
                    </Button>
                </div>
            </div>
        </div>
    )
}