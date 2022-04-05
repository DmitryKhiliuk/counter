import React from 'react';
import {CounterValueTable} from "./CounterValueTable";
import {CounterValueButton} from "./CounterValueButton";

type CounterValueType = {
    max: string
    start: string
    setMax: (max: string) => void
    setStart: (start: string) => void
    setLSHandler: () => void
    disabled: boolean
   /* focusInput: () => void*/
    error: boolean
}


export const CounterValue = (props:CounterValueType) => {

    return (
        <div>
            <CounterValueTable max={props.max}
                               setMax={props.setMax}
                               start={props.start}
                               setStart={props.setStart}
                               error={props.error}
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

