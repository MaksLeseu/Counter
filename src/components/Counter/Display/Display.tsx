import React from "react";
import s from './Display.module.css'
import {useSelector} from "react-redux";
import {counterValueSelector, disabledValueSelector} from "../../../state/selectors/counter-selectors";



export const Display = () => {
    const counterValue: number = useSelector(counterValueSelector)
    const disabledValue: number = useSelector(disabledValueSelector)

    const errorStyle: string = +counterValue >= disabledValue ? `${s.display} ${s.lastValueStyle}` : s.display;

    return (
        <div className={errorStyle}>{counterValue}</div>
    )
}