import React, {ChangeEvent, FC, memo, useState} from "react";
import {makeStyles, TextField, IconButton, InputAdornment} from "@mui/material";
import s from './InputSettingsDisplay.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type InputSettingsDisplayPropsType = {
    inputStyles: any
    value: number
    errorClass: string
    label: string
    /*onChange: (e: ChangeEvent<HTMLInputElement>) => void*/
    onChange: any
}


export const InputSettingsDisplay: FC<InputSettingsDisplayPropsType> = memo((props) => {
    const {value, errorClass, onChange, label, inputStyles} = props

    const handleIncrement = () => {
        onChange(value + 1)
    };

    const handleDecrement = () => {
        onChange(value - 1)
    };

    return (
        <div className={s.inputField}>
            <TextField
                fullWidth
                id="filled-hidden-label-small"
                margin="dense"
                color="secondary"
                label={label}
                variant="outlined"
                size="small"
                InputProps={{
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleIncrement} size="small">
                                <AddIcon />
                            </IconButton>
                            <IconButton onClick={handleDecrement} size="small">
                                <RemoveIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
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