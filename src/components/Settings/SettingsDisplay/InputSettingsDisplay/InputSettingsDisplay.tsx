import React, {ChangeEvent, FC} from "react";
import s from './InputSettingsDisplay.module.css'

type InputSettingsDisplayPropsType = {
    value: number
    errorClass: any
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputSettingsDisplay: FC<InputSettingsDisplayPropsType> = (
    {
        value,
        errorClass,
        onChange,
    }
) => {

    return (
        <input
            className={errorClass}
            type={"number"}
            onChange={onChange}
            value={value}
        />
    )
}