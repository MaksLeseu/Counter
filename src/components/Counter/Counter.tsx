import React, {useCallback} from "react";
import {Display} from "./Display/Display";
import {Button} from "../Button/Button";
import s from './Counter.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCounterAC} from "../../state/reducers/counter-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../state/store";
import {counterValueSelector, disabledValueSelector} from "../../state/selectors/counter-selectors";
import {startValueSelector} from "../../state/selectors/settings-selectors";


export const Counter = () => {

    const counterValue = useSelector<AppRootStateType, number>(counterValueSelector)
    const startValue = useSelector<AppRootStateType, number>(startValueSelector)
    const disabledValue = useSelector<AppRootStateType, number>(disabledValueSelector)

    const dispatch: Dispatch = useDispatch()

    const isDisabledInc: boolean = counterValue >= disabledValue;
    const isDisabledReset: boolean = counterValue === startValue;

    const addNumberInSetCounter = () => {
        dispatch(setCounterAC(counterValue + 1));
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