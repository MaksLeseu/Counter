import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {Button} from "./components/Button/Button";

function App() {

    const [counter, setCounter] = useState<number>(0);
    const isDisabledInc: boolean = counter >= 5;
    const isDisabledReset: boolean = counter === 0;

    const addNumberInSetCounter = () => {
        setCounter(counter + 1);
    }

    const zeroingCounter = () => {
        setCounter(0);
    }


    return (
        <div className="container">
            <div className={'counter'}>
                <div className={'counterContainer'}>
                    <Display counter={counter}/>
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
                </div>
            </div>
        </div>
    );
}

export default App;
