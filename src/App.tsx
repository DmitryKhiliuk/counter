import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterValue} from "./components/CounterValue/CounterValue";
import {CounterMain} from "./components/CounterMain/CounterMain";
import {AppRootStateType, store} from "./state/store";
import {errorAC, InitialStateType} from "./state/counter-reducer";
import {useDispatch, useSelector} from 'react-redux';


function App() {

    /*const [max, setMax] = useState('5')
    const [start, setStart] = useState('0')
    const [numb, setNumb] = useState<number>(0)
    const [isDisabled, setIsDisabled] = useState(true)
    const [error, setError] = useState(false)
    const [active, setActive] = useState(true)
*/

    const counter = useSelector<AppRootStateType, InitialStateType>(state => state.counter)
    const dispatch = useDispatch()


   /* const errorStart = () => {
      if (+start < 0 || +start >= +max) {
          setError(true)
      } else {setError(false)}
    }
    useEffect(() => {
        errorStart()
    },[start, max])
*/
    const errorStart = () => {
         dispatch((+counter.minValue < 0 || +counter.minValue >= +counter.maxValue) ? errorAC(true) : errorAC(false))
    }

    useEffect(() => {
        errorStart()
    },[counter.minValue, counter.maxValue])


    /*useEffect(() => {
        setIsDisabled( false)
        setActive(true)
    },[start,max])*/

    /*const focusInput = () => {
        setFocus(true)
    }*/

    /*const numbInc = () => {
        return numb < +max ? setNumb(numb + 1) : numb
    }

    const numbReset = () => setNumb(+start)*/

    /*useEffect(() => {
        let maxAsString = localStorage.getItem('max')
        if (maxAsString) {
            let newMax = JSON.parse(maxAsString)
            setMax(newMax)}
    }, [])
    useEffect(() => {
        let startAsString = localStorage.getItem('start')
        if (startAsString) {
            let newStart = JSON.parse(startAsString)
            setStart(newStart)}
    }, [])*/

    /*const setLSHandler = () => {
      localStorage.setItem('max', max)
      localStorage.setItem('start', start)
        setNumb(+start)
        setIsDisabled(true)
        setActive(false)
    }*/

    console.log(store.getState())



    return (
    <div className="App">

        <CounterValue counter={counter}/>
        <CounterMain counter={counter}/>

    </div>
  );
}

export default App;
