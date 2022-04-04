import React, {useState} from 'react';
import {Input} from "./Input";

type CounterValueTableType = {
    max: string
    start: string
    setMax: (max: string) => void
    setStart: (start: string) => void
    inputClassStart: string
    inputClassMax: string
    focusInput: () => void
}


export const CounterValueTable = (props:CounterValueTableType) => {




    return (
        <div>
            <Input nameInput={'max value'}
                   callBackInput={props.setMax}
                   value={props.max}
                   inputClass={props.inputClassMax}
                   callBackFocus={props.focusInput}/>
            <Input nameInput={'start value'}
                   callBackInput={props.setStart}
                   value={props.start}
                   inputClass={props.inputClassStart}
                   callBackFocus={props.focusInput}/>
        </div>
    );
};

