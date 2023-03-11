import React from "react";
import b from './Button.module.css'

type ButtonPropsType = {
    name: string
    onClick: (name: string) => void
    counter: number
    disabledButton: boolean
}

export function Button(props: ButtonPropsType) {

    return (
        <button disabled={props.disabledButton} onClick={() => props.onClick(props.name)} className={b.button}>{props.name}</button>
    )
}