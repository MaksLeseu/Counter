import React, {FC} from "react";
import s from './Display.module.css'

type DisplayPropsType = {
    counter: number
    disabledValue: number
}

export const Display: FC<DisplayPropsType> = (props) => {
    const {counter, disabledValue,} = props


    const errorStyle: string = +counter >= disabledValue ? `${s.display} ${s.lastValueStyle}` : s.display;

    return (
        <div className={errorStyle}>{counter}</div>
    )
}