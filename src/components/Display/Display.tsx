import React, {FC} from "react";
import d from './Display.module.css'

type DisplayPropsType = {
    counter: number
    disabledValue: number
    disabledBtnCounter: boolean
}

export const Display: FC<DisplayPropsType> = (props) => {
    const {counter, disabledValue, disabledBtnCounter} = props;

    const errorStyle: string = counter >= disabledValue ? d.lastValueStyle: '';
    const displayStyle = `${d.display} ${errorStyle}`;

    return (
        <div className={displayStyle}>{disabledBtnCounter ? 'enter values and press set' : counter}</div>
    )
}