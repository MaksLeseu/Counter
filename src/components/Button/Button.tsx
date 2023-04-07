import React, {FC, ReactNode} from "react";
import s from './Button.module.css'

type ButtonPropsType = {
    disabledButton: boolean
    children: ReactNode
    onClick: () => void
}

export const Button: FC<ButtonPropsType> = (
    {
        disabledButton,
        children,
        onClick,
    }
) => {
    return (
        <button disabled={disabledButton}
                onClick={onClick}
                className={s.button}>
            {children}
        </button>
    )
}