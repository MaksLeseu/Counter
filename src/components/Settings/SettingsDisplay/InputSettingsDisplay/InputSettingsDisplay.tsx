import React, {ChangeEvent, FC, memo} from "react";

type InputSettingsDisplayPropsType = {
    value: number
    errorClass: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputSettingsDisplay: FC<InputSettingsDisplayPropsType> = memo((props) => {
    const {value, errorClass, onChange,} = props

    return (
        <input
            className={errorClass}
            type={"number"}
            onChange={onChange}
            value={value}
        />
    )
})