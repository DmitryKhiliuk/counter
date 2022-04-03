import React, {useState} from 'react';
import {Input} from "./Input";

type CounterValueTableType = {
    max: string
    start: string
    setMax: (max: string) => void
    setStart: (start: string) => void
}


export const CounterValueTable = (props:CounterValueTableType) => {


    return (
        <div>
            <Input nameInput={'max value'} callBackInput={props.setMax} value={props.max}/>
            <Input nameInput={'start value'} callBackInput={props.setStart} value={props.start}/>
        </div>
    );
};

