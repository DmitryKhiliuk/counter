import React, {useEffect} from 'react';
import {Input} from "./Input";
import {useDispatch} from "react-redux";
import {addMaxValueAC, addMinValueAC, InitialStateType, PresentValueAC} from "../../state/counter-reducer";

type CounterValueTableType = {

    counter: InitialStateType
    /*focusInput: () => void*/
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




    return (
        <div className={'counter__table'}>
            <Input nameInput={'max value'}
                   callBackInput={addMaxValue}
                   value={props.counter.maxValue}
                   inputClass={props.counter.error && +props.counter.minValue >= +props.counter.maxValue?'error':'input'}
                   /*callBackFocus={props.focusInput}*//>
            <Input nameInput={'start value'}
                   callBackInput={addMinValue}
                   value={props.counter.minValue}
                   inputClass={props.counter.error?'error':'input'}
                   /*callBackFocus={props.focusInput}*//>
        </div>
    );
};

