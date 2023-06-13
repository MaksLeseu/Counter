import React, {ChangeEvent, FC, memo, useCallback} from "react";
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCounterAC, setDisabledValueAC} from "../../state/reducers/counter-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../state/store";
import {maxValueSelector, startValueSelector} from "../../state/selectors/settings-selectors";
import {setMaxValueAC, setStartValueAC} from "../../state/reducers/settings-reducer";
import {InputSettingsDisplay} from "./SettingsDisplay/InputSettingsDisplay/InputSettingsDisplay";

type SettingsPropsType = {
    saveValueInLocalStorage: (maxValue: number, startValue: number) => void
}

export const Settings: FC<SettingsPropsType> = memo((props) => {
    const {saveValueInLocalStorage,} = props

    const maxValue = useSelector<AppRootStateType, number>(maxValueSelector)
    const startValue = useSelector<AppRootStateType, number>(startValueSelector)

    const dispatch: Dispatch = useDispatch()

    const startValueLessThanZero = startValue < 0;
    const checkingMaxValueAndStartValue = maxValue === startValue || startValue > maxValue

    const setSettingsValue = () => {
        dispatch(setDisabledValueAC(maxValue))
        dispatch(setCounterAC(startValue))
        saveValueInLocalStorage(maxValue, startValue)
    }

    const errorClassEqualValues = checkingMaxValueAndStartValue ? `${s.value} ${s.errorValue}`: `${s.value}`;
    const errorClassStartValue = startValueLessThanZero || checkingMaxValueAndStartValue ? `${s.value} ${s.errorValue}`: `${s.value}`;

    const setInputMaxValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
    }, [dispatch])

    const setInputStartValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(+e.currentTarget.value))
    }, [dispatch])

    return (
        <div className={s.settings}>
            <div className={s.settingsContainer}>
                {/*<SettingsDisplay
                    startValueLessThanZero={startValueLessThanZero}
                    checkingMaxValueAndStartValue={checkingMaxValueAndStartValue}
                />*/}
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
                <div className={s.buttonContainer}>
                    <NavLink to={'/'}>
                        <Button disabledButton={startValueLessThanZero || checkingMaxValueAndStartValue}
                                onClick={setSettingsValue}
                        >
                            set
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
})