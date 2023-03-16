import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {Button} from "./components/Button/Button";

function App() {

    const [counter, setCounter] = useState<number>(() => {
        return localStorage.getItem('counterValue')? Number(localStorage.getItem('counterValue')): 0
    });
    const disabledInc: boolean = counter >= 5;
    const disabledRest: boolean = counter === 0;

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter));
    },[counter])

    const incrButton = () => {
        setCounter(counter + 1);
    }

    const restButton = () => {
        setCounter(0);
    }

    return (
        <div className="container">
            <div className={'counter'}>
                <div className={'counter__container'}>
                    <Display counter={counter}/>
                    <Button disabledButton={disabledInc}
                            onClick={incrButton}
                    >
                        incr
                    </Button>
                    <Button disabledButton={disabledRest}
                            onClick={restButton}
                    >
                        rest
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
