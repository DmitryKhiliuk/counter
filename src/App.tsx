import React from 'react';
import './App.css';
import {AppRootStateType, store} from "./state/store";
import {InitialStateType} from "./state/counter-reducer";
import {useSelector} from 'react-redux';
import {CounterMainTable} from "./components/CounterMain/CounterMainTable";
import {CounterMainButton} from "./components/CounterMain/CounterMainButton";
import {CounterValueTable} from "./components/CounterValue/CounterValueTable";
import {CounterValueButton} from "./components/CounterValue/CounterValueButton";


function App() {

    const counter = useSelector<AppRootStateType, InitialStateType>(state => state.counter)

    return (
    <div className="App">

        <div className={'counter'}>
            <CounterValueTable counter={counter}/>
            <CounterValueButton counter={counter}/>
        </div>
        <div className={'counter'}>
            <CounterMainTable counter={counter}/>
            <CounterMainButton counter={counter}/>
        </div>



    </div>
  );
}

export default App;
