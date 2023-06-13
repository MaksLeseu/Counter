import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {setMaxValueAC, setStartValueAC} from "./state/reducers/settings-reducer";
import {restoreState} from "./common/localStorage/localStorage";
import {setCounterAC, setDisabledValueAC} from "./state/reducers/counter-reducer";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";

function App() {

    const dispatch: Dispatch = useDispatch()

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
                        <Settings />
                    } />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

