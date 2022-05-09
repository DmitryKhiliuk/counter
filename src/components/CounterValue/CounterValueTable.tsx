import React from 'react';
import {Input} from "./Input";
import {useDispatch} from "react-redux";
import {addMaxValueAC, addMinValueAC, InitialStateType} from "../../state/counter-reducer";

type CounterValueTableType = {
    max: string
    start: string
    setMax: (max: string) => void
    setStart: (start: string) => void
    error: boolean
    counter: InitialStateType
    /*focusInput: () => void*/
}


export const CounterValueTable = (props:CounterValueTableType) => {

    const dispatch = useDispatch()

    const addMaxValue = (maxValue: string) => {
      dispatch(addMaxValueAC(maxValue))
    }

    const addMinValue = (maxValue: string) => {
        dispatch(addMinValueAC(maxValue))
    }


    return (
        <div className={'counter__table'}>
            <Input nameInput={'max value'}
                   callBackInput={addMaxValue}
                   value={props.counter.maxValue}
                   inputClass={props.error && +props.start >= +props.max?'error':'input'}
                   /*callBackFocus={props.focusInput}*//>
            <Input nameInput={'start value'}
                   callBackInput={addMinValue}
                   value={props.counter.minValue}
                   inputClass={props.error?'error':'input'}
                   /*callBackFocus={props.focusInput}*//>
        </div>
    );
};

