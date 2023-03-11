import React from "react";
import d from './Display.module.css'

type DisplayPropsType = {
    counter: number
}

export function Display(props: DisplayPropsType) {

    let classDisplay = d.display + (props.counter === 5 ? ' ' + d.display__five: '');

    return (
        <div className={classDisplay}>{props.counter}</div>
    )
}