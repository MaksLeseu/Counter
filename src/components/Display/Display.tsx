import React, {FC} from "react";
import s from './Display.module.css'

type DisplayPropsType = {
    counter: number
    maxValue: number
    startValue: number

    disabledValue: number
    disabledBtnCounter: boolean
}

export const Display: FC<DisplayPropsType> = (
    {
        counter,
        maxValue,
        startValue,
        disabledValue,
        disabledBtnCounter,
    }
 ) => {

    const displayMessagePressSet = `enter values and press 'set'`;

    const errorMessage = startValue < 0 ? `Incorrect value!`: '' || +maxValue === +startValue || +startValue > +maxValue ? `Incorrect value!`: '';
    const displayMessage = disabledBtnCounter ? displayMessagePressSet : +counter;

    const errorStyle: string = +counter >= disabledValue ? s.lastValueStyle: '';
    const displayStyle = typeof displayMessage === 'number' ? `${s.display} ${errorStyle}` : `${s.display} ${s.displayMessageStyle}`;

    return (
        <div className={errorMessage ? `${s.display} ${s.lastValueStyle}` :displayStyle}>{errorMessage ? errorMessage: displayMessage}</div>
    )
}