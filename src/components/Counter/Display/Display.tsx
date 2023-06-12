import React, {FC} from "react";
import s from './Display.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../reducers/store";



export const Display = () => {
    const counter = useSelector<AppRootStateType, number>(state => state.counter.counter)
    const disabledValue = useSelector<AppRootStateType, number>(state => state.counter.disabledValue)


    const errorStyle: string = +counter >= disabledValue ? `${s.display} ${s.lastValueStyle}` : s.display;

    return (
        <div className={errorStyle}>{counter}</div>
    )
}