import React, {FC} from "react";
import {Display} from "./Display/Display";
import {Button} from "../Button/Button";
import s from './Counter.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCounterAC} from "../../reducers/counter-reducer";

type CounterPropsType = {
    counter: number
    startValue: number

    disabledValue: number
}

export const Counter: FC<CounterPropsType> = (props) => {
    const {counter, startValue, disabledValue,} = props
    const dispatch = useDispatch()

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
                <Display
                    counter={counter}
                    disabledValue={disabledValue}
                />
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