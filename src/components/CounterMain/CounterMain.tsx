import React from 'react';
import {CounterMainTable} from "./CounterMainTable";
import {CounterMainButton} from "./CounterMainButton";
import s from "./CounterMain.module.css"

type CounterMainType = {
    numbInc: () => void
    numbReset: () => void
    numb: number
    start: string
    max: string
    inputClassStart: string
    inputClassMax: string
    disabled: boolean
    focus: boolean
}



export const CounterMain = (props:CounterMainType) => {



    return (
        <div>
            <CounterMainTable numb={props.numb}
                              start={props.start}
                              max={props.max}
                              inputClassStart={props.inputClassStart}
                              inputClassMax={props.inputClassMax}
                              focus={props.focus}/>
            <CounterMainButton numbInc={props.numbInc}
                               numbReset={props.numbReset}
                              disabled={props.disabled} />
        </div>
    );
};

