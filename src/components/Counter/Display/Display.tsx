import React from "react";
import s from './Display.module.css'
import {useSelector} from "react-redux";
import {counterValueSelector, disabledValueSelector} from "../../../state/selectors/counter-selectors";
import {darkModeSelector} from "../../../state/selectors/darkMode-selectors";
import {DisplayCustomized} from "../../../common/Theme/GlobalTheme";


export const Display = () => {
    const counterValue: number = useSelector(counterValueSelector)
    const disabledValue: number = useSelector(disabledValueSelector)
    const isDarkMode: boolean = useSelector(darkModeSelector)

    const displayStyleMode: string = isDarkMode ? s.displayDarkMode : s.display
    const errorStyle: string = +counterValue >= disabledValue ? `${displayStyleMode} ${s.lastValueStyle}` : `${displayStyleMode}`;

    return (
        /*<div className={errorStyle}>{counterValue}</div>*/
        <DisplayCustomized
            sx={{
                width: 300,
                height: 110,
                marginBottom: '35px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '50px',
                borderRadius: '5px',
            }}
        >
            {counterValue}</DisplayCustomized>
    )
}