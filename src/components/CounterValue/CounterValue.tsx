import React, {useState} from 'react';
import {CounterValueTable} from "./CounterValueTable";
import {CounterValueButton} from "./CounterValueButton";

type CounterValueType = {
    max: string
    start: string
    setMax: (max: string) => void
    setStart: (start: string) => void
    setLSHandler: () => void
}


export const CounterValue = (props:CounterValueType) => {

    return (
        <div>
            <CounterValueTable max={props.max} setMax={props.setMax} start={props.start} setStart={props.setStart} />
            <CounterValueButton max={props.max} setMax={props.setMax} start={props.start} setStart={props.setStart} setLSHandler={props.setLSHandler}/>
        </div>
    );
};

