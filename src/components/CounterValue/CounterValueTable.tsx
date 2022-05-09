import React, {useEffect} from 'react';
import {Input} from "./Input";
import {useDispatch} from "react-redux";
import {addMaxValueAC, addMinValueAC, errorAC, InitialStateType, PresentValueAC} from "../../state/counter-reducer";


type CounterValueTableType = {

    counter: InitialStateType
}


export const CounterValueTable = (props:CounterValueTableType) => {

    const dispatch = useDispatch()

    const addMaxValue = (maxValue: string) => {
      dispatch(addMaxValueAC(maxValue))
    }

    const addMinValue = (minValue: string) => {
        dispatch(addMinValueAC(minValue))
    }

    const updateValue = (minValue: string) => {
        dispatch( PresentValueAC(minValue, false, true))
    }

    useEffect(() => {
        updateValue(props.counter.minValue)
    },[props.counter.minValue,props.counter.maxValue])

    const errorStart = () => {
        dispatch((+props.counter.minValue < 0 || +props.counter.minValue >= +props.counter.maxValue) ? errorAC(true) : errorAC(false))
    }

    useEffect(() => {
        errorStart()
    },[props.counter.minValue, props.counter.maxValue])


    return (
        <div className={'counter__table'}>
            <Input nameInput={'max value'}
                   callBackInput={addMaxValue}
                   value={props.counter.maxValue}
                   inputClass={props.counter.error && +props.counter.minValue >= +props.counter.maxValue?'error':'input'}/>
            <Input nameInput={'start value'}
                   callBackInput={addMinValue}
                   value={props.counter.minValue}
                   inputClass={props.counter.error?'error':'input'}/>
        </div>
    );
};

