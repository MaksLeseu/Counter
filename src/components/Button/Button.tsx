import React, {FC, memo, ReactNode} from "react";
import s from './Button.module.css'
import {Button} from "@mui/material";

type ButtonPropsType = {
    disabledButton?: boolean
    children: ReactNode
    onClick?: () => void
}

export const Buttons: FC<ButtonPropsType> = memo((props) => {
    const {disabledButton, children, onClick,} = props
    return (
        <div className={s.btn_container}>
            <Button
                variant="contained"
                color="secondary"
                disableElevation

                disabled={disabledButton}
                onClick={onClick}
                className={s.button}
            >
                {children}
            </Button>
        </div>
    )
})