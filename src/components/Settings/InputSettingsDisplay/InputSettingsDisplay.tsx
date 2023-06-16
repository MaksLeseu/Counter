import React, {FC, memo} from "react";
import {TextField, IconButton, InputAdornment} from "@mui/material";
import s from './InputSettingsDisplay.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type InputSettingsDisplayPropsType = {
    value: number
    label: string
    disabledIncrement?: boolean
    disabledDecrement: boolean
    onClick: (value: string) => void
    onChange: any
}


export const InputSettingsDisplay: FC<InputSettingsDisplayPropsType> = memo((props) => {
    const {value, onChange, label, disabledIncrement, disabledDecrement, onClick} = props

    return (
        <div className={s.inputField}>
            <TextField
                fullWidth
                focused={false}
                id="filled-hidden-label-small"
                margin="dense"
                label={label}
                variant="outlined"
                size="small"
                InputProps={{
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                size="small"
                                disabled={disabledIncrement}
                                onClick={() => onClick('increment')}
                            >
                                <AddIcon />
                            </IconButton>
                            <IconButton
                                size="small"
                                disabled={disabledDecrement}
                                onClick={() => onClick('decrement')}
                            >
                                <RemoveIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}

                type={"number"}
                value={value}
                onChange={onChange}
                inputProps={{ style: {
                        fontSize: '24px',
                        textAlign: 'center',
                        paddingLeft: '90px',
                    } }}
            >
            </TextField>
        </div>
    )
})