import React, {useState} from 'react';
import {CounterValueTable} from "./CounterValueTable";
import {CounterValueButton} from "./CounterValueButton";

type CounterValueType = {
    max: string
    start: string
    setMax: (max: string) => void
    setStart: (start: string) => void
    setLSHandler: () => void
    inputClassStart: string
    inputClassMax: string
}


export const CounterValue = (props:CounterValueType) => {

    return (
        <div>
            <CounterValueTable max={props.max}
                               setMax={props.setMax}
                               start={props.start}
                               setStart={props.setStart}
                               inputClassStart={props.inputClassStart}
                               inputClassMax={props.inputClassMax}/>
            <CounterValueButton max={props.max}
                                setMax={props.setMax}
                                start={props.start}
                                setStart={props.setStart}
                                setLSHandler={props.setLSHandler}/>
        </div>
    );
};

