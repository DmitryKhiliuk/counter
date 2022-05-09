import React from 'react';
import {CounterValueTable} from "./CounterValueTable";
import {CounterValueButton} from "./CounterValueButton";
import {InitialStateType} from "../../state/counter-reducer";

type CounterValueType = {

    counter: InitialStateType
}


export const CounterValue = (props:CounterValueType) => {

    return (
        <div className={'counter'}>
            <CounterValueTable
                               counter={props.counter}
                               /*focusInput={props.focusInput}*//>
            <CounterValueButton
                                counter={props.counter}/>
        </div>
    );
};

