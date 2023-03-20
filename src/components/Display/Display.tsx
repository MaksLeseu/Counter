import React from "react";
import d from './Display.module.css'

type DisplayPropsType = {
    counter: number
}

export function Display(props: DisplayPropsType) {
    const {counter} = props;

    const errorStyle: string = counter >= 5 ? d.lastValueStyle: '';
    const displayStyle = `${d.display} ${errorStyle}`;

    return (
        <div className={displayStyle}>{counter}</div>
    )
}