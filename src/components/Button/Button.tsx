import React, {FC, ReactNode} from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    disabledButton: boolean
    children: ReactNode
    onClick: () => void
}

export const Button: FC<ButtonPropsType> = (props) => {
    const {disabledButton, children, onClick,} = props
    return (
        <button disabled={disabledButton}
                onClick={onClick}
                className={s.button}>
            {children}
        </button>
    )
}