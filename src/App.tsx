import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {restoreState, saveState} from "./common/localStorage/localStorage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./reducers/store";
import {setCounterAC, setDisabledValueAC, setMaxValueAC, setStartValueAC} from "./reducers/counter-reducer";

function App() {
    /*const [counter, setCounter] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [disabledValue, setDisabledValue] = useState<number>(5)*/

    const counter = useSelector<AppRootStateType>(state => state.counter.counter)
    const maxValue = useSelector<AppRootStateType>(state => state.counter.maxValue)
    const startValue = useSelector<AppRootStateType>(state => state.counter.startValue)
    const disabledValue = useSelector<AppRootStateType>(state => state.counter.disabledValue)

    const dispatch = useDispatch()


    const saveValueInLocalStorage = (maxValue: number, startValue: number) => {
        saveState<number>('maxValue', maxValue)
        saveState<number>('startValue', startValue)
    }

    useEffect(() => {
        dispatch(setMaxValueAC(restoreState<number>('maxValue', 5)))
        dispatch(setDisabledValueAC(restoreState<number>('maxValue', 5)))
        dispatch(setStartValueAC(restoreState<number>('startValue', 0)))
        dispatch(setCounterAC(restoreState<number>('startValue', 0)))
    }, [])

    return (
        <BrowserRouter>
            <div className={'container'}>
                <Routes>
                    <Route path={'/'} element={
                        <Counter
                        counter={counter}
                        startValue={startValue}

                        disabledValue={disabledValue}
                        setCounter={setCounter}
                    />
                    } />
                    <Route path={'/settings'} element={
                        <Settings
                            maxValue={maxValue}
                            startValue={startValue}

                            setMaxValue={setMaxValue}
                            setStartValue={setStartValue}
                            setCounter={setCounter}
                            setDisabledValue={setDisabledValue}
                            saveValueInLocalStorage={saveValueInLocalStorage}
                        />
                    } />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

