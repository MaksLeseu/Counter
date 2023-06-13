import React, {ChangeEvent, FC, memo, useCallback} from "react";
import s from './SettingsDisplay.module.css'
import {InputSettingsDisplay} from "./InputSettingsDisplay/InputSettingsDisplay";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {setMaxValueAC, setStartValueAC} from "../../../state/reducers/settings-reducer";
import {AppRootStateType} from "../../../state/store";
import {maxValueSelector, startValueSelector} from "../../../state/selectors/settings-selectors";

type SettingsDisplayPropsType = {
    startValueLessThanZero: boolean
    checkingMaxValueAndStartValue: boolean
}

export const SettingsDisplay: FC<SettingsDisplayPropsType> = memo((props) => {
    const {startValueLessThanZero, checkingMaxValueAndStartValue,} = props

    const maxValue = useSelector<AppRootStateType, number>(maxValueSelector)
    const startValue = useSelector<AppRootStateType, number>(startValueSelector)

    const dispatch: Dispatch = useDispatch()

    const errorClassEqualValues = checkingMaxValueAndStartValue ? `${s.value} ${s.errorValue}`: `${s.value}`;
    const errorClassStartValue = startValueLessThanZero || checkingMaxValueAndStartValue ? `${s.value} ${s.errorValue}`: `${s.value}`;

    const setInputMaxValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
    }, [dispatch])

    const setInputStartValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(+e.currentTarget.value))
    }, [dispatch])

    return (
        <div className={s.settingsDisplay}>
            <div className={s.containerValue}>
                <p>max value:</p>
                <InputSettingsDisplay
                    value={maxValue}
                    errorClass={errorClassEqualValues}
                    onChange={setInputMaxValue}
                />
            </div>
            <div className={s.containerValue}>
                <p>start value:</p>
                <InputSettingsDisplay
                    value={startValue}
                    errorClass={errorClassStartValue}
                    onChange={setInputStartValue}
                />
            </div>
        </div>
    )
})