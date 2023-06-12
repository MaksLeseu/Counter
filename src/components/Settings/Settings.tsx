import React, {FC, memo, useCallback} from "react";
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCounterAC, setDisabledValueAC} from "../../reducers/counter-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../reducers/store";

type SettingsPropsType = {
    saveValueInLocalStorage: (maxValue: number, startValue: number) => void
}

export const Settings: FC<SettingsPropsType> = memo((props) => {
    const {saveValueInLocalStorage,} = props

    const maxValue = useSelector<AppRootStateType, number>(state => state.settings.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.settings.startValue)

    const dispatch: Dispatch = useDispatch()

    const startValueLessThanZero = startValue < 0;
    const checkingMaxValueAndStartValue = maxValue === startValue || startValue > maxValue

    const setSettingsValue = () => {
        dispatch(setDisabledValueAC(maxValue))
        dispatch(setCounterAC(startValue))
        saveValueInLocalStorage(maxValue, startValue)
    }

    return (
        <div className={s.settings}>
            <div className={s.settingsContainer}>
                <SettingsDisplay
                    startValueLessThanZero={startValueLessThanZero}
                    checkingMaxValueAndStartValue={checkingMaxValueAndStartValue}
                />
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