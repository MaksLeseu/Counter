import React from "react";
import s from './Display.module.scss'
import {useSelector} from "react-redux";
import {counterValueSelector, disabledValueSelector} from "../../../state/selectors/counter-selectors";
import {colorModeSelector} from "../../../state/selectors/colorMode-selectors";


export const Display = () => {
    const counterValue: number = useSelector(counterValueSelector)
    const disabledValue: number = useSelector(disabledValueSelector)
    const colorMode: string = useSelector(colorModeSelector)

    const displayStyleMode: string = colorMode === 'dark' ? `${s.displayDarkMode} ${s.display}` : s.display
    const errorStyle: string = +counterValue >= disabledValue ? `${displayStyleMode} ${s.lastValueStyle}` : `${displayStyleMode}`;

    return (
        <div className={errorStyle}>{counterValue}</div>
    )
}