import React from 'react';
import {CounterMainTable} from "./CounterMainTable";
import {CounterMainButton} from "./CounterMainButton";


type CounterMainType = {
    numbInc: () => void
    numbReset: () => void
    numb: number
    start: string
    max: string
    disabled: boolean
    focus: boolean
    error: boolean
}



export const CounterMain = (props:CounterMainType) => {



    return (
        <div>
            <CounterMainTable numb={props.numb}
                              start={props.start}
                              max={props.max}
                              focus={props.focus}/>
            <CounterMainButton numbInc={props.numbInc}
                               numbReset={props.numbReset}
                              disabled={props.disabled}
                               error={props.error}
                               numb={props.numb}
                               max={props.max}/>
        </div>
    );
};

