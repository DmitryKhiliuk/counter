import React from 'react';
import {CounterValueTable} from "./CounterValueTable";
import {CounterValueButton} from "./CounterValueButton";
import {InitialStateType} from "../../state/counter-reducer";

type CounterValueType = {
    max: string
    start: string
    setMax: (max: string) => void
    setStart: (start: string) => void
    setLSHandler: () => void
    disabled: boolean
   /* focusInput: () => void*/
    error: boolean
    counter: InitialStateType
}


export const CounterValue = (props:CounterValueType) => {

    return (
        <div className={'counter'}>
            <CounterValueTable max={props.max}
                               setMax={props.setMax}
                               start={props.start}
                               setStart={props.setStart}
                               error={props.error}
                               counter={props.counter}
                               /*focusInput={props.focusInput}*//>
            <CounterValueButton max={props.max}
                                setMax={props.setMax}
                                start={props.start}
                                setStart={props.setStart}
                                setLSHandler={props.setLSHandler}
                                disabled={props.disabled}
                                error={props.error}/>
        </div>
    );
};

