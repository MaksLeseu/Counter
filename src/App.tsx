import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {

    const [counter, setCounter] = useState<number>(() => {
        return localStorage.getItem('startValue') ? Number(localStorage.getItem('startValue')): 0
    });
    const [maxValue, setMaxValue] = useState<number>(() => {
        return localStorage.getItem('maxValue') ? Number(localStorage.getItem('maxValue')): 5
    })
    const [startValue, setStartValue] = useState<number>(() => {
        return localStorage.getItem('startValue') ? Number(localStorage.getItem('startValue')): 0
    })
    const [disabledValue, setDisabledValue] = useState<number>(() => {
        return localStorage.getItem('maxValue') ? Number(localStorage.getItem('maxValue')): 5
    })
    const [disabledBtnCounter, setDisabledBtnCounter] = useState<boolean>(false)

    return (
        <div className={'container'}>
            <Settings
                maxValue={maxValue}
                startValue={startValue}
                disabledBtnCounter={disabledBtnCounter}

                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                setCounter={setCounter}
                setDisabledValue={setDisabledValue}
                setDisabledBtnCounter={setDisabledBtnCounter}
            />

            <Counter
                counter={counter}
                maxValue={maxValue}
                startValue={startValue}

                disabledBtnCounter={disabledBtnCounter}
                disabledValue={disabledValue}
                setCounter={setCounter}
            />
        </div>
    );
}

export default App;
