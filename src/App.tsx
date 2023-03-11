import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {Button} from "./components/Button/Button";

function App() {

    let [counter, setCounter] = useState<number>(0);
    let disabledInc: boolean = counter === 5;
    let disabledRest: boolean = counter === 0;

    function onClickButton(name: string) {
        if (name === 'inc') setCounter(counter + 1);
        if (name === 'rest')  setCounter(0);
    }

  return (
    <div className="container">
        <Display counter={counter} />
        <Button disabledButton={disabledInc} onClick={onClickButton} name={'inc'} counter={counter} />
        <Button disabledButton={disabledRest} onClick={onClickButton} name={'rest'} counter={counter} />
    </div>
  );
}

export default App;
