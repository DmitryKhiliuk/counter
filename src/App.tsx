import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterValue} from "./components/CounterValue/CounterValue";
import {CounterMain} from "./components/CounterMain/CounterMain";


function App() {

    const [max, setMax] = useState('5')
    const [start, setStart] = useState('0')
    const [numb, setNumb] = useState<number>(+start)
    const [focus, setFocus] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        setIsDisabled( false)

    },[start,max])

    const focusInput = () => {
        setFocus(true)
    }

    const numbInc = () => {
        return numb < +max ? setNumb(numb + 1) : numb
    }

    const numbReset = () => setNumb(+start)




    useEffect(() => {
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
    }, [])




    const setLSHandler = () => {
      localStorage.setItem('max', max)
      localStorage.setItem('start', start)
        setNumb(+start)
        setIsDisabled(true)
        console.log('INC BUTTON', isDisabled)
    }


    console.log(isDisabled)
  return (
    <div className="App">

        <CounterValue max={max}
                      setMax={setMax}
                      start={start}
                      setStart={setStart}
                      setLSHandler={setLSHandler}
                      disabled={isDisabled}
                      focusInput={focusInput}/>
        <CounterMain numbInc={numbInc}
                     numbReset={numbReset}
                     numb={numb}
                     start={start}
                     max={max}
                     disabled={!isDisabled}
                     focus={focus}/>

    </div>
  );
}

export default App;
