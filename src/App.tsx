import React from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import {CounterMainTable} from "./components/CounterMain/CounterMainTable";
import {CounterMainButton} from "./components/CounterMain/CounterMainButton";
import {CounterValueTable} from "./components/CounterValue/CounterValueTable";
import {CounterValueButton} from "./components/CounterValue/CounterValueButton";
import {selectCounter} from "./state/selectors";


function App() {

    const counter = useSelector(selectCounter)

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
