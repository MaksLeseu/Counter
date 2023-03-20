import React, {FC, ReactNode} from "react";
import b from './Button.module.css'

type ButtonPropsType = {
    onClick: () => void
    disabledButton: boolean
    children: ReactNode
}

export const Button: FC<ButtonPropsType> = (props) => {
    const {children, disabledButton, onClick} = props;
    return (
        <button disabled={disabledButton}
                onClick={onClick}
                className={b.button}>
            {children}
        </button>
    )
}