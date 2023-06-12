import React, {FC} from "react";
import s from './Display.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";
import {counterValueSelector, disabledValueSelector} from "../../../state/selectors/counter-selectors";



export const Display = () => {
    const counterValue = useSelector<AppRootStateType, number>(counterValueSelector)
    const disabledValue = useSelector<AppRootStateType, number>(disabledValueSelector)


    const errorStyle: string = +counterValue >= disabledValue ? `${s.display} ${s.lastValueStyle}` : s.display;

    return (
        <div className={errorStyle}>{counterValue}</div>
    )
}