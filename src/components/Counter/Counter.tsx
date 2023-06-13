import React, {useEffect} from "react";
import {Display} from "./Display/Display";
import {Button} from "../Button/Button";
import s from './Counter.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCounterAC, setDisabledValueAC} from "../../state/reducers/counter-reducer";
import {Dispatch} from "redux";
import {counterValueSelector, disabledValueSelector} from "../../state/selectors/counter-selectors";
import {startValueSelector} from "../../state/selectors/settings-selectors";
import {setMaxValueAC, setStartValueAC} from "../../state/reducers/settings-reducer";
import {restoreState} from "../../common/localStorage/localStorage";


export const Counter = () => {

    const counterValue: number = useSelector(counterValueSelector)
    const startValue: number = useSelector(startValueSelector)
    const disabledValue: number = useSelector(disabledValueSelector)

    const dispatch: Dispatch = useDispatch()

    const isDisabledInc: boolean = counterValue >= disabledValue;
    const isDisabledReset: boolean = counterValue === startValue;

    const addNumberInSetCounter = (): void => {
        dispatch(setCounterAC(counterValue + 1));
    }

    const zeroingCounter = (): void => {
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