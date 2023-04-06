import React, {FC} from "react";
import d from './Display.module.css'

type DisplayPropsType = {
    counter: number
    disabledValue: number
    disabledBtnCounter: boolean
}

export const Display: FC<DisplayPropsType> = (props) => {
    const {counter, disabledValue, disabledBtnCounter} = props;
    const displayString = `enter values and press 'set'`;
    const displayMessage = disabledBtnCounter ? displayString : Number(counter);

    const errorStyle: string = counter >= disabledValue ? d.lastValueStyle: '';
    const displayStyle = typeof displayMessage === 'number' ? `${d.display} ${errorStyle}` : `${d.display} ${d.displayString}`;

    return (
        <div className={displayStyle}>{displayMessage}</div>
    )
}