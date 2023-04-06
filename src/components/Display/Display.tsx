import React, {FC} from "react";
import d from './Display.module.css'

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

    const displayString = `enter values and press 'set'`;

    const errorMessage = startValue < 0 ? `Incorrect value!`: '' || +maxValue === +startValue ? `Incorrect value!`: '';
    const displayMessage = disabledBtnCounter ? displayString : +counter;

    const errorStyle: string = +counter >= disabledValue ? d.lastValueStyle: '';
    const displayStyle = typeof displayMessage === 'number' ? `${d.display} ${errorStyle}` : `${d.display} ${d.displayString}`;

    return (
        <div className={errorMessage ? `${d.display} ${d.lastValueStyle}` :displayStyle}>{errorMessage ? errorMessage: displayMessage}</div>
    )
}