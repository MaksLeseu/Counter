import React, {FC} from "react";
import {Display} from "./Display/Display";
import {Button} from "../Button/Button";
import s from './Counter.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCounterAC} from "../../reducers/counter-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../reducers/store";


export const Counter = () => {
    const counter = useSelector<AppRootStateType, number>(state => state.counter.counter)
    const startValue = useSelector<AppRootStateType, number>(state => state.settings.startValue)
    const disabledValue = useSelector<AppRootStateType, number>(state => state.counter.disabledValue)

    const dispatch: Dispatch = useDispatch()

    const isDisabledInc: boolean = counter >= disabledValue;
    const isDisabledReset: boolean = counter === startValue;

    const addNumberInSetCounter = () => {
        dispatch(setCounterAC(counter + 1));
    }

    const zeroingCounter = () => {
        dispatch(setCounterAC(startValue));
    }

    return (
        <div className={s.counter}>
            <div className={s.counterContainer}>
                <Display />
                <div className={s.buttonContainer}>
                    <Button disabledButton={isDisabledInc}
                            onClick={addNumberInSetCounter}
                    >
                        incr
                    </Button>
                    <Button disabledButton={isDisabledReset}
                            onClick={zeroingCounter}
                    >
                        rest
                    </Button>
                    <NavLink to={'/settings'}>
                        <Button
                        >
                            set
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}