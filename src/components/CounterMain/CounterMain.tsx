import React from 'react';
import {CounterMainTable} from "./CounterMainTable";
import {CounterMainButton} from "./CounterMainButton";
import s from "./CounterMain.module.css"

type CounterMainType = {
    numbInc: () => void
    numbReset: () => void
    numb: number
    start: string
}



export const CounterMain = (props:CounterMainType) => {



    return (
        <div>
            <CounterMainTable numb={props.numb}
                              start={props.start}/>
            <CounterMainButton numbInc={props.numbInc}
                               numbReset={props.numbReset}
                               />
        </div>
    );
};

