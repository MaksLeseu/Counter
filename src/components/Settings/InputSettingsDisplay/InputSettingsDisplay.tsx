import React, {FC, memo} from "react";
import {TextField, IconButton, InputAdornment} from "@mui/material";
import s from './InputSettingsDisplay.module.scss'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type InputSettingsDisplayPropsType = {
    value: number
    label: string
    disabledIncrement?: boolean
    disabledDecrement: boolean
    onClick: (value: string) => void
    onChange: (event: number) => void
}


/*export const _InputSettingsDisplay: FC<InputSettingsDisplayPropsType> = memo((props) => {
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
                    sx: {
                        textAlign: 'center',
                        paddingLeft: '123px',
                    }
                }}

                className={s.input}
                type={"number"}
                value={value}
                onChange={(event) => onChange(+event.target.value)}
            >
            </TextField>
        </div>
    )
})*/

class InputSettingsDisplay extends React.Component<InputSettingsDisplayPropsType>{
    render() {
        return (
            <div className={s.inputField}>
                <TextField
                    fullWidth
                    focused={false}
                    id="filled-hidden-label-small"
                    margin="dense"
                    label={this.props.label}
                    variant="outlined"
                    size="small"
                    InputProps={{
                        readOnly: true,
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    size="small"
                                    disabled={this.props.disabledIncrement}
                                    onClick={() => this.props.onClick('increment')}
                                >
                                    <AddIcon />
                                </IconButton>
                                <IconButton
                                    size="small"
                                    disabled={this.props.disabledDecrement}
                                    onClick={() => this.props.onClick('decrement')}
                                >
                                    <RemoveIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                        sx: {
                            textAlign: 'center',
                            paddingLeft: '123px',
                        }
                    }}

                    className={s.input}
                    type={"number"}
                    value={this.props.value}
                    onChange={(event) => this.props.onChange(+event.target.value)}
                >
                </TextField>
            </div>
        )
    }
}

export default InputSettingsDisplay;