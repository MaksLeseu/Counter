import React, {useCallback, useEffect} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {restoreState, saveState} from "./common/localStorage/localStorage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCounterAC, setDisabledValueAC} from "./reducers/counter-reducer";
import {Dispatch} from "redux";
import {setMaxValueAC, setStartValueAC} from "./reducers/settings-reducer";

function App() {
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

