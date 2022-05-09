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
    /*focus: boolean*/
    error: boolean
    active: boolean
}



export const CounterMain = (props:CounterMainType) => {



    return (
        <div className={'counter'}>
            <CounterMainTable numb={props.numb}
                              start={props.start}
                              max={props.max}
                              error={props.error}
                             /* focus={props.focus}*/
            active={props.active}/>
            <CounterMainButton numbInc={props.numbInc}
                               numbReset={props.numbReset}
                               disabled={props.disabled}
                               error={props.error}
                               numb={props.numb}
                               max={props.max}/>
        </div>
    );
};

