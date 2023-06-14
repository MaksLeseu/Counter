import React, {ChangeEvent, FC, memo} from "react";
import {makeStyles, TextField} from "@mui/material";
import s from './InputSettingsDisplay.module.css'

type InputSettingsDisplayPropsType = {
    inputStyles: any
    value: number
    errorClass: string
    label: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}


export const InputSettingsDisplay: FC<InputSettingsDisplayPropsType> = memo((props) => {
    const {value, errorClass, onChange, label, inputStyles} = props

    return (
        /*<input
            className={errorClass}
            type={"number"}
            onChange={onChange}
            value={value}
        />*/
        <div className={s.inputField}>
            <TextField
                fullWidth
                id="filled-hidden-label-small"
                /*defaultValue="Small"*/
                color="secondary"
                label={label}
                variant="filled"
                size="small"
                InputProps={{
                    style: {
                        color: 'black',
                        backgroundColor: 'var(--input-background)',
                        boxShadow: '1px 1px 2px black',
                    },
                }}
                InputLabelProps={{
                    style: {
                        color: '#999',
                    },
                }}


                className={errorClass}
                type={"number"}
                value={value}
                onChange={onChange}
                inputProps={{ style: inputStyles }}
            >
            </TextField>
        </div>
    )
})