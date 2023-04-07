import React, {ChangeEvent, FC} from "react";

type InputSettingsDisplayPropsType = {
    value: number
    errorClass: string
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