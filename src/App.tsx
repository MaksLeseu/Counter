import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {restoreState, saveState} from "./common/localStorage/localStorage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./reducers/store";
import {setCounterAC, setDisabledValueAC} from "./reducers/counter-reducer";
import {Dispatch} from "redux";
import {setMaxValueAC, setStartValueAC} from "./reducers/settings-reducer";

function App() {

    /*const counter = useSelector<AppRootStateType, number>(state => state.counter.counter)
    const maxValue = useSelector<AppRootStateType, number>(state => state.settings.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.settings.startValue)
    const disabledValue = useSelector<AppRootStateType, number>(state => state.counter.disabledValue)*/

    const dispatch: Dispatch = useDispatch()


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
                        <Counter />
                    } />
                    <Route path={'/settings'} element={
                        <Settings
                            saveValueInLocalStorage={saveValueInLocalStorage}
                        />
                    } />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

