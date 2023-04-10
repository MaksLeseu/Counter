import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {restoreState, saveState} from "./common/localStorage/localStorage";

function App() {
    const [counter, setCounter] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [disabledValue, setDisabledValue] = useState<number>(5)
    const [disabledBtnCounter, setDisabledBtnCounter] = useState<boolean>(false)

    const saveValueInLocalStorage = (maxValue: number, startValue: number) => {
        saveState<number>('maxValue', maxValue)
        saveState<number>('startValue', startValue)
    }

    useEffect(() => {
        setMaxValue(restoreState<number>('maxValue', 5))
        setDisabledValue(restoreState<number>('maxValue', 5))
        setStartValue(restoreState<number>('startValue', 0))
        setCounter(restoreState<number>('startValue', 0))
    }, [])

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
                saveValueInLocalStorage={saveValueInLocalStorage}
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
