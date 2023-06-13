import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

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

