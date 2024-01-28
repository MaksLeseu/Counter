import React, {FC, memo, ReactNode} from "react";
import s from './Button.module.scss'
import {Button} from "@mui/material";

type ButtonPropsType = {
    style?: boolean
    disabledButton?: boolean
    children: ReactNode
    onClick?: () => void
}

/*export const Buttons: FC<ButtonPropsType> = memo((props) => {
    console.log(1)
    const {disabledButton, children, onClick, style} = props
    return (
        <div className={s.btn_container}>
            <Button
                variant="contained"
                color="secondary"
                disableElevation

                disabled={disabledButton}
                onClick={onClick}
                className={style ? `${s.button} ${s.buttonSettings}` : `${s.button}`}
            >
                {children}
            </Button>
        </div>
    )
})*/

class Buttons extends React.Component<ButtonPropsType> {
    render() {
        return (
            <div className={s.btn_container}>
                <Button
                    variant="contained"
                    color="secondary"
                    disableElevation

                    disabled={this.props.disabledButton}
                    onClick={this.props.onClick}
                    className={this.props.style ? `${s.button} ${s.buttonSettings}` : `${s.button}`}
                >
                    {this.props.children}
                </Button>
            </div>
        )
    }
}

export default Buttons;

