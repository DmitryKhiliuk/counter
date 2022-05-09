import React from 'react';
import {CounterMainTable} from "./CounterMainTable";
import {CounterMainButton} from "./CounterMainButton";
import {InitialStateType} from "../../state/counter-reducer";


type CounterMainType = {
    counter: InitialStateType
}



export const CounterMain = (props:CounterMainType) => {



    return (
        <div className={'counter'}>
            <CounterMainTable
                              counter={props.counter}

                             />
            <CounterMainButton
                               counter={props.counter}/>
        </div>
    );
};

